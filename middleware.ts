import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { auth: session } = req;
  const { pathname } = req.nextUrl;

  console.log("Middleware executed for:", pathname);
  console.log("User authenticated:", !!session?.user);

  const isAuth = !!session?.user;

  if (
    !isAuth &&
    (pathname.startsWith("/main") || pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/admin") && session?.user) {
    console.log("Admin area accessed by:", session.user.name);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/main/:path*", "/admin/:path*", "/api/protected/:path*"],
};
