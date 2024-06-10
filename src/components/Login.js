import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSiginin,setIsSignin]=useState(true)
  const toggleSignin=()=>{
      setIsSignin(!isSiginin)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix loogo'/>
      </div>
      <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{(isSiginin)?"Sign In":"Sign Up"}</h1>
        {(!isSiginin)&& <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input type='text' placeholder='email address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
         <input type='password' placeholder='Password' className='p-4 my-4 w-full  bg-gray-700 rounded-lg '/>
        <button  className='p-4 my-6 bg-red-700 w-full rounded-lg'>{(isSiginin)?"Sign In":"Sign Up"}</button>
      <p className='p-4 cursor-pointer' onClick={toggleSignin}>{(isSiginin)?"New to Netflix? Sign Up Now":"Already a User? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login