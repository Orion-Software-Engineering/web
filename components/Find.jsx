import React from 'react'
import Image from 'next/image'

const Find = () => {
    return (
        <div className='h-[500px] flex border-gray-600 font-nunito font-medium text-2xl'>
            <div className='flex'>
                <div className='w-[325px] h-[275px] mt-[50px] ml-[175px] border-gray-600 bg-red-600'>
                    <div className='ml-[20px] mr-[20px] mt-[15px]'>
                        <Image src="/../public/phone.png" width='400px' height='335px' />
                    </div>
                    <div className='w-[325px] h-[75px] mt-[50px] border-gray-600'><p>Find some people to chat with.</p></div>
                </div>
                <div
                 className='w-[325px] h-[275px] mt-[50px] ml-[100px] border border-gray-600 bg-orange-400'>
                    <div>
                        <Image src="/../public/people2.png" width='400px' height='338px' />
                    </div>
                    <div className='w-[325px] h-[75px] mt-[30px] border-gray-600'><p>Plan a meet up outside your phone screen.</p></div>
                </div>
                <div className='w-[325px] h-[275px] mt-[50px] ml-[100px] border-gray-600 bg-red-500'>
                    <div>
                        <Image src="/../public/people1.png" width='400px' height='325px' />
                        <div className='w-[325px] h-[75px] mt-[40px] border-gray-600'><p>Find others with shared interests and form a group of friends.</p></div>
                    </div>
                </div>
            </div>
            <div className=''>

                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Find


