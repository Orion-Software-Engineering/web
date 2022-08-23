import React from "react";
import Typed from "react-typed";
import Image from "next/dist/client/image";

const Hero = () => {
  return (
    <div>
      <div className="top-[90px] bg-[url('../public/TopBackground.png')] ">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="  text-center flex  justify-center ">
            <Typed
              className="uppercase md:text-4xl sm:text-3xl text-white text-xl font-bold font-Montserrat"
              strings={["Same Interests, More Interesting"]}
              typeSpeed={150}
              backSpeed={150}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
