import React, { useState } from "react";
import Logo from "../../public/orionLogo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  max-2-[1024] mx-auto px-4 text-white bg-[#000000] w-screen ">
      <div className="flex">
        <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
        <h1 className="pt-1 pl-1 w-full text-4xl font-bold text-white font-Nunito">
          Meet
        </h1>
      </div>

      <ul className="hidden md:flex font-Nunito font-bold pt-4 text-white">
        <li className="pt-3">
          <a className="p-4" href={"/"}>
            Home
          </a>
        </li>
        <li className="pt-3">
          <a className="p-4" href={"/about"}>
            About
          </a>
        </li>
        <li className="pt-3">
          <a className="p-4" href={"/support"}>
            Support
          </a>
        </li>
        <li className="pt-3">
          <a className="p-4" href={"/events"}>
            Events
          </a>
        </li>
        <li>
          <a href="/login">
            <button className=" absolte uppercase bg-transparent border-[1px] border- rounded px-10 mx-auto py-3 mb-4 hover:scale-110 hover:bg-black hover:text-white duration-300 ">
              Log in
            </button>
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose seize={20} className="bg-black" />
        ) : (
          <AiOutlineMenu size={20} className="bg-black" />
        )}
      </div>

      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#00030075] ease-in-out duration-500 "
        }
      >
        <div className="flex m-4 ">
          <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
          <h1 className="pl-1 w-full text-4xl font-bold text-white">MEET</h1>
        </div>

        <ul className="uppercase p-4 font-Merriweather">
          <a href={"/"}>Home</a>
          <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
          <a href={"/about"}>About</a>
          <li className=" mt-4 mb-4 border-b border-b-gray-600"></li>
          <a href={"/support"}>Support</a>
          <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
          <a href={"/events"}>Events</a>
          <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
          <div className=" my-6 ">
            <a href="/login">
              <button className="absolte uppercase bg-transparent border-[1px] border- rounded px-10 mx-auto py-3 mb-4 hover:scale-110 hover:bg-white hover:text-black duration-300 ">
                Log in
              </button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
