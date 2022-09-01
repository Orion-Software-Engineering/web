import React from 'react'
import Image from "next/image";

const Welcome = () => {
    return (
        <div>
            <div className='flex justify-center items-center border border-gray-600'>
                <div className='flex flex-col'>
                    <h1 className='font-Nunito text-4xl font-bold'>Hello "Name goes here"</h1>
                    <h4 className='font-Nunito text-xl'>You can advertise your events on orion meet in 5 simple steps!</h4>
                </div>
            </div>

            <div className='border border-gray-600 flex flex-row justify-center items-center'>
                <div className='flex  justify-around content-between space-x-4'>
                    <div className='h-[90px] w-[90px] rounded-full border border-gray-600 flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full border border-gray-600 flex justify-center items-center bg-[]'>1</div>
                    </div>
                    <div className='h-[90px] w-[90px] rounded-full border border-gray-600 flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full border border-gray-600 flex justify-center items-center'>2</div>
                    </div>
                    <div className='h-[90px] w-[90px] rounded-full border border-gray-600 flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full border border-gray-600 flex justify-center items-center'>3</div>
                    </div>
                    <div className='h-[90px] w-[90px] rounded-full border border-gray-600 flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full border border-gray-600 flex justify-center items-center'>4</div>
                    </div>
                    <div className='h-[90px] w-[90px] rounded-full border border-gray-600 flex justify-center items-center'>
                        <div className='h-[50px] w-[50px] rounded-full border border-gray-600 flex justify-center items-center'>5</div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around items-center border border-gray-600'>
                <div>
                    <Image src='/../public/Vector.svg' width='250px' height='200px' />
                    <p className='font-Nunito text-xl'>Fill out the necessary details</p>
                </div>
                <div>
                    <Image src='/../public/Vector(1).svg' width='250px' height='200px' />
                    <p className='font-Nunito text-xl'>Preview your form</p>
                </div>
                <div>
                    <Image src='/../public/Vector(2).svg' width='250px' height='200px' />
                    <p className='font-Nunito text-xl'>Complete</p>
                </div>
            </div>



        </div>
    )
}

export default Welcome