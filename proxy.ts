import { NextRequest, NextResponse } from "next/server";
import { logInfo } from "@/lib/logger";

export function proxy(request: NextRequest) {
  const requestId = crypto.randomUUID();
  const startedAt = Date.now();
  const response = NextResponse.next();

  response.headers.set("x-request-id", requestId);

  logInfo("request", {
    requestId,
    method: request.method,
    path: request.nextUrl.pathname,
    durationMs: Date.now() - startedAt,
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|apple-icon.png|images|cv.pdf).*)",
  ],
};
