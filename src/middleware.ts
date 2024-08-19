import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPathPublic = path === '/' || path === '/login' || path === '/signup';
    const token = request.cookies.get('token')?.value || '';

    if (isPathPublic && token) {
      // Allow access to public paths even if the user is authenticated
      if (path === '/') {
          return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/dashboard', request.url));
  }
    if ( !isPathPublic && !token ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next(); 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/dashboard',
  ],
}