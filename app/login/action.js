'use server'
import * as jwt from 'jsonwebtoken'
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState, formData) {
    const username = formData.get('username')
    const password = formData.get('password')

    if( !username.trim() || !password.trim()) {
        return {message : 'Please fill-in all inputs'}
    }
    // console.log(username, password)

    if(username==='codecamp' && password==='1234') {
        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn : '7d'} )
        cookies().set('token', token )
        return redirect('/private')
        // return { pass: true, message : 'Login OK'}
    }

    return { message : 'Login failed'}
}