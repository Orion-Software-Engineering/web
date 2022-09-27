import React from "react";
import { GrMailOption } from "react-icons/gr";

const Continue = () => {
  function timeout() {
    setTimeout(() => {
      window.location.replace("/login");
    }, 4000);
  }

  return (
    <div className="w-full h-screen text-center bg-[#0a192f] mt-[-64px]">
      <div className="sm:flex-row flex-col inline-flex justify-center h-screen items-center mx-10 ">
        <div>
          <GrMailOption size="10rem" color="cornflowerblue " />
        </div>
        <div className=" text-slate-400 max-w-[1000px] text-left mx-auto px-8 ">
          <h2 className="text-3xl sm:text-7xl font-small ">
            Please verify your E-mail to continue......
          </h2>
        </div>
      </div>
      {timeout()}
    </div>
  );
};

export default Continue;
