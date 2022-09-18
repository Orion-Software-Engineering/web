
import React from 'react'
import {FcGoogle}  from 'react-icons/fc'
import loginImg from '../../public/TopBackground.png'

export default function Loginpage() {
    
    return ( 
        <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover  mix-blend-overlay' src={loginImg} alt="/" />
        
        <div className="flex justify-center items-center h-full"> 
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-4xl font-bold text-center py-4"> ORION </h2>
        <div className="flex justify-between">
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle/> Google</p>
        </div>
        <div className="flex flex-col mb-4">
             <label>Email</label>
             <input className="border relative bg-grey-100 p-2"type="email" />
        </div>
        <div className="flex flex-col">
            <label>Password</label>
            <input className="border relative bg-grey-100 p-2" type="password" />
        
        </div>
        <button className="w-full py-3 mt-8 bg-red-600 hover:bg-red-400 relative text-white">LOGIN</button>
        <p className="flex items-center mt-2"><input className="mr-2" type= "checkbox" />Remember Me</p>
        <p className="text-center mt-8"> Don't have an account? Sign up</p>
        </form>
        </div>
        </div>
    )
}