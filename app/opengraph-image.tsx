import { ImageResponse } from "next/og";

export const alt = "Elsa Research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch the EB Garamond subset needed for the wordmark; Google serves
// TTF (which satori requires) when no browser user-agent is sent.
async function loadGaramond(text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&text=${encodeURIComponent(text)}`
    )
  ).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) throw new Error("Failed to resolve font URL");
  const response = await fetch(resource[1]);
  if (!response.ok) throw new Error("Failed to load font data");
  return response.arrayBuffer();
}

export default async function Image() {
  const wordmark = "Elsa Research";
  const garamond = await loadGaramond(wordmark);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3B2A4A",
          color: "#F4EDE4",
          fontFamily: "EB Garamond",
          fontSize: 96,
          letterSpacing: "0.08em",
        }}
      >
        {wordmark}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "EB Garamond",
          data: garamond,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
