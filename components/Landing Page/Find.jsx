import React from "react";
import Image from "next/image";
import phone from "../../public/Phone.png";

const Find = () => {
  return (
    <div className="top-[90px] bg-[#727272] bg-cover w-screen h-screen bg-no-repeat ">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
        <div className="w-[325px] h-[275px]">
          <div>
            <img src={phone} alt="Image" width="350px" height="350px" />
            {/* <Image
              src={phone}
              alt="phone"
              width="350px"
              height="350px"
            /> */}
          </div>
          <div className="mt-[30px]">
            <p>Find some people to chat with.</p>
          </div>
        </div>

        {/* 
          <div className="w-[325px] h-[275px] mt-[50px] ml-[100px] border border-gray-600 bg-orange-400">
            <div>
              <Image
                src="/../public/people2.png"
                alt="people2"
                width="400px"
                height="338px"
              />
            </div>
            <div className="w-[325px] h-[75px] mt-[30px] border-gray-600">
              <p>Plan a meet up outside your phone screen.</p>
            </div>
          </div>
          
          <div className="w-[325px] h-[275px] mt-[50px] ml-[100px] border-gray-600 bg-red-500">
            <div>
              <Image
                src="/../public/people1.png"
                alt="people1"
                width="400px"
                height="325px"
              />
              <div className="w-[325px] h-[75px] mt-[40px] border-gray-600">
                <p>
                  Find others with shared interests and form a group of friends.
                </p>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Find;
