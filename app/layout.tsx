import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elsa Research",
  description:
    "Bespoke advisory and technological incubation for complex corporate actions.",
  metadataBase: new URL("https://elsaresearch.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Elsa Research",
    description:
      "Bespoke advisory and technological incubation for complex corporate actions.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInUrl="/portal/sign-in"
      signUpUrl="/portal/sign-up"
      signInFallbackRedirectUrl="/portal"
      signUpFallbackRedirectUrl="/portal"
      afterSignOutUrl="/"
    >
      <html lang="en">
        <body className="bg-cream text-plum font-serif antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
