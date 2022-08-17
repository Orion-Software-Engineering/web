import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Download = () => {
    return (
        <div className='bg-gradient-to-l from-gray-400 to-gray-600 h-[550px] flex'>
            <div className='text-white w-[550px] h-[150px] text-5xl mt-[150px] ml-[75px] pl-[2px] font-bold font-nunito'>DOWNLOAD THE APP
                <div className='mt-[40px] ml-[60px] cursor-pointer w-[102px] h-[52px]'>
                    <Link href='https://play.google.com/store/games'><Image src="/../public/playstore.png" alt="playstore" width='100px' height='50px' />
                    </Link>
                </div>
                <div className='ml-[240px] mt-[-52px] cursor-pointer w-[101px] h-[51px] '>
                    <Link href='https://www.apple.com/app-store/'><Image src="/../public/applestore2.png" alt="appstore" width='100px' height='50px' />
                    </Link>
                </div>
            </div>
            <div className=' ml-[120px] mt-[20px] w-[750px] h-[510px] flex justify-between'>
                <div><Image src="/../public/Interests.png" alt="interests" width='225px' height='500px'/></div>
                <div><Image src="/../public/Home31.png" alt="home" width='225px' height='500px'/></div>
                <div><Image src="/../public/MessagesOption3.png"  alt="messages" width='225px' height='500px'/></div>
            </div>
        </div>
    )
}

export default Download
