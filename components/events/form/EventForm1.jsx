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
        'bg-blue-900', 'bg-red-600', 'bg-purple-900', 'bg-gray-800',
        'bg-pink-500', 'bg-green-800', 'bg-gray-500', 'bg-orange-500',
        'bg-green-800', 'bg-yellow-500', 'bg-blue-800', 'bg-orange-400',
        'bg-yellow-200', 'bg-blue-300', 'bg-yellow-500'
    ]

    return (
        <div>
            <div className=" justify-self-center self-center flex flex-wrap border-gray-600 ">
                <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
                    <form ref={formRef} handleSubmit={handleSubmit} className="flex flex-col mb-[30px]">
                        <label htmlFor="first">Event Name:</label>
                        <input type="text" id="first" name="event_name" value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg" />

                        <label htmlFor="second" className="mt-[20px]">Event Category:</label>
                        <div className="w-[300px] bg-black min-h-[30px] rounded-lg text-gray-300 flex flex-row-reverse items-center font-Nunito"
                            onClick={() => {
                                setCategorySelectOpen(!categorySelectOpen)
                                setExpand(true)
                            }}>
                            <div
                                className="p-2 cursor-pointer hover:text-orange-300 font-Nunito"
                                onClick={() => {
                                    setCategorySelectOpen(!categorySelectOpen)
                                    setExpand(true)
                                }}>
                                <FiChevronDown size={22} />
                            </div>
                            <div className='text-white flex flex-wrap gap-2 p-2 font-Nunito'>
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

                        <label htmlFor="third" className="mt-[20px]">Event Description:</label>
                        <textarea type="text" id="third" name="event_description" value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-black h-[80px] w-[300px] text-white pl-[10px] pt-[6px] rounded-lg " />
                    </form>

                    <div className='flex flex-row-reverse w-[300px] border-green-700 justify-between mt-[0px]'>
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