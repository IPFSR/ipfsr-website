import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	// RSC pathname workaround, since ATM we can't access pathname in RSC
	requestHeaders.set('x-origin', request.nextUrl.origin)
	requestHeaders.set('x-pathname', request.nextUrl.pathname)

	const response = NextResponse.next({
		request: {
			headers: requestHeaders
		}
	})

	return response
}
