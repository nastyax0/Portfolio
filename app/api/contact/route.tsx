// app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  await resend.emails.send({
    from: "You <no-reply@yourdomain.com>",
    to: "you@yourdomain.com",
    subject: "New Booking Inquiry",
    react: EmailTemplate({ name, email }),
  });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
