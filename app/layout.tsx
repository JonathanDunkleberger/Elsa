import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elsa Research",
  description:
    "Bespoke advisory and technological incubation for complex corporate actions.",
  metadataBase: new URL("https://elsaresearch.co"),
  openGraph: {
    title: "Elsa Research",
    description:
      "Bespoke advisory and technological incubation for complex corporate actions.",
    type: "website",
    images: ["/strip.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-cream text-plum font-serif antialiased overflow-hidden">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
