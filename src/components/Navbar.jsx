import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className=' text-white flex z-[100] absolute justify-between p-4 items-center w-full '>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <img className='cursor-pointer'
          src={logo} 
          alt=""
        />
        <div>
          <button className='cursor-pointer py-2 px-5'>Sign In</button>
          <button className='bg-red-600 cursor-pointer py-2 px-5 rounded'>Sign Up</button>
        </div>

      </div>   
    </div>
  )
}

export default Navbar
