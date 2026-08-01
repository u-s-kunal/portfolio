import mongoose from "mongoose";
import nodemailer from "nodemailer";
import connectDB from "../../../lib/mongoose";
import twilio from "twilio";

// Contact Schema
const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true },
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    console.log("========== CONTACT FORM START ==========");

    // Connect Database
    console.log("🔄 Connecting to MongoDB...");
    await connectDB();
    console.log("✅ MongoDB Connected");

    // Read Request Body
    const data = await req.json();
    console.log("📥 Received Contact Data:", data);

    // Save Contact
    console.log("💾 Saving contact...");
    const saved = await Contact.create(data);
    console.log("✅ Contact Saved:", saved._id);

    // Check Email Environment Variables
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.TO_EMAIL
    ) {
      throw new Error(
        "Missing EMAIL_USER, EMAIL_PASS or TO_EMAIL environment variables.",
      );
    }

    console.log("📧 Creating email transporter...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("🔍 Verifying transporter...");
    await transporter.verify();
    console.log("✅ Gmail transporter verified");

    // Send Email
    const mailOptions = {
      from: `"Portfolio Bot 👨‍💻" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `📬 New Contact Message: ${data.subject}`,
      text: `You received a new contact message

👤 Name: ${data.name}
📧 Email: ${data.email}
📝 Subject: ${data.subject}

💬 Message:
${data.message}
`,
    };

    console.log("📤 Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully");

    // Send SMS
    if (
      process.env.TWILIO_PHONE_NUMBER &&
      process.env.ADMIN_PHONE_NUMBER &&
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN
    ) {
      try {
        console.log("📱 Sending SMS...");

        const twilioClient = twilio(
          process.env.TWILIO_ACCOUNT_SID,
          process.env.TWILIO_AUTH_TOKEN,
        );

        await twilioClient.messages.create({
          body: `📬 New Contact

👤 ${data.name}
📧 ${data.email}
📝 ${data.subject}

${data.message}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.ADMIN_PHONE_NUMBER,
        });

        console.log("✅ SMS Sent Successfully");
      } catch (smsError) {
        console.error("⚠️ SMS FAILED");
        console.error("Message:", smsError.message);
        console.error("Stack:", smsError.stack);
      }
    } else {
      console.warn("⚠️ Twilio credentials missing. SMS skipped.");
    }

    console.log("========== CONTACT FORM SUCCESS ==========");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("========== CONTACT FORM ERROR ==========");
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message, // Keep this for debugging. Replace with a generic message in production if preferred.
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
