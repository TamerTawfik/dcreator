// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request: NextRequestWithAuth) {
        // console.log(request.nextUrl.pathname)
        // console.log(request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/dashboard")
            && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }

        if (request.nextUrl.pathname.startsWith("/profile")
            && request.nextauth.token?.role !== "admin"
            && request.nextauth.token?.role !== "user") {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", ],
}