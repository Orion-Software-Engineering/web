import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { BiCalendar, BiTime } from 'react-icons/bi'
import DatePicker from "./DatePicker";
import TimePicker from 'react-time-picker/dist/entry.nostyle';




const events2 = () => {

    const formRef = useRef()
    const [date, setDate] = useState(new Date())
    const [value, onChange] = useState('10:00');

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: perform the push to backend here
        console.log("submitted", formRef.current);
    }



    return (
        <div className="text-black h-screen justify-between border-gray-700 flex font-nunito ">

            <div className="flex justify-self-start  self-start border-gray-600 rotate-[-54.25deg] ml-[-250px] mt-[-50px] gap-x-5">
                <div className="h-[550px] w-[76px] rounded-[36px] bg-[#FFE600] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[575px] w-[76px] rounded-[36px] bg-[#FF0000] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[600px] w-[76px] rounded-[36px] bg-[#1EA313] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[625px] w-[76px] rounded-[36px] bg-[#1950DE] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[640px] w-[76px] rounded-[36px] bg-[#FF7A00] bg-[url('../public/Orange.png')] "></div>
            </div>

            <div className="justify-self-center self-center flex  border-gray-600 h-[400px] bg-[url('../public/WhatsappB.png')]">
                <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
                    <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]" >
                        <label for="first">Organizers</label>
                        <input type="text" id="first" name="first" className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />
                        <label for="second" className="mt-[20px]">Date</label>
                        <div className='w-[300px] bg-black h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center'>
                            <div className='p-2'
                                onClick={() => setDate(!date)}>
                                <div className='flex'><DatePicker /><BiCalendar size={22} /></div>
                            </div>
                        </div>
                        <label for="third" className="mt-[20px]">Time</label>
                        <div className='w-[100px] bg-black h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center'>
                            <div className='p-2'
                                onClick={() => onChange(!value)}>
                                <div className=""><BiTime size={22} /></div>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-row w-[300px] justify-between ">
                        <p className="self-start">{'<'}Back</p>
                        <p className="self-end ">Next{'>'}</p>
                    </div>

                    <p>2/4</p>
                </div>

                <div className=" border-blue-600 w-[400px] bg-[#1950DE] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
                    <div>
                        <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
                    </div>
                    <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
                        <div className='w-[75px] '>
                            <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-self-end self-end border-gray-600 rotate-[-54.25deg] mr-[-100px] gap-x-5">
                <div className="h-[540px] w-[76px] rounded-[36px]  bg-[#FFE600] bg-[url('../public/Orange.png')]  "></div>
                <div className="h-[540px] w-[76px] rounded-[36px] bg-[#FF0000] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[540px] w-[76px] rounded-[36px] bg-[#1EA313] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[540px] w-[76px] rounded-[36px] bg-[#1950DE] bg-[url('../public/Orange.png')]"></div>
                <div className="h-[540px] w-[76px] rounded-[36px] bg-[#FF7A00] bg-[url('../public/Orange.png')] "></div>
            </div>


        </div >
    )
}

export default events2