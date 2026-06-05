import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — a luminous crescent moon on a deep-space field. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120px 120px at 32% 28%, #16284d 0%, #070b16 60%, #05060a 100%)",
        }}
      >
        {/* full moon */}
        <div
          style={{
            position: "relative",
            width: 104,
            height: 104,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #9fd0ff 0%, #4da6ff 55%, #8b5cf6 100%)",
            boxShadow: "0 0 48px 6px rgba(77,166,255,0.45)",
            display: "flex",
          }}
        >
          {/* crescent cutout */}
          <div
            style={{
              position: "absolute",
              top: -16,
              left: 22,
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "#070b16",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
