import React from 'react'
import Image from 'next/image'

const Question = () => {
  return (
    <div className='h-[650px] flex border border-red-600'>
      <div className='w-[600px] h-[375px] mt-[150px] ml-[100px] border-red-600'>
        <p className='text-6xl text-[#1C5677] text-center font-semibold font-nunito'>
          SO WHAT ARE YOU WAITING FOR? COME ON BOARD AND SEE THE BEST FRIENDS
          YOU'RE YET TO MEET.
        </p>
      </div>
      <div className='w-[600px] h-[550px] mt-[50px] ml-[100px] border border-red-600'>
      <Image src="/../public/selfiesquad.png" width='690px' height='630px' />
      </div>

    </div>
  )
}

export default Question

