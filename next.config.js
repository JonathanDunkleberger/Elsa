// Content-Security-Policy notes:
// - script-src/connect-src must allow the Clerk frontend API
//   (clerk.elsaresearch.co in production, *.clerk.accounts.dev in development).
// - challenges.cloudflare.com is required by Clerk bot protection.
// - 'unsafe-inline' script-src is required by Next.js without a nonce setup.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://clerk.elsaresearch.co https://*.clerk.accounts.dev https://challenges.cloudflare.com",
  "connect-src 'self' https://clerk.elsaresearch.co https://*.clerk.accounts.dev",
  "img-src 'self' data: https://img.clerk.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "worker-src 'self' blob:",
  "frame-src https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
