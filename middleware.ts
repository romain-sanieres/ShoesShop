import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

// Define an array of protected routes
const protectedRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  // Check if the current route is protected
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If the route is protected and there's no active session, redirect to
  if (!session && isProtected) {
    const abosoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(abosoluteURL.toString());
  }

  // If authentication passes or the route is not protected, continue to the next middleware
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
