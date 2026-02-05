import { NextRequest, NextResponse } from "next/server";
import JwtService from "./services/JwtService";

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (!JwtService.decrypt(session)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (request.nextUrl.pathname === '/admin') {
        return NextResponse.redirect(new URL('/admin/categories', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*']
}