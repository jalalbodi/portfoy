import { NextResponse } from "next/server";
import { logInfo } from "@/lib/logger";

export function buildHealthPayload() {
  return {
    status: "ok",
    service: "portfolio",
    timestamp: new Date().toISOString(),
    uptime: Number(process.uptime().toFixed(3)),
  };
}

export function healthResponse() {
  const payload = buildHealthPayload();
  logInfo("health_check", payload);
  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
