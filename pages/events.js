import React from "react";
import Events1 from "../components/events/Events1";
import EventHeader from "../components/events/HeaderEvents";
import EventFooter from "../components/events/EventFooter";
import Events2 from "../components/events/Events2";
import Events3 from "../components/events/Events3";
import Completion from "../components/events/Completion";
import ImageUpload from "../components/events/ImageUpload";


export default function Event() {
  return (
    <div className=" h-screen ">
      <div className="h-screen bg-opacity-90 bg-[#F6F6F6]">
        <EventHeader />
        {/* <Events1 /> */}
        {/* <EventFooter /> */}
        <Events2 />
        {/* <Events3 /> */}
        {/* <Completion /> */}
        {/* <ImageUpload /> */}
    

      </div>
    </div>
  );
}
