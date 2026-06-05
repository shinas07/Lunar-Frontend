import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This validates and accepts inquiries. By default it logs the
 * submission server-side and returns success — wire it to your email
 * provider (Resend, Postmark, SendGrid) or CRM in the marked section.
 */

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  service?: string;
  message?: string;
  // Honeypot — should always be empty for real users.
  website?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Bot honeypot — silently accept to avoid signalling the trap.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!data.name?.trim()) errors.name = "Name is required.";
  if (!data.email?.trim() || !emailRe.test(data.email)) errors.email = "A valid email is required.";
  if (!data.message?.trim() || data.message.trim().length < 10)
    errors.message = "Please tell us a little more (10+ characters).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // ---------------------------------------------------------------
  // TODO: deliver the inquiry. Examples:
  //   • Resend:    await resend.emails.send({ ... })
  //   • Postmark / SendGrid API
  //   • Persist to a database or forward to a CRM / Slack webhook
  // ---------------------------------------------------------------
  console.info("[contact] new inquiry", {
    name: data.name,
    email: data.email,
    company: data.company,
    service: data.service,
    budget: data.budget,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
