import React from "react";
import Typed from "react-typed";
import Image from "next/dist/client/image";

const Hero = () => {
  return (
    <div>
      <div className="w-screen h-screen top-[90px]">
      <Image src="/public/TopBackground.png" alt="" width={"60px"} height={"60px"}/>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="  text-center flex  justify-center ">
            <p className="text-black uppercase font-Montserrat font-bold pt-6">
              Same Interests, More Interesting
            </p>
            <p className="text-black uppercase font-Montserrat text-4xl font-bold p-2">
              !
            </p>
          </div>

          <h1 className="md:text-7xl sm:text-6xl text-4xl text-black font-Montserrat font-bold md:py-6">
            ORION MEET
          </h1>
          <div>
            <Typed
              className="uppercase md:text-4xl sm:text-3xl text-black text-xl font-bold font-Montserrat"
              strings={["Developing the impossible"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
