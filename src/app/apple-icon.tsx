import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — a glossy crescent moon on a deep-space field. */
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
            "radial-gradient(130px 130px at 34% 26%, #16284d 0%, #070b16 60%, #05060a 100%)",
        }}
      >
        {/* moon disc */}
        <div
          style={{
            position: "relative",
            width: 108,
            height: 108,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #eaf7ff 0%, #3fb0e0 52%, #0a5577 100%)",
            boxShadow: "0 0 30px 2px rgba(63,176,224,0.3)",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* glossy specular sheen */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 6,
              width: 56,
              height: 40,
              borderRadius: "50%",
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)",
              display: "flex",
            }}
          />
          {/* crescent cutout */}
          <div
            style={{
              position: "absolute",
              top: -14,
              left: 26,
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "#070d1a",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
