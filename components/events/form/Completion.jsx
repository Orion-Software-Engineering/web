import React, { useRef, useState } from 'react'
import Link from 'next/link'

const Completion = ({ step, updateStep }) => {

  return (
    <div className='flex flex-col justify-center items-center h-[400px] w-[400px]'>

      <div className=''>
        <p className="text-3xl font-extrabold font-Nunito">Your Event Is Live</p>
      </div>

      <div className='mt-16 cursor-pointer bg-black text-gray-200 text-xs w-36
      rounded-md h-8 flex justify-center items-center shadow-xl hover:bg-red-400 transition duration-300 hover:text-gray-800 select-none'>
        <Link className='px-2 font font-Nunito' href={'/organiserprofile'}>
          {`View Events`}
        </Link>
      </div>

      <div className='flex flex-row w-[300px] mt-[50px] border-green-700 justify-between '>
        <p className="self-start cursor-pointer"
          onClick={() => updateStep(step - 1)}>
          {'<'}Back
        </p>
      </div>.

    </div>

  )
}

export default Completion