import { describe, expect, it } from "vitest";
import { profile } from "@/data/profile";

describe("profile data", () => {
  it("contains the required portfolio sections", () => {
    expect(profile.projects.length).toBeGreaterThanOrEqual(3);
    expect(profile.skills.map((category) => category.title)).toEqual([
      "Frontend",
      "Backend",
      "Database",
      "DevOps",
      "Tools",
    ]);
    expect(profile.education.school).toBe("Bitlis Eren University");
    expect(profile.hobbies.length).toBeGreaterThanOrEqual(3);
  });
});
