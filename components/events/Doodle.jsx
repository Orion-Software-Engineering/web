import React from 'react'

const Doodle = ({ expanded }) => {

    return (
        <div className={`flex absolute z-50 transition-{gap,margin} duration-700 rotate-[-54.25deg] ` + (expanded ? " gap-4" : " gap-0 ")}>
            <div className={"h-[500px] w-16 bg-[#FFE600] rounded-[36px] bg-[url('/doodle.png')] overflow-hidden transition-{margin} duration-700 " + (expanded ? "mt-0 " : "")}>
                <div className=" rounded-[36px] bg-[url('/doodle.png')] bg-cover bg-center w-full h-full opacity-40 scale-150" />
            </div>
            <div className={"h-[500px] w-16 bg-[#FF0000] rounded-[36px] bg-[url('/doodle.png')] transition-{margin} duration-700 " +
                (expanded ? "mt-0 " : "mt-4")}>
                <div className=" rounded-[36px] bg-[url('/doodle.png')] bg-cover bg-[left_8rem] w-full h-full opacity-40" />
            </div>
            <div className={"h-[500px] w-16 bg-[#1EA313] rounded-[36px] bg-[url('/doodle.png')] transition-{margin} duration-700 " +
                (expanded ? "mt-0 " : "mt-8")}>
                <div className=" rounded-[36px] bg-[url('/doodle.png')] bg-cover bg-[center_bottom_6rem] w-full h-full opacity-40" />
            </div>
            <div className={"h-[500px] w-16 bg-[#1950DE] rounded-[36px] bg-[url('/doodle.png')] overflow-hidden transition-{margin} duration-700 " +
                (expanded ? "mt-0 " : "mt-12")}>
                <div className=" rounded-[36px] bg-[url('/doodle.png')] bg-cover bg-[center_right_8rem] w-full h-full opacity-40 scale-150" />
            </div>
            <div className={"h-[500px] w-16 bg-[#FF7A00] rounded-[36px] bg-[url('/doodle.png')] transition-{margin} duration-700 " +
                (expanded ? "mt-0 " : "mt-16")}>
                <div className=" rounded-[36px] bg-[url('/doodle.png')] bg-cover bg-[center_top_6rem] w-full h-full opacity-40" />
            </div>
        </div>
    )
}

export default Doodle