import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const navItems = ['Home', 'About', 'Support', 'Contact']

    return (
        <div className='bg-black text-white h-16 flex justify-center items-center'>
            <div className='flex justify-between items-center w-full mx-24'>
                <div className=' w-48 h-12 flex justify-center
                items-center'>
                    <div className='flex justify-center items-center'>
                        <Image
                            src="/../public/logo.png"
                            width='50'
                            height='50' />
                    </div>
                    <div className='pl-1 text-2xl'>
                        Meet</div>
                </div>

                <div className=' w-[500px] h-12 flex
                justify-center items-center'>

                    {navItems.map((item) => (
                        <Link href={`/${item}`}>
                            <div className='mx-8 cursor-pointer hover:text-green-400 hover:animate-pulse
                            hover:translate-x-1 duration-500 ease-in-out'>
                                {item}
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Header




