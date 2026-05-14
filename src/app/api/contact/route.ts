import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { first_name, last_name, email, company, message } = body;

  if (!first_name || !last_name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // TODO: Integrate with email service (Resend, SendGrid, Postmark) or CRM
  console.log("Contact form submission:", { first_name, last_name, email, company, message });

  return NextResponse.json({ success: true }, { status: 200 });
}