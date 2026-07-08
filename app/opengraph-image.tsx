import { ImageResponse } from "next/og";

export const alt = "Elsa Research — Privately Held";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PLUM = "#3B2A4A";
const CREAM = "#F4EDE4";

// Fetch the EB Garamond subset needed for the lockup; Google serves
// TTF (which satori requires) when no browser user-agent is sent.
async function loadGaramond(text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&text=${encodeURIComponent(text)}`
    )
  ).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
  );
  if (!resource) throw new Error("Failed to resolve font URL");
  const response = await fetch(resource[1]);
  if (!response.ok) throw new Error("Failed to load font data");
  return response.arrayBuffer();
}

function Spread({ text, fontSize }: { text: string; fontSize: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        fontSize,
        lineHeight: 1,
      }}
    >
      {text.split("").map((c, i) => (
        <span key={i}>{c}</span>
      ))}
    </div>
  );
}

export default async function Image() {
  const garamond = await loadGaramond("ELSARCHPIVTDY ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: PLUM,
          color: CREAM,
          fontFamily: "EB Garamond",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 540,
          }}
        >
          <div style={{ height: 2, backgroundColor: CREAM }} />
          <div style={{ display: "flex", marginTop: 40 }}>
            <Spread text="ELSA" fontSize={168} />
          </div>
          <div style={{ display: "flex", marginTop: 22, marginBottom: 38 }}>
            <Spread text="RESEARCH" fontSize={44} />
          </div>
          <div style={{ height: 2, backgroundColor: CREAM }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
              fontSize: 24,
              letterSpacing: "0.35em",
              paddingLeft: "0.35em",
            }}
          >
            PRIVATELY HELD
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "EB Garamond", data: garamond, weight: 400, style: "normal" },
      ],
    }
  );
}
