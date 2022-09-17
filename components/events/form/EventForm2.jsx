import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { BiCalendar, BiTime } from 'react-icons/bi'
import DatePicker from "../DatePicker";

const EventForm2 = ({ step, updateStep }) => {

  const formRef = useRef()
  const [date, setDate] = useState(new Date())
  const [value, onChange] = useState('10:00');

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }

  return (
    <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ">

      <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
        <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]" >
          <label for="first" className='mt-[20px]'>Organizers</label>
          <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
          <label for="second" className="mt-[20px]">Date</label>
          <div className='w-[300px] bg-black h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center'>
            <div className='p-2'
              onClick={() => setDate(!date)}>
              <div className='flex'><DatePicker /><BiCalendar size={22} /></div>
            </div>
          </div>
          <div className="mt-[20px] border-blue-400">
            <label for="third" className="">Time</label>
            <div className='w-[100px] bg-black h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center'>
              <div className='p-2'
                onClick={() => onChange(!value)}>
                <div className=""><BiTime size={22} /></div>
              </div>
            </div>
          </div>
        </form>

        <div className='flex flex-row w-[300px] mt-[50px] border-green-700 justify-between '>
          <p className="self-start cursor-pointer"
            onClick={() => updateStep(step - 1)}>
            {'<'}Back
          </p>
          <p className="self-end cursor-pointer"
            onClick={() => { updateStep(step + 1) }}>
            Next{'>'}
          </p>
        </div>
        <p className='mt-[0px] text-center'>{step}/4</p>
  
      </div>

      {/* <div className=" border-blue-600 w-[400px] bg-[#1950DE] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
        <div>
          <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
        </div>
        <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
          <div className='w-[75px] '>
            <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default EventForm2