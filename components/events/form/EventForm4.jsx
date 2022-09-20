import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ToggleSWitch from '../ToggleSwitch'


const EventForm4 = ({ step, updateStep }) => {

  const formRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }

  return (
    <div className="text-black h-screen  border-gray-700 flex font-nunito ">

      <div className="justify-self-center self-center flex border-gray-600  h-screen bg-[url('../public/WhatsappB.png')]">
        <div className="flex flex-col h justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[150px]" >
            <label for="first" className='mt-[-20px]'>Event Name</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="first">Event category</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="third" className="mt-[20px]">Event Description:</label>
            <textarea type="text" id="third" name="last" className="bg-black h-[80px] w-[300px] text-white pl-[10px] pb-[50px] rounded-lg" />
            <label for="first">Organizers</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="first">Date and Time</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="first">Age Restrictions(18+)</label>
            <ToggleSWitch />
            <label for="second" className="mt-[0px]">MCs</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="third" className="mt-[20px]">Guests</label>
            <textarea type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            {/* <label for="third" className="mt-[0px] text-xs text-[#575757] cursor-pointer">Add another guest</label> */}
          </form>

          <div className="flex flex-row w-[300px] mt-[-80px] justify-between ">
            <p className="self-start cursor-pointer"
              onClick={() => updateStep(step - 1)}>
              {'<'}Back
            </p>
          </div>
          <div className='float-right mt-16 cursor-pointer bg-black text-gray-200 text-xs w-36
             rounded-md h-8 flex justify-center items-center shadow-xl hover transition duration-300 hover:text-white select-none'
                onClick={() => updateStep(step + 1)}>
                <p className='px-2 font-Nunito'>
                    { 'SUBMIT'}
                </p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default EventForm4