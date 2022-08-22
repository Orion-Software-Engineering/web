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
    <div className="text-black  h-[640px] justify-between border-gray-700 flex font-nunito ">

      <div className='flex justify-self-start  self-start  border-gray-600 '>
      <Image src="/../public/Ldesign.png" alt='design1' width='300px' height='500px' />
      </div>

      <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ">
        <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px]  rounded-l-3xl bg-[url('../public/WhatsappB.png')]">
          <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]" >
            <label for="first">Events Name:</label>
            <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
            <label for="second" className="mt-[20px]">Event Category:</label>
              <select id="categories" name="last" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg">
                <option value="Art" className='w-[300px]'>Art</option>
                <option value="Business">Business</option>
                <option value="Comedy">Comedy</option>
              </select>              
            <label for="third" className="mt-[20px]">Event Description:</label>
            <textarea type="text" id="third" name="last" className="bg-black h-[80px] w-[300px] text-white pl-[10px] pb-[50px] rounded-lg" />
            <button>Next{'>'}</button>
          </form>
          <p className="self-end pr-9">Next{'>'}</p>
          <p>1/4</p>
        </div>

        <div className=" border-blue-600 w-[400px] bg-[#FF7A00] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
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

      <div className='flex justify-self-end self-end  border-gray-600 '>
      <Image src="/../public/Rdesign.png" alt='design1' width='350px' height='360px' />
      </div>


    </div >
    

  )
}

export default TopEvents