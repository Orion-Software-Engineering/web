import React, { useRef, useState } from "react";
import Image from "next/image";
import { BiCalendar, BiTime } from "react-icons/bi";
import DatePicker from "../DatePicker";

const EventForm2 = ({ step, updateStep, organizers, setOrganizers, date, setDate, time, setTime, price, setPrice }) => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = this.state.value;
    // TODO: perform the push to backend here
    console.log("submitted", formRef.current);
  };

  // getValue = (events) => {
  //   console.log('Event:', events.taget.value);
  //   this.setState({value : events.target.value})
  // }

  return (
    <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ">
      <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
        <form ref={formRef} handleSubmit={handleSubmit} action="" className="flex flex-col mb-[30px]">
          <label htmlFor="first" className="mt-[20px]">
            Organizers
          </label>
          <input type="text" id="first" name="organizers" value={organizers}
            className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg"
            onChange={(e) => setOrganizers(e.target.value)} />

          <label htmlFor="second" className="mt-[20px]">
            Date
          </label>
          <input type="date" id="datep" name="date_select" value={date}
            className="bg-black text-white rounded-lg pl-3 w-[140px] justify-center items-center h-[25px]"
            onChange={(e) => {
              setDate(e.target.value)
            }} />

          <div className="">
            <label htmlFor="second" className="mt-[20px] flex">
              Time <p className="text-xs flex justify-center items-center text-[#565252] pt-1">(hour-minute-am/pm)</p>
            </label>
            <input type="time" id="datep" name="time_select" value={time}
              className="bg-black text-white rounded-lg pl-3 w-[120px] justify-center items-center h-[25px]"
              onChange={(e) => {
                setTime(e.target.value)
              }}>
            </input>

            <label htmlFor="second" className="mt-[20px]  flex">
              Price
              <p className="text-xs flex justify-center items-center text-[#565252] pt-1">(If free leave blank)</p>
            </label>
            <input type="number" id="datep" name="price" pattern="[0-9]" step="10.00" min="0"
              className="flex bg-black text-white rounded-lg pl-3 w-[80px] pr-1 justify-center items-center h-[25px]"
              onChange={(e) => setPrice(e.target.value)}>
            </input>
            
          </div>
        </form>

        <div className='flex flex-row w-[300px] mt-[0px] border-green-700 justify-between '>
          <p className="self-start cursor-pointer"
            onClick={() => updateStep(step - 1)}>
            {'<'}Back
          </p>
          <p
            className="self-end cursor-pointer"
            onClick={() => {
              updateStep(step + 1);
            }}
          >
            Next{">"}
          </p>
        </div>
        <p className="mt-[0px] text-center">{step}/4</p>
      </div>
    </div >
  );
};

export default EventForm2;
{
  /* <div className=" border-blue-600 w-[400px] bg-[#1950DE] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
  <div>
    <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
  </div>
  <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
    <div className='w-[75px] '>
      <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' />
    </div>
  </div>
</div> */
}
