import React from "react";
import Image from "next/image";
import team01 from "../../public/team01.jpg";



const Team = () => {
  return (
    <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-8">
            <div className="mb-12 space-y-4 text-center">
                <h1 className=" font-Nunito text-4xl font-semiboldn text-gray-900 md:text-5xl">OUR TEAM</h1>
                <p className=" font-Nunito text-gray-600 lg:w-8/12 lg:mx-auto">Meet with US</p>
                </div>
                <div className=" py-20 grid gap-28 md:grid-cols-3">
                    <div className="border-t-4 space-y-8 group text-center">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team01} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Max Otuteye</h5>
                            <span className="text-sm text-gray-500">Project Manager</span>


  
                            
                        </div>
                        </div>
                        <div className="border-t-4 space-y-8 group text-center">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team01} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Max Otuteye</h5>
                            <span className="text-sm text-gray-500">Project Manager</span>


  
                            
                        </div>
                        </div>
                        <div className="border-t-4 space-y-8 group text-center">
                        <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem]  rotate-45 overflow-hidden'>
                          <Image src={team01} alt="" loading="lazy" width="805" height="805" className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"/>

                        </div>
                        <div className="text-center">
                            <h5 className="text-xl text-gray-800 font-semibold">Max Otuteye</h5>
                            <span className="text-sm text-gray-500">Project Manager</span>


  
                            
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        
    
    
  );
};

export default Team;
