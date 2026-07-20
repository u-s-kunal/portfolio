import mongoose from "mongoose";
import nodemailer from "nodemailer";
import twilio from "twilio";
import connectDB from "../../../lib/mongoose"; // ⚠️ verify this file actually exists at this path/name

// Mongoose Contact model
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
    await connectDB();

    const data = await req.json();
    console.log("✅ Received contact data:", data);

    // Save to MongoDB
    const saved = await Contact.create(data);
    console.log("✅ Saved contact data:", saved);

    // Email check
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.TO_EMAIL
    ) {
      console.error("❌ Email environment variables are not set!");
      return new Response(JSON.stringify({ error: "Server config error" }), {
        status: 500,
      });
    }

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Bot 👨‍💻" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `📬 New Contact Message: ${data.subject}`,
      text: `You received a new contact message 👋

      👤 Name: ${data.name}
      📧 Email: ${data.email}
      📝 Subject: ${data.subject}

      💬 Message:
${data.message}
`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent");

    // Send SMS via Twilio (client created here, not at module load,
    // so missing/invalid env vars don't crash the whole route file)
    if (
      process.env.TWILIO_PHONE_NUMBER &&
      process.env.ADMIN_PHONE_NUMBER &&
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN
    ) {
      try {
        const twilioClient = twilio(
          process.env.TWILIO_ACCOUNT_SID,
          process.env.TWILIO_AUTH_TOKEN,
        );

        await twilioClient.messages.create({
          body: `📬 New contact from
          👤 Name: ${data.name}
          📧 Email: ${data.email}
          📝 Subject: ${data.subject}

          💬 Message:
${data.message}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.ADMIN_PHONE_NUMBER,
        });
        console.log("✅ SMS sent");
      } catch (smsError) {
        // Don't let SMS failure fail the whole request —
        // the form submission and email already succeeded.
        console.error("⚠️ SMS failed, continuing anyway:", smsError);
      }
    } else {
      console.warn("⚠️ Skipped SMS: Twilio env vars not fully set.");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error saving contact or sending notifications:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process contact form" }),
      { status: 500 },
    );
  }
}
