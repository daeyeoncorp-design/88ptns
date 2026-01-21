import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isPreview = request.cookies.has('88ptns-preview')

    // If user visits root path '/'
    if (request.nextUrl.pathname === '/') {
        // If NOT authorized, redirect to /coming-soon
        if (!isPreview) {
            return NextResponse.redirect(new URL('/coming-soon', request.url))
        }
        // If authorized, let them pass to the real homepage
    }

    return NextResponse.next()
}

export const config = {
    // Only run middleware on the root path
    matcher: ['/'],
}
