import React from "react";
import Typed from "react-typed";

//Screen with typograph effect
const Hero = () => {
  return (
    <div>
      <div className="top-[90px] bg-[url('../public/TopBackground.png')] bg-cover bg-no-repeat ">
        <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="  text-center flex  justify-center ">
            <Typed
              className="uppercase md:text-4xl sm:text-3xl text-white text-xl font-bold font-Montserrat"
              strings={["Same Interests, More Interesting!"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
