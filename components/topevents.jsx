import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {CLOUD_NAME} from "../config/cloudinary_upload";

const TopEvents = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const formRef = useRef()
    const imageRef = useRef()

    const jsonData = {
        name: "",
        date: '',
        time: '',
        venue: '',
        organizers: '',
        mcs: '',
        guests: '',
        age_restriction: '',
        description: '',
        organizer: '',
        cover_image: '',
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: perform the push to backend here
        console.log("submitted", formRef.current);
    }

    const submitImage = async (event) => {
        event.preventDefault()
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
            setImageUrl(data.secure_url)
            console.log(imageUrl)
        })
    }

    useEffect(() => {
        console.log(image)
    }, [image]);

    useEffect(() => {
        // add to json data
        jsonData.cover_image = imageUrl
        console.log(jsonData)
    }, [imageUrl]);


    return (
        <div className="text-black  h-[640px] justify-between border-gray-700 flex font-nunito ">

            <div className='flex justify-self-start  self-start border border-gray-600 '>
                left image div
            </div>

            <div className="justify-self-center self-center flex  border-gray-600 h-[400px] ">
                <div
                    className="flex flex-col h-[400px] justify-center items-center  border-blue-600 w-[400px]  rounded-l-3xl bg-[url('../public/WhatsappB.png')]">
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mb-[30px]">
                        <label>Events Name:</label>
                        <input type="text" id="first" name="first"
                               className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg"/>
                        <label className="mt-[20px]">Event Category:</label>
                        <select id="categories" name="last"
                                className="bg-black h-[30px] w-[300px] text-white pl-[10px] rounded-lg">

                        </select>
                        <label className="mt-[20px]">Event Description:</label>
                        <textarea id="third" name="last"
                                  className="bg-black h-[80px] w-[300px] text-white pl-[10px] pb-[50px] rounded-lg"/>
                        <button>Next{'>'}</button>
                    </form>
                    <p className="self-end pr-9">Next{'>'}</p>
                    <p>1/4</p>
                </div>

                <div
                    className=" border-blue-600 w-[400px] bg-[#FF7A00] flex flex-col gap-y-2 justify-center items-center rounded-r-3xl">
                    <div>
                        <p className=" border-blue-600 text-center text-xl ">Upload Event Flyer</p>
                    </div>
                    <div className='bg-[#CDC5C5] border-blue-700 w-[250px]  h-[300px] flex justify-center items-center'>
                        <div className='w-[75px]'>
                            <Image src="/../public/camera.png" alt="camera" width='75px' height='75px'/>
                            <form ref={imageRef} onSubmit={submitImage}>
                                <input type='file' alt='human' name='image' accept='image/*'
                                       onChange={(e) => setImage(e.target.files[0])}/>
                                <input type="submit" name="post image"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-self-end self-end border border-gray-600 '>
                right image div
            </div>


        </div>


    )
}

export default TopEvents
