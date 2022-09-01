import React, { useState } from "react";
import Events1 from "../components/events/Events1";
import EventHeader from "../components/events/HeaderEvents";
import EventFooter from "../components/events/EventFooter";
import Events2 from "../components/events/Events2";
import Events3 from "../components/events/Events3";
import Completion from "../components/events/Completion";
import ImageUpload from "../components/events/ImageUpload";
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import ToggleSwitch from '../components/events/ToggleSwitch'
import Welcome from "../components/events/Welcome";
import Doodle from "../components/events/Doodle";



export default function Event() {
    const [expand, setExpand] = useState(false)

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

                <div className="flex justify-center items-center mt-8">
                    <Welcome />
                    <button onClick={() => setExpand(!expand)}>Do me</button>
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
