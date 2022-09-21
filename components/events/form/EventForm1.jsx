import React, { useState, useRef } from 'react'
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import ImageUpload from "../ImageUpload";
import CategorySelect from "../CategorySelect";

const EventForm1 = ({ setExpand, step, updateStep, name, categories, setCategories, setName, description, setDescription }) => {
    const [categorySelectOpen, setCategorySelectOpen] = useState(false);

    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // store data in state

        console.log("submitted", formRef.current);
    };

    const categoryColors = [
        'bg-orange-500', 'bg-green-500', 'bg-blue-500', 'bg-red-500',
        'bg-yellow-500', 'bg-orange-500', 'bg-green-500', 'bg-blue-500',
        'bg-red-500', 'bg-yellow-500', 'bg-orange-500', 'bg-green-500',
        'bg-blue-500', 'bg-red-500', 'bg-yellow-500'
    ]

    return (
        <div>
            <div className=" justify-self-center self-center flex border-gray-600 ">
                <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
                    <form
                        ref={formRef}
                        handleSubmit={handleSubmit}
                        className="flex flex-col mb-[30px]">
                        <label htmlFor="first">Events Name:</label>
                        <input
                            type="text"
                            id="first"
                            name="event_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg"
                        />
                        <label htmlFor="second" className="mt-[20px]">
                            Event Category:
                        </label>
                        <div className="w-[300px] bg-black min-h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center"
                            onClick={() => {
                                setCategorySelectOpen(!categorySelectOpen)
                                setExpand(true)
                            }}>
                            <div
                                className="p-2 cursor-pointer hover:text-orange-300"
                                onClick={() => {
                                    setCategorySelectOpen(!categorySelectOpen)
                                    setExpand(true)
                                }}
                            >
                                <FiChevronDown size={22} />
                            </div>
                            <div className='text-white flex flex-wrap gap-2 p-2'>
                                {categories.map((category, i) => {
                                    if (category.isChecked)
                                        return <div
                                            className={'rounded-full h-[30px] px-2 text-xs flex justify-center items-center pb-[2px] font-medium '
                                                + categoryColors[i]}>
                                            {category.name}
                                        </div>
                                })}
                            </div>
                        </div>
                        <label htmlFor="third" className="mt-[20px]">
                            Event Description:
                        </label>
                        <textarea
                            type="text"
                            id="third"
                            name="event_description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-black h-[80px] w-[300px] text-white pl-[10px] pt-[6px] rounded-lg" />
                    </form>

                    <div className='flex flex-row w-[300px] border-green-700 justify-between mt-[0px]'>
                        <p className="self-start cursor-pointer"
                            onClick={() => updateStep(step - 1)}>
                            {'<'}Back
                        </p>
                        <p className="self-end cursor-pointer"
                            onClick={() => {
                                updateStep(step + 1)
                                console.log(formRef.current.event_name.value);
                            }}>
                            Next{'>'}
                        </p>
                    </div>
                    <p className='mt-[0px] text-center'>{step}/4</p>
                </div>

                {/* <div className=" border-blue-600 w-[400px] bg-[#FF7A00] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
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
                    </div> */}
                {/* <div className='h-[200px] w-[200px] rounded-[100%] bg-slate-500'></div> */}
                {/* </div> */}
            </div>

            <div className={"flex justify-center items-center backdrop-blur-sm absolute top-0 left-0  h-screen w-screen inset-1/4 transition-all duration-500 ease-in-out " +
                (categorySelectOpen ?
                    " opacity-100 visible "
                    : " opacity-0 invisible ")}>
                <CategorySelect handleSelect={setCategorySelectOpen} setExpand={setExpand} updateCategories={setCategories} />
            </div>
        </div>
    )
}

export default EventForm1