import React from "react";

const UserRedirect = () => {
  return (
    <div>
      <div className="w-full h-screen text-center bg-[#0a192f] mt-[-64px]">
        <div className="sm:flex-row flex-col inline-flex justify-center h-screen items-center mx-10 ">
          <div></div>
          <div className=" text-slate-400 max-w-[1000px] text-left mx-auto px-8 ">
            <h2 className="text-2xl sm:text-7xl font-small ">Coming soon...</h2>
            <h1 className="text-xl sm:text-5xl font-small ">
              Log in on mobile to see organiser profile
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRedirect;
