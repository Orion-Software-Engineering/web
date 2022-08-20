import React from 'react'
import TopEvents from '../components/TopEvents'
import EventHeader from '../components/EventHeader'

export default function Event() {
    return (
        <div className="bg-[url('../public/Background.png')] h-full ">
            <div className="h-full bg-opacity-80 bg-[#F3F1F1]">
                <EventHeader />
                <TopEvents />
            </div>
        </div>
    )
}
