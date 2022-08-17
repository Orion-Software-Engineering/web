import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = ["Events", "About", "Support", "Contact"];

  return (
    <div className="h-[630px] flex border-red-600 bg-[url('../public/TopBackground.png')]">
      <div className=" text-white h-[55px] flex justify-center items-center w-full border-blue-600">
        <div className="flex justify-between items-center w-full mx-24">
          <div className=" w-48 h-12 flex justify-center items-center">
            <div className="flex justify-center items-center">
              <Image src="/../public/logo.png" alt='logo' width="50" height="50" />
            </div>
            <div className="pl-1 text-2xl">Meet</div>
          </div>
          <div className=" w-[500px] h-12 flex justify-center items-center">
            {navItems.map((item) => (
              <Link href={`/${item.toLowerCase()}`}>
                <div className="mx-8 cursor-pointer hover:text-green-400 hover:animate-pulse hover:translate-x-1 duration-500 ease-in-out">
                  {item}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg h-[550px] flex mt-[55px] ml-[-1470px]  border-blue-600 w-full">
        <div className="text-white w-[770px] h-[100px] text-5xl mt-[200px] ml-[330px] pl-[2px] border-blue-600 font-bold font-nunito">
          Same Interests, More Interesting!!
        </div>
      </div>
    </div>
  );
};

export default Header;
