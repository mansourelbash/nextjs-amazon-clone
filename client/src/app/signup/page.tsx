"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {signUp} from '@/lib/api/auth'
import { useAppStore } from '@/store/store';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const router = useRouter();
  const {setUserInfo} = useAppStore()
  const handleSignUp = async () => {
    const response = await signUp(email, password);
    if(response?.data?.username){
      setUserInfo(response.data);
      router.push('/');
    }
  

  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
         <Link href="#" className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
          <Image src="/amazon-logo-white.png" alt="amazon logo" height={150} width={150}></Image>

         </Link>
         <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Create Your Account</h1>
            <div className='space-y-0 md:space-y-2'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Your email</label>
               <input type='email' id="email" value={email} onChange={(e)=>setEmail(e.target.value)} 
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name@company.com'/>

            </div>
            <div className='space-y-0 md:space-y-2'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Your Password</label>
               <input type='password' id="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='password'/>

            </div>
            <button onClick={handleSignUp} className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an Account</button>
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>Already have an account? <Link className='font-medium text-primary-600 hover:underline dark:text-primary-500' href="/login">Login here</Link></p>
          </div>
         </div>
      </div>

    </section>
  )
}

export default Page