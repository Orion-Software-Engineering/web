import React, { useRef, useState } from "react";
import Image from "next/image";
import { BiCalendar, BiTime } from "react-icons/bi";
import DatePicker from "../DatePicker";

const EventForm2 = ({ step, updateStep, organizers, setOrganizers, date, setDate, time, setTime, price, setPrice }) => {
  const formRef = useRef();

  const handleSubmit = () => {
    if (!organizers) {
      setIsOrganizerValid(false)
      return
    }

    setIsOrganizerValid(true)

    if (!date) {
      setIsDateValid(false)
      return
    }

    setIsDateValid(true)

    if (!time) {
      setIsTimeValid(false)
      return
    }

    setIsTimeValid(true)

    updateStep(step + 1)
  };

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

  const [isOrganizerValid, setIsOrganizerValid] = useState(true)
  const [isDateValid, setIsDateValid] = useState(true)
  const [isTimeValid, setIsTimeValid] = useState(true)


  return (
    <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ">
      <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
        <form ref={formRef} className="flex flex-col mb-[30px]">
          <div className="flex flex-col w-[300px]">
            <label htmlFor="first" className="mt-[20px]">
              Organizers
            </label>
            <input type="text" id="first" name="organizers" value={organizers}
              className="bg-black h-[30px] w-[300px] text-white pl-[10px] pb-1 rounded-full"
              onChange={(e) => setOrganizers(e.target.value)} />
            <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
              + (!isOrganizerValid ? "opacity-100 animate-pulse" : "opacity-0")}>
              required
            </p>
          </div>

          <div className="flex flex-col w-[300px]">
            <label htmlFor="second" className="">
              Date
            </label>
            <input type="date" id="datep" name="date_select" value={date}
              className="bg-black text-white rounded-full px-3 w-[300px] justify-center items-center h-[30px] "
              onChange={(e) => {
                setDate(e.target.value)
              }} />
            <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
              + (!isDateValid ? "opacity-100 animate-pulse" : "opacity-0")}>
              required
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <label htmlFor="second" className=" flex">
                Time <p className="text-xs flex justify-center items-center text-[#565252] pt-1">(hour-minute-am/pm)</p>
              </label>
              <div className="flex justify-center w-32 items-center">
                <input type="time" id="time" name="time_select" value={time}
                  className="bg-black text-white rounded-full px-3 w-32 justify-center items-center h-[30px]"
                  onChange={(e) => {
                    setTime(e.target.value)
                  }}>
                </input>
              </div>

              <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
                + (!isTimeValid ? "opacity-100 animate-pulse" : "opacity-0")}>
                required
              </p>
            </div>

            <div>
              <label htmlFor="second" className="flex">
                Price
                <p className="text-xs flex justify-center items-center text-[#565252] pt-1">(If free leave blank)</p>
              </label>
              <div className="flex w-32 gap-1 justify-center bg-black rounded-full">
                <input type="number" id="price" name="price" pattern="[0-9]" step="10.00" min="0" value={price} onKeyPress={(event) => validate(event)}
                  className="flex bg-black text-white rounded-full px-3 w-24 pr-1 justify-center items-center h-[30px] outline-none"
                  onChange={(e) => setPrice(e.target.value)}>
                </input>
              </div>

            </div>

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
              handleSubmit()
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
