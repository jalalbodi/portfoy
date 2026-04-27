import { healthResponse } from "@/lib/health";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  return healthResponse();
}
