import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import ImageUpload from "../ImageUpload";
import CategorySelect from "../CategorySelect";

const EventForm1 = ({ setExpand, step, updateStep, name, categories, setCategories, setName, description, setDescription }) => {
    const [categorySelectOpen, setCategorySelectOpen] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false)
    const [isDescriptionValid, setIsDescriptionValid] = useState(false)
    const [isCategoryValid, setIsCategoryValid] = useState(false)
    const [showNameRequired, setShowNameRequired] = useState(false)
    const [showDescriptionRequired, setShowDescriptionRequired] = useState(false)
    const [showCategoryRequired, setShowCategoryRequired] = useState(false)


    const formRef = useRef();

    const handleSubmit = () => {
        if (!isNameValid) {
            // show required
            setShowNameRequired(true)
            return
        }

        setShowNameRequired(false)

        if (!isCategoryValid) {
            // show required
            setShowCategoryRequired(true)
            return
        }

        setShowCategoryRequired(false)

        if (!isDescriptionValid) {
            // show required
            setShowDescriptionRequired(true)
            return
        }

        setShowDescriptionRequired(false)

        if (isNameValid && isDescriptionValid) {
            updateStep(step + 1)
            console.log(formRef.current.event_name.value);
        } else {
            // invalid inputs, tell the user something
        }
    };

    const categoryColors = [
        'bg-blue-900', 'bg-red-600', 'bg-purple-900', 'bg-gray-800',
        'bg-pink-500', 'bg-green-800', 'bg-gray-500', 'bg-orange-500',
        'bg-green-800', 'bg-yellow-500', 'bg-blue-800', 'bg-orange-400',
        'bg-yellow-200', 'bg-blue-300', 'bg-yellow-500'
    ]

    useEffect(() => {
        if (description) setIsDescriptionValid(true)
    }, [description])

    useEffect(() => {
        if (name) setIsNameValid(true)
    }, [name])

    useEffect(() => {
        categories.forEach(cat => {
            if (cat.isChecked) {
                setIsCategoryValid(true)
            }
        })

    }, [categories])

    return (
        <div>
            <div className=" justify-self-center self-center flex flex-wrap border-gray-600 ">
                <div className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px] rounded-l-3xl ">
                    <form ref={formRef} className="flex flex-col mb-[30px] justify-center items-center gap-y-2">
                        <div className='w-[300px]'>
                            <label htmlFor="first">Event Name:</label>
                            <input type="text" id="first" name="event_name" value={name} required
                                onChange={(e) => setName(e.target.value)}
                                className="bg-black h-[30px] w-full text-white pl-[10px] rounded-full" />

                            <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
                                + (showNameRequired ? "opacity-100 animate-pulse" : "opacity-0")}>
                                required
                            </p>
                        </div>


                        <div>
                            <label htmlFor="second" className="mt-[20px]">Event Category:</label>
                            <div className="w-[300px] bg-black min-h-[30px] rounded-full text-gray-300 flex flex-row-reverse items-center font-Nunito"
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
                            <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
                                + (showCategoryRequired ? "opacity-100 animate-pulse" : "opacity-0")}>
                                required
                            </p>
                        </div>

                        <div className='w-[300px]'>
                            <label htmlFor="third" className="mt-[20px]">Event Description:</label>
                            <textarea type="text" id="third" name="event_description" value={description} required
                                onChange={(e) => setDescription(e.target.value)}
                                className="bg-black h-[80px] w-[300px] text-white px-5 pt-3 rounded-xl " />

                            <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
                                + (showDescriptionRequired ? "opacity-100 animate-pulse" : "opacity-0")}>
                                required
                            </p>
                        </div>

                    </form>

                    <div className='flex flex-row-reverse w-[300px] border-green-700 justify-between mt-[0px] select-none'>
                        {/* <p className="self-start cursor-pointer"
                            onClick={() => updateStep(step - 1)}>
                            {'<'}Back
                        </p> */}
                        <div className="self-end cursor-pointer"
                            onClick={() => { handleSubmit() }
                            }>
                            Next{'>'}
                        </div>
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
