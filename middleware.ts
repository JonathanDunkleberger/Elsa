import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/portal(.*)"]);
const isPublicRoute = createRouteMatcher([
  "/",
  "/portal/sign-in(.*)",
  "/portal/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) && !isPublicRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: new URL("/portal/sign-in", req.url).toString(),
    });
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
