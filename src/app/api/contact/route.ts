import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { sendMail } from "@/lib/mail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Send email
    const mailResult = await sendMail(result.data);

    if (!mailResult.success) {
      return NextResponse.json(
        { success: false, message: mailResult.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: mailResult.message },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
