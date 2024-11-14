import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { I18nMiddleware } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  // Special case for root path
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};