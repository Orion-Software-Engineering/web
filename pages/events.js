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
    const [step, setStep] = useState(6)

    const stepSwitch = (st) => {
        switch (st) {
            case 0:
                return <Welcome setStep={setStep} />

            case 1:
                return <EventForm1 />

            case 2:
                return <EventForm2 />

            case 3:
                return <EventForm3 />

            case 4:
                return <EventForm4 />

            case 5:
                return <Completion />

            default: return "Go to Homepage"
        }
    }

    return (
        <div className=" h-screen">
            <div className="h-screen bg-opacity-90 bg-[#F6F6F6]">
                <EventHeader />
                <div className="absolute -left-48 top-20">
                    <Doodle expanded={expand} />
                </div>
                <div className="absolute -right-48 -bottom-16">
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
