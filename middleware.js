import { NextResponse } from 'next/server'

export function middleware(request) {
    const exceptionPath = [
        '/login', '/signup'
    ]
    const pathname = request.nextUrl.pathname;
    const cookie = request.headers.get('cookie');
    const token = cookie && cookie.split(';').find(c => c.trim().startsWith('token='))?.split('=')[1]

    console.log(token);
    
    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.startsWith('/static')) {
        return;
    }

    if (!exceptionPath.includes(pathname)) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (pathname === '/login' || pathname === '/signup') {
        if (token) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return;
    }
    if (typeof window !== 'undefined') {
        console.log(localStorage.getItem('cart'));
        
        if (pathname === '/checkout' && !localStorage.getItem('cart')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }


    return;
}
