import { NextResponse } from "next/server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// export { default } from "next-auth/middleware"

export async function middleware(req) {
    const session = await getServerSession(authOptions)
    const pathname = req.nextUrl.pathname
    const res = NextResponse.next()

    if(!session && pathname.startsWith("/chat")) {
        const url = new URL(req.url)
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }

    if(session){
        const url = new URL(req.url)
        url.pathname = "/chat"
        return NextResponse.redirect(url)
    }

    return res
    
}

// ensures that the chat route will be protected
// export const config = {
//     matcher: ["/chat"]
// }

