import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/content";

export async function POST(request: Request) {
  const { firstName, lastName, email, message } = await request.json();

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email sending isn't configured yet — set RESEND_API_KEY in the environment." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Extracta Index <onboarding@resend.dev>",
    to: CONTACT.projectsEmail,
    replyTo: email,
    subject: `New Index contact form submission from ${firstName} ${lastName ?? ""}`,
    text: `From: ${firstName} ${lastName ?? ""} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
