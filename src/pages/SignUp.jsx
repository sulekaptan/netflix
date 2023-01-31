import React from 'react'
import background from '../assets/background.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src={background} alt="" />
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
            <div className='max-w-[320px] mx-auto py-16  '>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='text-black w-full flex flex-col py-4' action="">
                <input className='p-3 my-2 bg-gray-700 rounded ' type="email" name="" autoComplete='email' placeholder='Email' id="" />
                <input className='p-3 my-2 bg-gray-700 rounded ' type="password" autoComplete='current-password' placeholder='Password' name="" id="" />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='text-gray-600 text-sm flex justify-between items-center'>
                  <p><input className='mr-2' type="checkbox" name="" id="" />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8 text-white'>
                  <span className='text-gray-600'>Already subscribed to Netflix?</span>{''}
                  <Link to='/login'>Sıgn In</Link>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp