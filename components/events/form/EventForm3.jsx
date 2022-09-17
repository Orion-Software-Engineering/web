import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { BiCalendar, BiTime } from 'react-icons/bi'





const EventForm3 = ({ step, updateStep }) => {

  const formRef = useRef()
  const [checked, setChecked] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  }


  return (
    <div className="text-black justify-between border border-gray-700 flex font-nunito ">

      <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ]">
        <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]" >
            <label for="first">Age Restrictions</label>
            <div>18 plus ?</div>
            <label for="second" className="mt-[20px]">MCs</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="third" className="mt-[20px]">Guests</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="third" className="mt-[0px] text-xs text-[#575757]">Add another guest</label>
          </form>
          <p className=" border border-blue-500  "></p>
          <div className="flex flex-row w-[300px] justify-between ">
            <p className="self-start cursor-pointer"
              onClick={() => updateStep(step - 1)}>
              {'<'}Back
            </p>
            <p className="self-end cursor-pointer"
              onClick={() => { updateStep(step + 1) }}>
              Next{'>'}
            </p>
          </div>
          <p>{step}/4</p>
        </div>

        {/* <div className=" border-blue-600 w-[400px] bg-[#1EA313] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
          <div>
            <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
          </div>
          <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
            <div className='w-[75px]'>
              <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' />
            </div>
          </div>
        </div> */}
      </div>


    </div >
  )
}

export default EventForm3