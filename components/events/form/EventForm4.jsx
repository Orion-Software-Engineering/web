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

  const categoryColors = [
    'bg-blue-900', 'bg-red-600', 'bg-purple-900', 'bg-gray-800',
    'bg-pink-500', 'bg-green-800', 'bg-gray-500', 'bg-orange-500',
    'bg-green-800', 'bg-yellow-500', 'bg-blue-800', 'bg-orange-400',
    'bg-yellow-200', 'bg-blue-300', 'bg-yellow-500'
  ]

  return (
    <div className="text-black h-screen  border-gray-700 flex font-nunito ">

      <div className="justify-self-center self-center flex border-gray-600  h-screen bg-[url('../public/WhatsappB.png')]">
        <div className="flex flex-col h justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[150px]" >

            <label htmlFor="first" className='mt-[-20px]'>Event Name</label>
            <input type="text" id="first" name="event_name" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg"
              value={name} disabled />

            <label htmlFor="first">Event category</label>
            <div className='bg-black py-1 px-2 rounded-lg'>
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

            <label htmlFor="third" className="mt-[20px]">Event Description:</label>
            <textarea type="text" id="third" name="event_description"
              className="bg-black h-[80px] w-[300px] text-white pl-[10px] pb-[50px] rounded-lg" value={description} disabled />

            <label htmlFor="first">Organizers</label>
            <input type="text" id="first" name="organizers"
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" value={organizers} disabled />

            <label htmlFor="first">Date and Time</label>
            <input type="text" id="first" name="date_time"
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" value={`${date} at ${time}`} disabled />

            <label htmlFor="first">Age Restrictions</label>
            <ToggleSwitch ageRestrictions={ageRestrictions} disabled={true} />

            <label htmlFor="first">Price</label>
            <input type="text" id="first" name="ticket_price"
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" value={price} disabled />

            <label htmlFor="second" className="mt-[0px]">MCs</label>
            <input type="text" id="first" name="mcs"
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" value={mcs} disabled />

            <label htmlFor="third" className="mt-[20px]">Guests</label>
            <textarea type="text" id="first" name="guests" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" value={guests} disabled />
            {/* <label for="third" className="mt-[0px] text-xs text-[#575757] cursor-pointer">Add another guest</label> */}

            <label htmlFor="first">Venue</label>
            <input type="text" id="first" name="venue"
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" value={venue} disabled />
          </form>

          <div className="flex flex-row w-[300px] mt-[-110px] justify-between ">
            <p className="self-start cursor-pointer"
              onClick={() => updateStep(step - 1)}>
              {'<'}Back
            </p>
          </div>
          <div className='float-right mt-4 cursor-pointer bg-black text-gray-200 text-xs w-36
             rounded-md h-8 flex justify-center items-center shadow-xl hover:bg-orange-500 transition-all duration-300 hover:text-white select-none'
            onClick={async () => {
              // post form data 
              await submitForm()
            }}>
            <div className='px-2 font-Nunito'
              onClick={() => {
                submitForm()
              }}>
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventForm4