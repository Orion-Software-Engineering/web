import React, { useState, useRef } from 'react'
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import ImageUpload from "../ImageUpload";
import CategorySelect from "../CategorySelect";

const EventForm1 = ({ setExpand }) => {
    const [categorySelectOpen, setCategorySelectOpen] = useState(false);

    const [File, setFile] = useState();

    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: perform the push to backend here
        console.log("submitted", formRef.current);
    };
    return (
        <div>
            <div className="justify-self-center self-center flex  border-gray-600 h-[400px] bg-[url('../public/WhatsappB.png')]">
                <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
                    <form
                        ref={formRef}
                        handleSubmit={handleSubmit}
                        className="flex flex-col mb-[30px]">
                        <label for="first">Events Name:</label>
                        <input
                            type="text"
                            id="first"
                            name="first"
                            className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg"
                        />
                        <label for="second" className="mt-[20px]">
                            Event Category:
                        </label>
                        <div className="w-[300px] bg-black h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center">
                            <div
                                className="p-2 cursor-pointer hover:text-orange-300"
                                onClick={() => {
                                    setCategorySelectOpen(!categorySelectOpen)
                                    setExpand(true)
                                }}
                            >
                                <FiChevronDown size={22} />
                            </div>
                        </div>
                        <label for="third" className="mt-[20px]">
                            Event Description:
                        </label>
                        <textarea
                            type="text"
                            id="third"
                            name="last"
                            className="bg-black h-[80px] w-[300px] text-white pl-[10px] pt-[6px] rounded-lg"
                        />
                    </form>
                    <p className="self-end pr-9">Next{">"}</p>
                    <p>1/4</p>
                </div>

                <div className=" border-blue-600 w-[400px] bg-[#FF7A00] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
                    <div className="p-2 " onClick={() => setFile(!File)}>
                        <div>
                            <p className=" border-blue-600 text-center text-xl ">
                                Upload Event Flyer
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center">
                        <div className="p-2 " onClick={() => setFile(!File)}>
                            <div className="w-[75px]">
                                <Image src="/../public/camera.png" alt="camera" width="75px" height="75px" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-[200px] w-[200px] rounded-[100%] bg-slate-500'></div> */}
                </div>
            </div>

            <div className={"flex justify-center items-center backdrop-blur-sm absolute top-0 left-0  h-screen w-screen inset-1/4 transition-all duration-500 ease-in-out " +
                (categorySelectOpen ?
                    " opacity-100 visible "
                    : " opacity-0 invisible ")}>
                <CategorySelect handleSelect={setCategorySelectOpen} setExpand={setExpand} />
            </div>
        </div>
    )
}

export default EventForm1