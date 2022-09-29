import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { BiCalendar, BiTime } from 'react-icons/bi'
import ReactSwitch from 'react-switch'
import ToggleSwitch from '../ToggleSwitch'


const EventForm3 = ({ step, updateStep, ageRestrictions, setAgeRestrictions, mcs, setMcs, guests, setGuests, venue, setVenue, latitude, longitude }) => {

  const formRef = useRef();

  function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }


  const handleSubmit = () => {
    if (!venue) {
      setIsVenueValid(false)
      return
    }
    setIsVenueValid(true)

    updateStep(step + 1)
  };

  const [isVenueValid, setIsVenueValid] = useState(true)

  return (
    <div className="text-black justify-between  border-gray-700 flex font-nunito ">

      <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ]">
        <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">

          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]" >
            <label htmlFor="first">Age Restrictions</label>
            <ToggleSwitch ageRestrictions={ageRestrictions} setAgeRestrictions={setAgeRestrictions} readOnly={false} />

            <label htmlFor="second" className="">MCs</label>
            <input type="text" id="first" name="mcs" value={mcs}
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full"
              onChange={(e) => setMcs(e.target.value)} />

            <label htmlFor="third" className="">Guests</label>
            <textarea type="text" id="first" name="guests" value={guests}
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full"
              onChange={(e) => setGuests(e.target.value)} />
            {/* <label for="third" className="mt-[0px] text-xs text-[#575757] cursor-pointer">Add another guest</label> */}

            <div className="flex flex-col w-[300px]">
              <label htmlFor='fourth' className=''>Venue</label>
              <input type="text" id="Venue" name="venue" value={venue}
                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-full"
                onChange={(e) => setVenue(e.target.value)} />
              <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
                + (!isVenueValid ? "opacity-100 animate-pulse" : "opacity-0")}>
                required
              </p>
            </div>

            <div className=''>
              <p>Location</p>
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <label className='text-md text-gray-700'>Latitude</label>
                  <div className='w-32 h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <input type='number' value={latitude} className='outline-none w-24 text-white bg-black' onKeyPress={(event) => validate(event)} />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label className='text-md text-gray-700 '>Longitude</label>
                  <div className='w-32 h-[30px] bg-black rounded-full flex justify-center items-center'>
                    <input type='number' value={longitude} className='outline-none w-24 text-white bg-black' onKeyPress={(event) => validate(event)} />
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <label htmlFor="second" className="flex">
                Location co-ordinates
              </label>
              <div className="flex w-32 gap-1 justify-center bg-black rounded-full">
                <input type="number" id="price" name="price" pattern="[0-9]" step="10.00" min="0" value={price} onKeyPress={(event) => validate(event)} default={0}
                  className="flex bg-black text-white rounded-full px-3 w-24 pr-1 justify-center items-center h-[30px] outline-none"
                  onChange={(e) => setPrice(e.target.value)}>
                </input>
              </div>

            </div> */}


          </form>

          <div className="flex flex-row w-[300px] justify-between ">
            <p className="self-start cursor-pointer"
              onClick={() => updateStep(step - 1)}>
              {'<'}Back
            </p>
            <p className="self-end cursor-pointer"
              onClick={() => { handleSubmit() }}>
              Next{'>'}
            </p>
          </div>
          <p>{step}/4</p>
        </div>

      </div>


    </div >
  )
}

export default EventForm3