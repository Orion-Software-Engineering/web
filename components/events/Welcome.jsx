import React, { useState, useEffect } from 'react'
import Image from "next/image";


const Welcome = ({ step, updateStep }) => {
    const [username, setUsername] = useState("")

    useEffect(() => {
        if (typeof localStorage != "undefined") {
            const uname = JSON.parse(localStorage.getItem('user-info')).username
            setUsername(uname)
        }
    }, [])



    return (
        <div className='h-[500px] w-[700px]'>
            <div className='flex justify-center items-center border-gray-600 mt-[20px]'>
                <div className='flex flex-col'>
                    <h1 className='font-Nunito text-4xl font-bold'>{'Hello, ' + username} </h1>
                    <h4 className='font-Nunito text-xl'>You can advertise your events on orion meet in 5 simple steps!</h4>
                </div>
            </div>

            <div className=' border-gray-600 flex flex-row justify-center items-center mt-[50px] '>
                <div className='flex  justify-around content-between space-x-4 items-center'>
                    <div className='flex flex-row space-x-4 rounded-full bg-[#D2D0D0] p-2'>
                        <div className='h-[90px] w-[90px] rounded-full  flex justify-center items-center bg-[#FFD2A8]'>
                            <div className='h-[50px] w-[50px] rounded-full  flex justify-center items-center bg-[#FF7A00]'>1</div>
                        </div>
                        <div className='h-[90px] w-[90px] rounded-full  flex justify-center items-center bg-[#A4BBF8]'>
                            <div className='h-[50px] w-[50px] rounded-full  flex justify-center items-center bg-[#1950DE]'>2</div>
                        </div>
                        <div className='h-[90px] w-[90px] rounded-full  flex justify-center items-center bg-[#A9F8A3]'>
                            <div className='h-[50px] w-[50px] rounded-full  flex justify-center items-center bg-[#1EA313]'>3</div>
                        </div>
                    </div>
                    <div className='h-[90px] w-[90px] rounded-full flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full  flex justify-center items-center bg-[#FF0000]'>4</div>
                    </div>
                    <div className='h-[90px] w-[90px] rounded-full flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full  flex justify-center items-center bg-[#FFE600]'>5</div>
                    </div>
                </div>
            </div>

            <div className='flex items-center  border-gray-600 mt-[20px] w-full'>
                <div className='w-32' />
                <div className='flex flex-col gap-1'>
                    <Image src='/Vector.svg' alt="1st vector" width='250' height='200' />
                    <p className='font-Nunito text-xl text-center -ml-12 mt-2'>Fill out the necessary details</p>
                </div>
                <div className='w-36' />
                <div className=''>
                    <Image src='/Vector(1).svg' alt="2nd vector" width='250px' height='200px' className='' />
                    <p className='font-Nunito text-xl ml-[50px] mt-2'>Preview your form</p>
                </div>
                <div>
                    <Image src='/Vector(2).svg' alt='3rd vector' width='250px' height='200px' />
                    <p className='font-Nunito text-xl ml-[100px] mt-2'>Complete</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome