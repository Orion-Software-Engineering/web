import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const TopEvents = () => {
  const formRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }

  return (
    <div>
      <div className="text-black border h-[600px] justify-center items-center border-gray-700 flex font-nunito mt-[50px]">
        <div className="justify-center flex border border-gray-600 h-[400px] ">
          <form ref={formRef} handleSubmit={handleSubmit} className="w-96 " >
            <div className="flex flex-col border border-blue-600 h-[800] rounded-l-lg bg-[url('../public/WhatsappB.png')]">
              <label for="first">Events Name:</label>
              <input type="text" id="first" name="first" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
              <label for="second" className="mt-[30px]">Event Category:</label>
              <input type="text" id="second" name="last" className="bg-black h-[40px] text-white pl-[10px] rounded-lg" />
              <label for="third" className="mt-[30px]">Event Description:</label>
              <input type="text" id="third" name="last" className="bg-black h-[150px] text-white pl-[10px] rounded-lg" />
            </div>
          </form>

          <div className="border border-blue-600 w-[400px] bg-[#FF7A00] flex flex-col gap-y-2 justify-center items-center rounded-r-lg">
            <div>
              <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
            </div>
            <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
              <div className='w-[75px]'>
                <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' />
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default TopEvents