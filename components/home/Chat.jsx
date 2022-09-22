import React from "react";
import womanChat from "../../public/Womanchatbox.png";
import Image from "next/dist/client/image";

const Chat = () => {
  return (
    <div>
      <div className="top-[90px] bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 bg-cover w-full h-full bg-no-repeat ">
        <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="flex max-w-[800px] w-full mx-auto">
            <div>
              <Image src={womanChat} alt="womanChatting" />
            </div>
            <div className="flex gap-8 ">
              <span className="md:text-6xl sm:text-5xl text-3xl text-white font-bold md:py-6  ">
                Get ready to meet your kind of people!
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
            <p className="md:text-4xl sm:text-3xl text-xl text-white max-w-[800px] mt-3 w-full h-auto mx-auto text-center flex flex-col justify-centerr">
              Socializing isn&apos;t always easy especially when there&apos;s no
              common interest to talk about. Orion Meet helps you to find and
              chat with people of similar interests so you already have a basis
              for discussion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
