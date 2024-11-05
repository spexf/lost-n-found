import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/auth/register")){
        return NextResponse.redirect(new URL("/auth/login",request.url));
    }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], // Terapkan ke semua halaman kecuali assets
};