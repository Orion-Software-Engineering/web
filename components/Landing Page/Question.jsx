import React from "react";
import groupSelfie from "../../public/selfiesquad.png";
import Image from "next/dist/client/image";

const Question = () => {
  return (
    <div>
      <div className="top-[96px]  bg-cover w-screen h-screen bg-no-repeat  mx-auto text-center justify-center ">
        <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex justify-center bg-white  px-3 py-16  items-center">
          <div className="md:w-[600px] sm:4xl md:text-5xl text-1xl p-1 ">
            <p className=" text-[#1C5677] text-center font-semibold font-Nunito ">
              SO WHAT ARE YOU WAITING FOR? COME ON BOARD AND SEE THE BEST
              FRIENDS YOU&apos;RE YET TO MEET.
            </p>
          </div>

          <div className="">
            <Image src={groupSelfie} alt="group_picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
