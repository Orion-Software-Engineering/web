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
import { stringify } from "postcss";
import NoSSR from "react-no-ssr";
import { info } from "autoprefixer";
import EventRe from "../components/events/EventRe";



//dlajflkasj
const categoryToInterest = new Map([
    ['Art', 'art'],
    ['Business', 'business'],
    ['Cars & Vehicles', 'cars'],
    ['Comedy', 'comedy'],
    ['Education', 'education'],
    ['Entertainment', 'entertainment'],
    ['Food', 'food'],
    ['Fashion', 'fashion'],
    ['Gaming', 'gaming'],
    ['Health & Fitness', 'health'],
    ['Hair & Beauty', 'beauty'],
    ['News & Politics', 'news'],
    ['Photography', 'photography'],
    ['Science & Technology', 'science'],
    ['Sports', 'sports'],
])


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
    const [venue, setVenue] = useState('')
    const [filePath, setFilePath] = useState('')
    const [location, setLocation] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [image, setImage] = useState(null)
    const [interests, setInterests] = useState([])
    const [showImageRequired, setShowImageRequired] = useState(false)


    const [orgId, setOrgId] = useState('')

    //to expand doodle on different forms
    useEffect(() => {
        if (step % 2) setExpand(true)
        else setExpand(false)
    }, [step])

    useEffect(() => {
        const selectedInterests = []
        console.log(categories);
        categories.forEach(category => {
            if (category.isChecked)
                selectedInterests.push(categoryToInterest.get(category.name))
        })
        console.log(selectedInterests);
        setInterests(selectedInterests)
    }, [categories])

    const formBackButton = () => {
        step ? setStep(0) : setStep(1)
    }

    useEffect(() => {
        if (typeof localStorage != "undefined") {
            const orgId = JSON.parse(localStorage.getItem('user-info')).id
            setOrgId(orgId)
        }
    }, [])

    useEffect(() => {
        setLocation(String(latitude) + ' ' + String(longitude))
    }, [latitude, longitude])


    const submitEventForm = async () => {
        console.log('attempting submission');
        // TODO: do not post data if any is null or required data is empty
        if (filePath == null || filePath.length == 0) {
            alert("Select an image to continue")
            return
        }
        const body = JSON.stringify({
            "name": name,
            "date": date,
            "time": time,
            "description": description,
            "ticket_price": price ? price : 0,
            "age_restriction": ageRestrictions,
            "organizer": orgId,
            "cover_image": filePath,
            "interests": interests,
            "mcs": mcs,
            "guests": guests,
            "venue": venue,
            "location": location
        })
        console.log(body);



        const response = await fetch('https://orion-meet-testing.herokuapp.com/api/event',
            {
                method: 'POST',
                body: body,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
                if (res.status == 201) setStep(step + 1)
                return res.json()
            }).then(data => {
                console.log(data);
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        if (image) {
            const data = new FormData()
            // console.log(image)
            data.append('file', image)
            data.append('upload_preset', 'orion_web')
            data.append('cloud_name', CLOUD_NAME)
            // console.log(imageRef.current.image.value)
            // console.log(data)

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
                    ageRestrictions={ageRestrictions} mcs={mcs} guests={guests} venue={venue} setVenue={setVenue} />

            case 4:
                return <EventForm4 setExpand={setExpand} step={step} updateStep={setStep}
                    name={name} categories={categories} description={description} submitForm={submitEventForm}
                    organizers={organizers} date={date} time={time} price={price}
                    ageRestrictions={ageRestrictions} mcs={mcs} guests={guests} venue={venue} />

            case 5:
                return <Completion step={step} updateStep={setStep} />

            default: return "Go to Homepage"
        }
    }

    const imgColors = [
        'bg-[#FF7A00]', 'bg-[#1950DE]', 'bg-[#1EA313]', 'bg-[#FF0000]', 'bg-[#FFE600]'
    ]

    const data = JSON.parse(localStorage.getItem("user-info"));
    // console.log(data.roles[0]);

    const handleSubmit = () => {
        if (!isImageValid) {
            // show required
            setShowImageRequired(true)
            return
        }

        setShowImageRequired(false)
    };


    return (
        <div>

            {
                (data.roles[0] == "ROLE_ORGANIZER") ? <>

                    <div className="md:contents hidden">
                        <div className=" h-screen ">

                            <div className="h-screen bg-opacity-90  ">
                                <NoSSR>
                                    <EventHeader />
                                </NoSSR>
                                <div className="fixed -left-[11%] top-[11%] hidden lg:flex">
                                    <Doodle expanded={expand} />
                                </div>
                                <div className="fixed right-[11%] top-[38%] hidden lg:flex">
                                    <Doodle expanded={expand} />
                                </div>

                                {/* This is where we check the steps */}
                                <div className="flex flex-col md:flex-row justify-center items-center flex-wrap border-blue-700 mt-[120px]  ">
                                    <div className={step ? ("bg-[url('../public/WhatsappB.png')] rounded-l-3xl  border-red-600 flex flex-col z-10 "
                                        + (step == 4 ? "h-[1100px]" : "h-[400px]"))
                                        : "flex justify-center items-center w-[700px]"}>
                                        <div>
                                            {stepSwitch(step)}
                                        </div>
                                    </div>

                                    {step && (<div className={"w-[400px] flex flex-col gap-y-2  items-center rounded-r-3xl transition duration-500 ease-in-out "
                                        + imgColors[step - 1] + (step == 4 ? " h-[1100px] pt-12 " : " h-[400px] justify-center")}>
                                        <div>
                                            <p className=" text-center text-xl mt-[-20px] text-white font-semibold">Upload Event Flyer</p>
                                        </div>
                                        <form ref={imageRef} onSubmit={() => { }}>
                                            <label htmlFor="image" >
                                                <div className='bg-[#CDC5C5] border-blue-700 w-[230px] relative h-[300px] flex justify-center items-center cursor-pointer'>

                                                    <p className={'text-red-700 text-sm font-Nunito w-24 ml-4 '
                                                        + (showImageRequired ? "opacity-100 animate-pulse" : "opacity-0")}>
                                                        Image is required
                                                    </p>

                                                    <div>
                                                        {isUploading && (
                                                            <div className="absolute top-4 animate-pulse left-[15%] right-[25%] w-96 a flex gap-2 items-center">
                                                                <div className="w-6 h-6 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                                                                Uploading Image...
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
                                    </div>)}

                                </div>
                                {step < 2 && (<div className={`absolute bottom-16 cursor-pointer bg-gray-800 text-gray-200 text-xs w-36 rounded-md h-8 
                        flex justify-center items-center shadow-xl hover:bg-orange-300 transition-all translate duration-500
                        hover:text-gray-800 select-none  ` + (step ? ' left-72 slide-left ' : ' right-72 slide-right ')}
                                    onClick={() => formBackButton()}>
                                    <p className='px-2'>
                                        {step ? '<<< Back' : 'Go to forms >>>'}
                                    </p>
                                </div>)}
                            </div>
                        </div>

                    </div>
                    <div className="md:hidden">
                        <EventRe />
                    </div>
                </>
                    :
                    <>
                        {window.location.replace("/redirect")};
                    </>
            }


        </div>
    );
}
