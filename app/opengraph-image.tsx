import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} portfolio`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101412",
        color: "#eef5f1",
        padding: 72,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #65c6a6",
            borderRadius: 999,
            padding: "12px 22px",
            color: "#65c6a6",
            fontSize: 28,
          }}
        >
          Computer Engineering Portfolio
        </div>
        <div style={{ fontSize: 28 }}>{profile.location}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: 86, fontWeight: 800, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 18, fontSize: 42, color: "#a6f0d4" }}>
          {profile.role}
        </div>
        <div style={{ marginTop: 30, maxWidth: 860, fontSize: 30 }}>
          Next.js · TypeScript · Docker · CI/CD · Security scans
        </div>
      </div>
    </div>,
    size,
  );
}
