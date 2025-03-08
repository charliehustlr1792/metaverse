// middleware to restrict mobile access
import {NextResponse,userAgent} from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request:NextRequest){
 const {device} =userAgent(request);
 if(device.type==='mobile'){
    const mobileRedirectUrl=new URL('/mobile-not-supported',request.url);
    return NextResponse.rewrite(mobileRedirectUrl);
 }
 return NextResponse.next()
}

export const config={
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}

