import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-garamond",
});

const description =
  "Elsa Research advises on complex matters across jurisdictions and develops certain interests for its own account.";

export const metadata: Metadata = {
  title: "Elsa Research",
  description,
  metadataBase: new URL("https://elsaresearch.co"),
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
    description,
    url: "https://elsaresearch.co",
    siteName: "Elsa Research",
    type: "website",
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
      <html lang="en" className={garamond.variable}>
        <body className="bg-cream text-plum font-serif antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
