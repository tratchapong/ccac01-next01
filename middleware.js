import { NextResponse } from "next/server";
import * as jwt from 'jsonwebtoken'

export default function middleware(req) {
		console.log(req.url)
    try {
			const token = req.cookies.get('token').value
			// const user = jwt.verify(token, process.env.JWT_SECRET)
			// console.log('token verify...',user)
			// if(jwt.verify(token, process.env.JWT_SECRET)) {
			// 	throw new Error('Token verify has failed')
			// }
      
			return NextResponse.next()
    }catch(err) {
      console.log('err in middleware')
      console.log(err.message)
			return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher : '/private/:path*'
}