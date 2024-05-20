import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isNotProtected = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && !isNotProtected(req)) {

    // Add custom logic to run before redirecting

    auth().protect();
  }

  return NextResponse.next();
});

export const config = { matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']};