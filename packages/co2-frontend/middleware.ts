import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get("token");

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

// These are the protected routes this middleware applies to
export const config = {
    matcher: ["/home", "/admin/:path*"],
};
