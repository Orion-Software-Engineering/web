import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { BiCalendar, BiTime } from 'react-icons/bi'



const Completion = () => {

  const formRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }



  return (
    <div className="text-black h-screen justify-between border-gray-700 flex font-nunito ">

      <div className="justify-self-center self-center flex  border-gray-600 mt-[100px] h-screen bg-[url('../public/WhatsappB.png')]">
        <div className="flex flex-col h justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]" >
            <label htmlFor="first">Event Name</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label htmlFor="first">Event category</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label htmlFor="third" className="mt-[20px]">Event Description:</label>
            <textarea type="text" id="third" name="last" className="bg-black h-[80px] w-[300px] text-white pl-[10px] pb-[50px] rounded-lg" />
            <label htmlFor="first">Organizers</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label htmlFor="first">Date and Time</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label htmlFor="first">Age Restrictions</label>
            <div className="flex justify-start ml-10">
              <div className="form-check form-switch">
                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-black  bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label inline-block  text-gray-800" htmlFor="flexSwitchCheckDefault" />
              </div>
            </div>
            <label htmlFor="second" className="mt-[20px]">MCs</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label htmlFor="third" className="mt-[20px]">Guests</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
          </form>
          
          <div className="flex flex-row w-[300px] justify-between ">
            <p className="self-start">{'<'}Back</p>
            <p className="self-end ">Next{'>'}</p>
          </div>

          <p>4/4</p>
        </div>

        <div className=" border-blue-600 w-[400px] bg-[#FF0000] flex flex-col gap-y-2  items-center rounded-r-3xl">
          <div className=' mt-[50px] '>
            <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
          </div>
          <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center '>
            <div className='w-[75px]'>
              <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Completion