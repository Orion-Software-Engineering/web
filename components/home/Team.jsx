import React from "react";
import Image from "next/image";
import team01 from "../../public/team01.jpg";
import team02 from "../../public/team02.jpg";
import team03 from "../../public/team03.jpg";
import team04 from "../../public/team04.jpg";
import team05 from "../../public/team05.jpg";
import team06 from "../../public/team06.jpg";
import team07 from "../../public/team07.jpg";
import team08 from "../../public/team08.jpg";
import team09 from "../../public/team09.jpg";
import team10 from "../../public/team10.jpg";

const Team = () => {
  return (
    <div className="py-20 bg-slate-300">
        <div className="container mx-auto px-6 md:px-12 lg:px-8">
            <div className="mb-12 space-y-4 text-center font-Nunito">
                <h1 className=" font-Nunito text-4xl   md:text-5xl">Orion Team</h1>
                <p className=" font-Nunito text-gray-600 lg:w-8/12 lg:mx-auto">Meet with US</p>
                </div>
                <div className=" py-20 grid gap-28 md:grid-cols-3">
                    <div className="border-t-4 space-y-8 group text-cente font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team01} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Max Otuteye</h5>
                            <span className="text-sm text-gray-500">Project Manager</span>

                         </div>
                         <a href="https://github.com/maxotuteye" className="text-center w-max mx-auto block text-blue-500">View bio</a>
                        </div>
                        <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team02} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Sven Dzebele</h5>
                            <span className="text-sm text-gray-500">Backend</span>
                        </div>
                        <a href="https://github.com/dzeble" className="text-center w-max mx-auto block text-blue-500">View bio</a>
                        </div>
                        <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team09} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Sammuel </h5>
                            <span className="text-sm text-gray-500">Backend</span>
                     
                     </div>
                     <a href="https://github.com/McSam-py" className="text-center w-max mx-auto block text-blue-500">View bio</a>
                        </div>
                    </div>
                    <div className=" py-20 grid gap-28 md:grid-cols-3">
                    <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team04} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Nana Kwasi</h5>
                            <span className="text-sm text-gray-500">UI/UX Head</span>
                     </div>
                    <a href="https://github.com/Z3ROD4RK" className="text-center w-max mx-auto block text-blue-500">View bio</a>
                    </div>

                    <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team05} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Kwasi Manu</h5>
                            <span className="text-sm text-gray-500">Flutter</span>
              </div>

              <a href="https://github.com/kwasimbnyarko" className="text-center w-max mx-auto block text-blue-500">View bio</a>
               </div>
               <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team06} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Frank Appiah</h5>
                            <span className="text-sm text-gray-500">Flutter</span>
              </div>

              <a href="https://github.com/frank-app" className="text-center w-max mx-auto block text-blue-500">View bio</a>
               </div>
                </div>

                <div className=" py-20 grid gap-28 md:grid-cols-3">
                    <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team07} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Dillys Annan</h5>
                            <span className="text-sm text-gray-500">Flutter</span>
               </div>
               <a href="https://github.com/Dillys3567" className="text-center w-max mx-auto block text-blue-500">View bio</a>
               </div>

               <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team03} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Kevin Osei</h5>
                            <span className="text-sm text-gray-500">Frontend/web</span>
               </div>
               <a href="https://github.com/knosei" className="text-center w-max mx-auto block text-blue-500">View bio</a>
               </div>
               <div className="border-t-4 space-y-8 group text-center font-Nunito">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team08} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Hansen  Koduah </h5>
                            <span className="text-sm text-gray-500">Frontend/web</span>
               </div>
               <a href="https://github.com/hanskod" className="text-center w-max mx-auto block text-blue-500">View bio</a>
               </div>

               <div className="border-t-4 space-y-8 group text-center font-Nunito  ">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team10} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Kelvin Lamptey </h5>
                            <span className="text-sm text-gray-500">Frontend/web</span>
               </div>
               <a href="https://github.com/account" className="text-center w-max mx-auto block text-blue-500">View bio</a>
               </div>
        </div>
        </div>
        </div>
    
    
  );
};

export default Team;
