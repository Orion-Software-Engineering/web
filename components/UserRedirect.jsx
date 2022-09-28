import React from "react";

const UserRedirect = () => {
  function timeout() {
    setTimeout(() => {
      window.location.replace("/");
    }, 4000);
  }

  return (
    <div>
      <div className="w-full h-screen text-center bg-[#0a192f] mt-[-64px]">
        <div className="sm:flex-row flex-col inline-flex justify-center h-screen items-center mx-10 ">
          <div></div>
          <div className=" text-slate-400 max-w-[1000px] text-left mx-auto px-8 ">
            <h2 className="text-3xl sm:text-7xl font-small ">
              Signup as an organiser to create events.....
            </h2>
          </div>
        </div>
      </div>
      {timeout()}
    </div>
  );
};

export default UserRedirect;
