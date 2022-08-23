import React, { useRef } from 'react'
import Image from 'next/image'

const TopEvents = () => {
  const formRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }

  return (
    <div className="text-black  border-gray-700  justify-around flex font-nunito mt-[50px]">
      <form ref={formRef} handleSubmit={handleSubmit} className="w-96 " >
        <div className="flex flex-col  border-blue-600 h-[800] gap-x-16 ">
          <label for="first">Event Name:</label>
          <input type="text" id="first" name="first" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="second" className="mt-[40px]">Event Category:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="third" className="mt-[40px]">Event Description:</label>
          <input type="text" id="third" name="last" className="bg-black h-[150px] text-white pl-[10px] rounded-lg" />
          <label for="fourth" className="mt-[40px]">Organizers:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="fifth" className="mt-[40px]">Date:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="sixth" className="mt-[40px]">Time:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="seventh" className="mt-[40px]">Age Restrictions:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="eigth" className="mt-[40px]">MCs:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
          <label for="ninth" className="mt-[40px]">Guests:</label>
          <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
        </div>
      </form>

      <div>
        <div>
          <p className=" border-blue-600 text-center ">Upload Event Flyer</p>
        </div>
        <div className='bg-[#858484]  border-blue-700 w-[400px] mt-[15px] h-[450px] flex justify-center items-center'>
          <div className='w-[100px]'>
            <Image src="/../public/camera.png" alt="camera" width='100px' height='100px' />
          </div>
        </div>
      </div>

    </div >

  )
}

export default TopEvents