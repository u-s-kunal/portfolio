import mongoose from "mongoose";
import connectDB from "../../../lib/mongoose";
import nodemailer from "nodemailer";
import twilio from "twilio";

// Schema definition
const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// POST handler
export async function POST(req) {
  await connectDB();

  let data = {};
  try {
    data = await req.json();
  } catch (err) {
    console.error("❌ Invalid JSON body:", err);
    return new Response("Invalid JSON body", { status: 400 });
  }

  console.log("✅ Received contact data:", data);

  try {
    // Save to MongoDB
    const saved = await Contact.create(data);
    console.log("✅ Contact saved:", saved);

    // Environment variable checks
    const requiredEnvVars = [
      "EMAIL_USER",
      "EMAIL_PASS",
      "TO_EMAIL",
      "TWILIO_ACCOUNT_SID",
      "TWILIO_AUTH_TOKEN",
      "TWILIO_PHONE_NUMBER",
      "ADMIN_PHONE_NUMBER",
    ];

    const missing = requiredEnvVars.filter((key) => !process.env[key]);
    if (missing.length > 0) {
      console.warn(`⚠️ Missing environment variables: ${missing.join(", ")}`);
    }

    // ==== ⚠️ Email/SMS disabled for debugging ====

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // const mailOptions = {
    //   from: `"Portfolio Bot 👨‍💻" <${process.env.EMAIL_USER}>`,
    //   to: process.env.TO_EMAIL,
    //   subject: `📬 New Contact Message: ${data.subject}`,
    //   text: `New contact from ${data.name} (${data.email}):\n\n${data.message}`,
    // };

    // await transporter.sendMail(mailOptions);
    // console.log("✅ Email sent");

    // const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    // await twilioClient.messages.create({
    //   body: `📬 New contact from ${data.name}\n📧 ${data.email}\n📝 ${data.subject}\n💬 ${data.message}`,
    //   from: process.env.TWILIO_PHONE_NUMBER,
    //   to: process.env.ADMIN_PHONE_NUMBER,
    // });
    // console.log("✅ SMS sent");

    // ==== ✅ End of Email/SMS block ====

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Server error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process contact form" }),
      { status: 500 }
    );
  }
}
