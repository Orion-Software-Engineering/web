import React from 'react'
import Image from 'next/image'

const Profiles = () => {
    return (
        <div className='h-[500px] flex  border-gray-600 font-nunito'>
            <div className='w-[325px] h-[400px] mt-[50px] ml-[125px]  border-gray-600'>
                <div className=' border-gray-600 mr-[80px] ml-[80px] h-[200px]'>
                    <Image src="/../public/profile1.png" alt="profile1" width='200px' height='250px' /></div>
                <div className=' border-gray-600 mt-[15px] text-center'>
                    <p>Dixie Normus</p></div>
                <div className=' border-gray-600 mt-[30px]'>
                    <p>This app is great. I helped me to find some friends interested in the same music as me and once we met in person, we found out that we had more in common than we thought.</p></div>
            </div>
            <div className='w-[325px] h-[400px] mt-[50px] ml-[150px] border-gray-600'>
                <div className=' border-gray-600 mr-[80px] ml-[80px] h-[200px]'>
                    <Image src="/../public/profile2.png" alt="profile2" width='200px' height='250px' /></div>
                <div className=' border-gray-600 mt-[15px] text-center'>
                    <p>P.Dough</p></div>
                <div className=' border-gray-600 mt-[30px]'>
                    <p>It was tough finding people around my age with the similar taste in movies and TV shows. Through Orion Meet, I found a movie buddy and we hang out all the time.</p></div>
            </div>
            <div className='w-[325px] h-[400px] mt-[50px] ml-[150px] border-gray-600'>
                <div className=' border-gray-600 mr-[80px] ml-[80px] h-[200px]'>
                    <Image src="/../public/profile3.png" alt="profile3" width='200px' height='250px' /></div>
                <div className=' border-gray-600 mt-[15px] text-center'>
                    <p>Ben Dover</p></div>
                <div className=' border-gray-600 mt-[30px]'>
                    <p>I’m not the best with social interactions but I got off to a good start on this app. After chatting with my new friend on the app, I felt my social abilities improve.</p></div>
            </div>
        </div>
    )
}

export default Profiles