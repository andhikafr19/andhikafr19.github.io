import { NextResponse } from "next/server";

// Simple in-memory counter (in production, use a database)
let downloadCount = 0;

export async function POST() {
  try {
    downloadCount++;
    console.log(`CV downloaded. Total downloads: ${downloadCount}`);
    
    return NextResponse.json(
      { success: true, count: downloadCount },
      { status: 200 }
    );
  } catch (error) {
    console.error("CV download tracking error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to track download" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ count: downloadCount });
}
