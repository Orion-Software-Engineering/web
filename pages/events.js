import React from 'react'
import Events1 from '../components/Events1'
import EventHeader from '../components/EventHeader'
import EventFooter from '../components/EventFooter'
import Events2 from '../components/Events2'
import Events3 from '../components/Events3'
import Completion from '../components/Completion'
import ImageUpload from '../components/ImageUpload'

export default function Event() {
    return (
        <div className=" h-screen ">
            <div className="h-screen bg-opacity-90 bg-[#F6F6F6]">
                <EventHeader />
                <Events1 />
                {/* <EventFooter /> */}
                {/* <Events2 /> */}
                {/* <Events3 /> */}
                {/* <Completion /> */}
                {/* <ImageUpload /> */}

            </div>
        </div>
    )
}
