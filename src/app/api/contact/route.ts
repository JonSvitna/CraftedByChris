import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, phone, source, tag } = await req.json();

  if (!email?.trim() || !name?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const isPreOrder = tag === "pre-order";
  const subject = isPreOrder
    ? `[Pre-Order] ${name} wants to be notified`
    : `[Custom Order] New inquiry from ${name}`;

  await resend.emails.send({
    from: "CBC Website <onboarding@resend.dev>",
    to: ["craftedbychrisllc@gmail.com"],
    subject,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
        <h2 style="margin:0 0 16px;">${isPreOrder ? "Pre-Order Notification Request" : "Custom Order Inquiry"}</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name</td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Email</td><td>${email}</td></tr>
          ${phone ? `<tr><td style="padding:8px 0;font-weight:bold;">Phone</td><td>${phone}</td></tr>` : ""}
          ${message ? `<tr><td style="padding:8px 0;font-weight:bold;vertical-align:top;">Message</td><td style="white-space:pre-wrap;">${message}</td></tr>` : ""}
          ${source ? `<tr><td style="padding:8px 0;font-weight:bold;">Source</td><td>${source}</td></tr>` : ""}
          <tr><td style="padding:8px 0;font-weight:bold;">Tag</td><td>${tag}</td></tr>
        </table>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
