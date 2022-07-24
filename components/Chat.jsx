import React from 'react'
import Image from 'next/image'

const Chat = () => {
  return (
    <div className='bg-gradient-to-l from-blue-200 to-emerald-400 h-[650px] font-nunito flex'>
      <div className='w-[600px] h-[475px] ml-[100px] mt-[75px] pt-[15px] flex'>
        <div><Image src="/../public/Womanchatbox.png" width='500px' height='450px'/></div>
      </div>
      <div className='w-[550px] h-[475px] mt-[75px] ml-[150px] flex'>
        <div className=' h-[155px] flex '><h2 className='w-[548px] text-5xl  text-[#1C5677] pl-[40px]'>Get ready to meet your kind of people! </h2></div>
        <div className='mt-[155px] h-[275px] ml-[-500px] w-[400px]'><p className='text-2xl text-white'>Socializing isn't always easy especially when there's no common interest to talk about.Orion Meet helps you to find and chat with people of similar interests so you already have a basis for discussion.</p></div>
      </div>
    </div>

  )
}

export default Chat
