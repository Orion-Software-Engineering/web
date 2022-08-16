import React from 'react'
import Image from 'next/image'

const Chat = () => {
  return (
    <div className='bg-gradient-to-l from-blue-200 to-emerald-400 h-[650px] 
    p-8 font-nunito flex items-center justify-around gap-8'>
      <div className=' flex justify-center items-center pl-16'>
        <Image src="/../public/Womanchatbox.png" alt="Womanchatbox" width={500} height={500} />
      </div>

      <div className='flex flex-col gap-8 justify-center items-center '>
        <span className='text-5xl  text-[#1C5677] w-[500px]'>
          Get ready to meet your kind of people!
        </span>

        <p className='text-2xl text-white w-[480px] pr-16'>
          Socializing isn't always easy
          especially when there's no common interest to talk about.
          Orion Meet helps you to find and chat with people of similar interests so
          you already have a basis for discussion.
        </p>
      </div>



      {/* <div className='w-[600px] h-[475px] flex'>
        <div>
          <Image src="/../public/Womanchatbox.png" width='500px' height='450px' />
        </div>
      </div>
      <div className='w-[550px] h-[475px]] flex'>
        <div className=' h-[155px] flex '>
          <h2 className='w-[548px] text-5xl  text-[#1C5677]'>Get ready to meet your kind
            of people!
          </h2>
        </div>
        <div className='h-[275px] w-[400px]'>
          <p className='text-2xl text-white'>
            Socializing isn't always easy
            especially when there's no common interest to talk about.
            Orion Meet helps you to find and chat with people of similar interests s
            o you already have a basis for discussion.
          </p>
        </div>
      </div> */}
    </div>

  )
}

export default Chat
