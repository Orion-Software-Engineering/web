import React, { useState } from "react";
import EventHeader from "../components/events/HeaderEvents";
import EventForm1 from "../components/events/form/EventForm1";
import EventForm2 from "../components/events/form/EventForm2";
import EventForm3 from "../components/events/form/EventForm3";
import EventForm4 from "../components/events/form/EventForm4";
import Completion from "../components/events/form/Completion";
import Welcome from "../components/events/Welcome";
import Doodle from "../components/events/Doodle";



export default function Event() {
    const [expand, setExpand] = useState(false)
    const [step, setStep] = useState(1)

    const stepSwitch = (st) => {
        switch (st) {
            case 0:
                return <Welcome setStep={setStep} />

            case 1:
                return <EventForm1 setExpand={setExpand} />

            case 2:
                return <EventForm2 setExpand={setExpand} />

            case 3:
                return <EventForm3 setExpand={setExpand} />

            case 4:
                return <EventForm4 setExpand={setExpand} />

            case 5:
                return <Completion />

            default: return "Go to Homepage"
        }
    }

    return (
        <div className=" h-screen">
            <div className="h-screen bg-opacity-90 bg-[#F6F6F6]">
                <EventHeader />
                <div className="absolute -left-[11%] top-[11%]">
                    <Doodle expanded={expand} />
                </div>
                <div className="absolute right-[11%] top-[38%]">
                    <Doodle expanded={expand} />
                </div>

                {/* This is where we check the steps */}
                <div className="flex justify-center items-center mt-8">
                    {stepSwitch(step)}
                </div>

                {/* <Events1 /> */}
                {/* <EventFooter /> */}
                {/* <Events2/> */}
                {/* <Events3 /> */}
                {/* <Completion /> */}
                {/* <ImageUpload /> */}
                {/* <TimePicker/> */}
                {/* <ToggleSwitch /> */}

            </div>
        </div>
    );
}
