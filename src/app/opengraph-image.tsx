import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1000px 600px at 80% -10%, #16284d 0%, #05060a 55%), #05060a",
          fontFamily: "sans-serif",
        }}
      >
        {/* moon glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, #2a3b63, #0a1224 60%, #05060a 100%)",
            boxShadow: "0 0 160px 40px rgba(77,166,255,0.25)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #7cc0ff, #4da6ff 50%, #8b5cf6)",
              display: "flex",
            }}
          />
          <div style={{ color: "#eef2fb", fontSize: 34, fontWeight: 600, display: "flex" }}>
            Lunar
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#eef2fb",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 880,
              display: "flex",
            }}
          >
            Software for the next frontier.
          </div>
          <div style={{ color: "#8b94ac", fontSize: 30, maxWidth: 760, display: "flex" }}>
            Mission-critical engineering for governments, enterprises, and telecom.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            color: "#7cc0ff",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Blockchain · Telecom Intelligence · Enterprise · Data
        </div>
      </div>
    ),
    { ...size }
  );
}
