import { NextRequest, NextResponse, userAgent } from "next/server"

export async function middleware(request: NextRequest) {
  const { device } = userAgent(request)
  const url = request.nextUrl.clone()
  const isDesktop = device.type !== 'mobile'

  if (isDesktop) {
    url.pathname = `/desktop${request.nextUrl.pathname}`
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon (icon file)
     */
    '/((?!api|_next/static|_next/image|icon|favicon.ico).*)',
  ],
}