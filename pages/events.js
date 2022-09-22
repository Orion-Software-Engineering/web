import React, { useState, useEffect, useRef } from "react";
import EventHeader from "../components/events/HeaderEvents";
import EventForm1 from "../components/events/form/EventForm1";
import EventForm2 from "../components/events/form/EventForm2";
import EventForm3 from "../components/events/form/EventForm3";
import EventForm4 from "../components/events/form/EventForm4";
import Completion from "../components/events/form/Completion";
import Welcome from "../components/events/Welcome";
import Doodle from "../components/events/Doodle";
import Image from "next/image";
// import TimePicker from 'react-time-picker';




export default function Event(uploadlength) {
    const [expand, setExpand] = useState(false)
    const [step, setStep] = useState(0)

    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [description, setDescription] = useState('')
    const [organizers, setOrganizers] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [price, setPrice] = useState(0)
    const [ageRestrictions, setAgeRestrictions] = useState(false)
    const [mcs, setMcs] = useState('')
    const [guests, setGuests] = useState('')

    useEffect(() => {
        if (step % 2) setExpand(false)
        else setExpand(true)
    }, [step])

    const submitEventForm = (event) => {
        event.preventDefault();
    }


    const stepSwitch = (st) => {
        switch (st) {
            case 0:
                return <Welcome setStep={setStep} step={step} updateStep={setStep} />

            case 1:
                return <EventForm1 setExpand={setExpand} step={step} updateStep={setStep}
                    setName={setName} setCategories={setCategories} setDescription={setDescription}
                    name={name} description={description}   categories={categories} />

            case 2:
                return <EventForm2 setExpand={setExpand} step={step} updateStep={setStep}
                    setOrganizers={setOrganizers} setDate={setDate} setTime={setTime} setPrice={setPrice}
                    organizers={organizers} date={date}   time={time} price={price} />

            case 3:
                return <EventForm3 setExpand={setExpand} step={step} updateStep={setStep}
                    setAgeRestrictions={setAgeRestrictions} setMcs={setMcs} setGuests={setGuests}
                    ageRestrictions={ageRestrictions}   mcs={mcs} guests={guests} />

            case 4:
                return <EventForm4 setExpand={setExpand} step={step} updateStep={setStep}
                    name={name} categories={categories} description={description}
                    organizers={organizers} date={date} time={time} price={price}
                    ageRestrictions={ageRestrictions}   mcs={mcs} guests={guests} />

            case 5:
                return <Completion step={step} updateStep={setStep} />

            default: return "Go to Homepage"
        }
    }

    const imgColors = [
        'bg-[#FF7A00]', 'bg-[#1950DE]', 'bg-[#1EA313]', 'bg-[#FF0000]', 'bg-[#FFE600]'
    ]



    return (
        <div className=" h-screen overflow-y -none overscroll-none">
            <div className="h-screen bg-opacity-90 bg-[#F6F6F6] overflow-none overscroll-none">
                <EventHeader />
                <div className="absolute -left-[11%] top-[11%]">
                    <Doodle expanded={expand} />
                </div>
                <div className="absolute right-[11%] top-[38%]">
                    <Doodle expanded={expand} />
                </div>

                {/* This is where we check the steps */}
                <div className="flex justify-center items-center mt-8     ">
                    <div className={step ? "bg-[url('../public/WhatsappB.png')] h-[400px] rounded-l-3xl  border-red-600 flex flex-col"
                        : "flex justify-center items-center w-[700px]"}>
                        <div>
                            {stepSwitch(step)}
                        </div>
                    </div>

                    {step ? (<div className={"w-[400px] h-[400px] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl "
                        + imgColors[step - 1]}>
                        <div>
                            <p className=" text-center text-xl ">Upload Event Flyer</p>
                        </div>
                        <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
                            {/* <form> */}
                                {/* <input type="file"> */}
                            <div className='w-[75px]'>
                                <Image src="/../public/camera.png" alt="camera" width='75px' height='75px' className="cursor-pointer">
                                </Image>
                            </div>
                            {/* </input> */}
                            {/* </form> */}

                        </div>
                    </div>) : (<div />)}
                </div>

                {/* <TimePicker/> */}


            </div>
        </div>
    );
}
