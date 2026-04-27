import { NextRequest, NextResponse } from "next/server";
import { logError, logInfo, logWarn } from "@/lib/logger";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const name = cleanString(payload.name);
  const email = cleanString(payload.email).toLowerCase();
  const message = cleanString(payload.message);
  const company = cleanString(payload.company);

  if (company.length > 0) {
    return { ok: false as const, reason: "honeypot" };
  }

  if (name.length < 2 || name.length > 80) {
    return { ok: false as const, reason: "Name must be 2-80 characters." };
  }

  if (!emailPattern.test(email) || email.length > 120) {
    return { ok: false as const, reason: "Enter a valid email address." };
  }

  if (message.length < 20 || message.length > 1200) {
    return {
      ok: false as const,
      reason: "Message must be 20-1200 characters.",
    };
  }

  return {
    ok: true as const,
    value: {
      name,
      email,
      message,
    },
  };
}

async function forwardToWebhook(message: {
  name: string;
  email: string;
  message: string;
}) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    logInfo("contact_message_logged", {
      delivery: "local-log",
      from: message.email,
      name: message.name,
      messageLength: message.message.length,
    });
    return "logged";
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...message,
        to: process.env.CONTACT_RECIPIENT ?? "portfolio-owner",
        source: "portfolio-contact-form",
        timestamp: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Webhook returned ${response.status}`);
    }

    logInfo("contact_message_forwarded", {
      delivery: "webhook",
      from: message.email,
      status: response.status,
    });
    return "webhook";
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const validated = validatePayload(payload);

  if (!validated.ok) {
    if (validated.reason === "honeypot") {
      logWarn("contact_honeypot_blocked", {
        ip: request.headers.get("x-forwarded-for") ?? "unknown",
      });
      return NextResponse.json({ message: "Message received." });
    }

    return NextResponse.json({ message: validated.reason }, { status: 400 });
  }

  try {
    const delivery = await forwardToWebhook(validated.value);
    return NextResponse.json({
      message:
        delivery === "webhook"
          ? "Thanks. Your message was sent."
          : "Thanks. Your message was received and logged locally.",
    });
  } catch (error) {
    logError("contact_delivery_failed", {
      error: error instanceof Error ? error.message : "unknown",
    });
    return NextResponse.json(
      {
        message: "The form is working, but delivery is not configured correctly yet.",
      },
      { status: 502 },
    );
  }
}
