import React from "react";
import Image from 'next/image'

const About = () => {
  return (
    <div className="h-[650px] flex border-red-600">
      <div className="w-[600px] h-[400px] mt-[100px] ml-[100px]  border-red-600">
        <div className="font-nunito font-bold pl-[90px] text-[#0C7354] h-[75px] text-5xl border-gray-600">
          <h2>About Orion Meet</h2>
        </div>
        <div
          className="h-[200px] ml-[90px] w-[400px] font-semibold text-xl mt-[40px] 
                text-[#0C7354] font-nunito text-center border-gray-600"
        >
          <p>
            Orion Meet is an app based platform for matching people based on
            their common likes and interests. Unlike most other match making
            apps, we don’t only focus on pairing people up , we allow the option
            to join groups full of like minded people for good networking.
          </p>
        </div>
      </div>
      <div className="w-[690px] h-[550px] mt-[40px] ml-[60px] border border-red-600">
        <Image src="/../public/Mountainguys.png" alt="Mountain" width='690px' height='550px'  />
      </div>
    </div>
  );
};

export default About;
