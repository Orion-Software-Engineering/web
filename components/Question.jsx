import React from "react";
import groupSelfie from "../public/selfiesquad.png";
import Image from "next/dist/client/image";

const Question = () => {
  return (
    <div className="flex bg-white mx-auto px-3 py-16 text-center items-center justify-center h-full w-full ">
      <div className="md:w-[600px] sm:4xl md:text-5xl text-1xl p-1 ">
        <p className=" text-[#1C5677] text-center font-semibold font-Nunito ">
          SO WHAT ARE YOU WAITING FOR? COME ON BOARD AND SEE THE BEST FRIENDS
          YOU&apos;RE YET TO MEET.
        </p>
      </div>

      <div className="">
        <Image src={groupSelfie} alt="group_picture" />
      </div>
    </div>
  );
};

export default Question;
