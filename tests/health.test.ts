import { describe, expect, it } from "vitest";
import { GET } from "@/app/health/route";

describe("health route", () => {
  it("returns a healthy JSON payload", async () => {
    const response = GET();
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload).toMatchObject({
      status: "ok",
      service: "portfolio",
    });
    expect(typeof payload.timestamp).toBe("string");
    expect(typeof payload.uptime).toBe("number");
  });
});
