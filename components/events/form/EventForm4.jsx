import React, { useRef, useState } from 'react'
import Image from 'next/image'
import ToggleSwitch from '../ToggleSwitch'


const EventForm4 = ({ step, updateStep, formRef, submitForm, name, categories, description,
  organizers, date, time, price, ageRestrictions, mcs, guests, venue }) => {

  // const formRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }

  const [isUploading, setIsUploading] = useState(false)

  const categoryColors = [
    'bg-blue-900', 'bg-red-600', 'bg-purple-900', 'bg-gray-800',
    'bg-pink-500', 'bg-green-800', 'bg-gray-500', 'bg-orange-500',
    'bg-green-800', 'bg-yellow-500', 'bg-blue-800', 'bg-orange-400',
    'bg-yellow-200', 'bg-blue-300', 'bg-yellow-500'
  ]



  return (
    <div className="text-black h-[1100px] border-gray-700 flex flex-wrap 
    font-nunito mb-32  rounded-l-3xl ">
      <div className="justify-self-center self-center flex border-gray-600  ">
        <div className="flex flex-col h justify-center items-center  border-blue-600 w-[400px]">

          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col gap-y-4" >
            <div className='flex flex-col gap-1'>
              <label htmlFor="first" className=''>Event Name</label>
              <input type="text" id="first" name="event_name" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full"
                value={name} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="first">Event category</label>
              <div className='bg-black py-1 px-2 rounded-full'>
                <div className='text-white flex flex-wrap gap-2 p-2 font-Nunito'>
                  {categories.map((category, i) => {
                    if (category.isChecked)
                      return <div
                        className={'rounded-full h-[30px] px-2 text-xs flex justify-center items-center pb-[2px] font-medium '
                          + categoryColors[i]}>
                        {category.name}
                      </div>
                  })}
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="third" className="mt-[20px]">Event Description:</label>
              <textarea type="text" id="third" name="event_description"
                className="bg-black h-[80px] w-[300px] text-white px-3 py-1 rounded-3xl" value={description} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="first">Organizers</label>
              <input type="text" id="first" name="organizers"
                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full" value={organizers} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="first">Date and Time</label>
              <input type="text" id="first" name="date_time"
                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full" value={`${date} at ${time}`} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="first">Age Restrictions</label>
              <ToggleSwitch ageRestrictions={ageRestrictions} disabled={true} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="first">Price</label>
              <input type="text" id="first" name="ticket_price"
                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full" value={price} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="second" className="">MCs</label>
              <input type="text" id="first" name="mcs"
                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full" value={mcs} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="third" className="mt-[20px]">Guests</label>
              <textarea type="text" id="first" name="guests" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full" value={guests} disabled />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="first">Venue</label>
              <input type="text" id="first" name="venue"
                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full" value={venue} disabled />
            </div>
          </form>

          <div className="flex flex-row w-[300px] justify-between mt-16 ">
            <p className="self-start cursor-pointer"
              onClick={() => updateStep(step - 1)}>
              {'<'}Back
            </p>
          </div>

          <div className='float-right mt-4 mb-12 cursor-pointer bg-black text-gray-200 text-xs w-36
             rounded-md h-8 flex justify-center items-center shadow-xl hover:bg-orange-500 transition-all duration-300 hover:text-white select-none'
            onClick={async () => {
              // post form data 
              await submitForm()
            }}>
            <div className='px-2 font-Nunito'
              onClick={() => {
                setIsUploading(true)
                submitForm()
              }}>
              {isUploading ? (
                <div className=" animate-pulse flex gap-2 items-center">
                  <div class="w-6 h-6 border-b-2 border-gray-200 rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                <p>
                  SUBMIT
                </p>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default EventForm4