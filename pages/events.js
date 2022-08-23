import React from 'react'
import TopEvents from '../components/TopEvents'
import EventHeader from '../components/EventHeader'
import EventFooter from '../components/EventFooter'

export default function Event() {
    return (
        <div className=" h-full ">
            <div className="h-full bg-opacity-90 bg-[#F6F6F6]">
                <EventHeader />
                <TopEvents />
                <EventFooter />
            </div>
        </div>
    )
}
