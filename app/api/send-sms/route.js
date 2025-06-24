// app/api/send-sms/route.js
import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  const { to, message } = await req.json();

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    const msg = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    });

    return NextResponse.json({ success: true, sid: msg.sid });
  } catch (error) {
    console.error("SMS Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
