// Clerk loads clerk-js and makes API calls against the "frontend API" domain
// encoded in the publishable key: pk_(live|test)_<base64 of "<domain>$">.
// Derive it here so the CSP always matches the instance actually in use.
function clerkOrigin() {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!key) return null;
  try {
    const domain = Buffer.from(key.replace(/^pk_(live|test)_/, ""), "base64")
      .toString("utf8")
      .replace(/\$$/, "");
    if (/^[a-z0-9][a-z0-9.-]+$/i.test(domain)) return `https://${domain}`;
  } catch {}
  return null;
}

const isDev = process.env.NODE_ENV !== "production";

const clerkSources = [
  ...new Set(
    [
      clerkOrigin(),
      "https://clerk.elsaresearch.co",
      "https://clerk.elsaresearch.com",
      "https://*.clerk.accounts.dev",
    ].filter(Boolean)
  ),
].join(" ");

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' is required by Next.js without a nonce setup;
  // 'unsafe-eval' is required by Next.js dev tooling only.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} ${clerkSources} https://challenges.cloudflare.com`,
  `connect-src 'self' ${clerkSources} https://clerk-telemetry.com`,
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
