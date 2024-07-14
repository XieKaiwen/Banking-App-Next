import React from 'react'
import AuthForm from '@/components/AuthForm'


export default function SignUp() {

  // const loggedInUser = await getLoggedInUser();
  // console.log(loggedInUser);
  return (
    <section className='flex-center size-full max-sm:px-6'>
        <AuthForm type='sign-up' />
    </section>
  )
}
