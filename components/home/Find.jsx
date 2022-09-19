import React from "react";
import Image from "next/image";
import phone from "../../public/phone.png";
import people2 from "../../public/people2.png";
import people1 from "../../public/people1.png";

const Find = () => {
  return (
    <div className="top-[90px] bg-[#727272] bg-cover w-screen h-screen bg-no-repeat ">
      <div className=" mt-[-96px] w-full h-screen mx-auto text-center flex items-center justify-center">
        <div className="w-[325px] h-[275px] m-4">
          <div>
            <Image src={phone} alt="phone" width="350px" height="350px" />
          </div>
          <div className="mt-[30px]">
            <p>Find some people to chat with.</p>
          </div>
        </div>

        <div className="w-[325px] h-[275px] m-4">
          <div>
            <Image src={people2} alt="people2" width="350px" height="350pxx" />
          </div>
          <div className="mt-[30px]">
            <p>Plan a meet up outside your phone screen.</p>
          </div>
        </div>

        <div className="w-[325px] h-[275px] m-4">
          <div>
            <Image src={people1} alt="people1" width="350px" height="350px" />
            <div className="mt-[30px]">
              <p>
                Find others with shared interests and form a group of friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
