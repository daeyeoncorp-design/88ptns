import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isPreview = request.cookies.has('88ptns-preview')
    const hostname = request.headers.get('host') || ''

    // Canonical Domain Redirect
    // If accessing from 88ptns.co.kr or 88ptns.kr, redirect to 88ptns.com
    if (hostname.includes('88ptns.co.kr') || hostname.includes('88ptns.kr')) {
        const url = new URL(request.url)
        url.hostname = '88ptns.com'
        url.port = '' // Ensure port is cleared for production
        return NextResponse.redirect(url)
    }

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
