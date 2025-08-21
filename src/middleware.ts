import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const restrictedRoutes = routing.locales.map((locale) => `/${locale}/account`);

  if (restrictedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !token) {
    const loginUrl = new URL('/', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
