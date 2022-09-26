import React, { useState, useEffect, useRef } from "react";
import EventHeader from "../components/events/HeaderEvents";
import EventForm1 from "../components/events/form/EventForm1";
import EventForm2 from "../components/events/form/EventForm2";
import EventForm3 from "../components/events/form/EventForm3";
import EventForm4 from "../components/events/form/EventForm4";
import Completion from "../components/events/form/Completion";
import Welcome from "../components/events/Welcome";
import Doodle from "../components/events/Doodle";
import Image from "next/image";
import { uploadImageToCloudinary } from "../utils/cloudinary_upload";
import { CLOUD_NAME } from "../config/cloudinary_upload";


//dlajflkasj

export default function Event() {
    const [expand, setExpand] = useState(false)
    const [step, setStep] = useState(0)
    const [isUploading, setIsUploading] = useState(false)
    const imageRef = useRef()

    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [description, setDescription] = useState('')
    const [organizers, setOrganizers] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [price, setPrice] = useState(0)
    const [ageRestrictions, setAgeRestrictions] = useState(false)
    const [mcs, setMcs] = useState('')
    const [guests, setGuests] = useState('')

    const [filePath, setFilePath] = useState('')

    const [image, setImage] = useState(null)

    useEffect(() => {
        if (step % 2) setExpand(true)
        else setExpand(false)
    }, [step])

    const submitEventForm = async () => {
        console.log('attempting submission');
        const body = JSON.stringify({
            "name": name,
            "date": date,
            "time": time,
            "description": description,
            "price": price,
            "age_restriction": ageRestrictions,
            "organizer": "",
            "cover_image": filePath,
            "interests": categories.entries(),
            "mscs": mcs,
            "guests": guests,
            "venue": venue
        })
    }

    useEffect(() => {
        if (image) {
            const data = new FormData()
            console.log(image)
            data.append('file', image)
            data.append('upload_preset', 'orion_web')
            data.append('cloud_name', CLOUD_NAME)
            console.log(imageRef.current.image.value)
            console.log(data)

            // await uploadImageToCloudinary(data)
            const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
            // let status, image_url

            const uploadAndGetUrl = async () => {
                await fetch(url, {
                    method: "POST",
                    // mode: 'cors',
                    body: data
                }).then(response => {
                    // console.log(response)
                    // status = response.status
                    return response.json()
                }).then(data => {
                    // console.log(data)
                    setIsUploading(false)
                    setFilePath(data.secure_url)
                    console.log(data.secure_url)
                })
            }

            uploadAndGetUrl()
                .catch(err => console.log(err))
        }
    }, [image])

    const stepSwitch = (st) => {
        switch (st) {
            case 0:
                return <Welcome setStep={setStep} step={step} updateStep={setStep} />

            case 1:
                return <EventForm1 setExpand={setExpand} step={step} updateStep={setStep}
                    setName={setName} setCategories={setCategories} setDescription={setDescription}
                    name={name} description={description} categories={categories} />

            case 2:
                return <EventForm2 setExpand={setExpand} step={step} updateStep={setStep}
                    setOrganizers={setOrganizers} setDate={setDate} setTime={setTime} setPrice={setPrice}
                    organizers={organizers} date={date} time={time} price={price} />

            case 3:
                return <EventForm3 setExpand={setExpand} step={step} updateStep={setStep}
                    setAgeRestrictions={setAgeRestrictions} setMcs={setMcs} setGuests={setGuests}
                    ageRestrictions={ageRestrictions} mcs={mcs} guests={guests} />

            case 4:
                return <EventForm4 setExpand={setExpand} step={step} updateStep={setStep}
                    name={name} categories={categories} description={description} submitForm={submitEventForm}
                    organizers={organizers} date={date} time={time} price={price}
                    ageRestrictions={ageRestrictions} mcs={mcs} guests={guests} />

            case 5:
                return <Completion step={step} updateStep={setStep} />

            default: return "Go to Homepage"
        }
    }

    const imgColors = [
        'bg-[#FF7A00]', 'bg-[#1950DE]', 'bg-[#1EA313]', 'bg-[#FF0000]', 'bg-[#FFE600]'
    ]



    return (
        <div className=" h-screen ">
            <div className="h-screen bg-opacity-90  ">
                <EventHeader />
                <div className="fixed -left-[11%] top-[11%] hidden lg:flex">
                    <Doodle expanded={expand} />
                </div>
                <div className="fixed right-[11%] top-[38%] hidden lg:flex">
                    <Doodle expanded={expand} />
                </div>

                {/* This is where we check the steps */}
                <div className="flex flex-col md:flex-row justify-center items-center  border-blue-700 mt-[150px]    ">
                    <div className={step ? "bg-[url('../public/WhatsappB.png')] h-[400px] rounded-l-3xl  border-red-600 flex flex-col z-10"
                        : "flex justify-center items-center w-[700px]"}>
                        <div>
                            {stepSwitch(step)}
                        </div>
                    </div>

                    {step ? (<div className={"w-[400px] h-[400px] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl "
                        + imgColors[step - 1]}>
                        <div>
                            <p className=" text-center text-xl mt-[-20px]">Upload Event Flyer</p>
                        </div>
                        <form ref={imageRef} onSubmit={() => { }}>
                            <label htmlFor="image" >
                                <div className='bg-[#CDC5C5] border-blue-700 w-[230px] relative h-[300px] flex justify-center items-center cursor-pointer'>
                                    <div>
                                        {isUploading && (
                                            <div className="absolute top-2 animate-pulse inset-x-1/4 w-96 ">
                                                Uploading Image
                                            </div>
                                        )}
                                        {filePath && (<Image src={`${filePath}`}
                                            className='blur-[3px]'
                                            alt="selected-image"
                                            layout="fill"
                                        />)}
                                    </div>
                                    <div className='w-[70px] absolute'>
                                        <Image src="/../public/camera.png" alt="camera" width='70px' height='55px' className="" />
                                    </div>
                                    <input type='file' id="image" name='image' className="opacity-0 absolute" accept="image/*"
                                        onChange={(event) => {
                                            setImage(event.target.files[0])
                                            setIsUploading(true)
                                        }} />
                                </div>
                            </label>
                        </form>
                    </div>) : (<div />)}
                </div>
            </div>
        </div>
    );
}
