import mongoose from "mongoose";
import connectDB from "@/lib/mongoose";

export async function GET() {
  try {
    await connectDB();

    const db = mongoose.connection.useDb("portfolio");
    await db.collection("knowledge").findOne({});

    return Response.json({
      success: true,
      message: "MongoDB connection is working",
    });
  } catch (error) {
    console.error("DATABASE TEST ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
