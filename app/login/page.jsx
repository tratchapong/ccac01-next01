'use client'

import { useFormState } from 'react-dom'
import { login } from './action'

export default function Page() {
	const initState = { message : ''}

	const [state, formAction] = useFormState(login, initState)
  return (
    <form action={formAction} className='flex flex-col gap-3 w-[800px] p-8 border mx-auto rounded mt-20'>
				<p className={`${state.pass ? 'text-lime-500' :  'text-red-500'} text-xs` }>{state.message}</p>
        <p>Username :</p>
        <input type="text" className='input input-bordered' name='username'/>
        <p>Password :</p>
        <input type="password" className='input input-bordered' name='password'/>
        <button className='btn mt-6'>Login</button>
    </form>

  )
}
