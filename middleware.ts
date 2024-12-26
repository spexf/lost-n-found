// middleware.js
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Mendapatkan token dari cookie request
  const token = request.cookies.get('token')?.value;

  // Tentukan halaman yang tidak memerlukan autentikasi (misalnya login dan register)
  const publicPaths = ['/auth/login', '/auth/register'];
  const url = request.nextUrl.clone();
  if (url.pathname == '/') {
    return NextResponse.next();
  }
  // Bypass middleware jika pengguna mengakses halaman publik
  if (publicPaths.some((path) => url.pathname.startsWith(path))) {
    if (token){
      url.pathname = '/lost'
      return NextResponse.redirect(url)
    }
    return NextResponse.next();
  }

  // Jika tidak ada token, redirect ke halaman login
  if (!token) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  // Jika token ada, lanjutkan request
  return NextResponse.next();
}

// Konfigurasi matcher untuk menentukan rute yang diawasi middleware
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
