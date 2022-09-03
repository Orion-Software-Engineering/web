import React, { useState } from "react";
import Logo from "../../public/orionLogo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  max-2-[1024] mx-auto px-4 text-white bg-[#00030075] ">
      <div className="flex">
        <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
        <h1 className="pl-1 w-full text-4xl font-bold text-white">MEET</h1>
      </div>

      <ul className="hidden md:flex font-Merriweather">
        <a className="p-4" href={"/events"}>Home</a>
        <a className="p-4" href={"/events"}>About</a>
        <a className="p-4" href={"/events"}>Support</a>
        <a className="p-4" href={"/events"}>Events</a>

        <button className="absolte uppercase bg-transparent border-[1px] border- rounded px-10 mx-auto py-3 mb-4 hover:scale-110 hover:bg-white hover:text-black duration-300 ">
          Log in
        </button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose seize={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#00030075] ease-in-out duration-500 "
        }
      >
        <div className="flex  m-4 ">
          <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
          <h1 className="pl-1 w-full text-4xl font-bold text-white">MEET</h1>
        </div>
        <ul className="uppercase p-4 font-Merriweather object-cover h-full w-full absolute ">
        <a className="p-4 boreder border-gray-600" href={"/events"}>Home</a>
        <li className="p-4 boreder border-gray-600"></li>
        <a className="p-4 boreder border-gray-600" href={"/events"}>About</a>
        <li className="p-4 boreder border-gray-600"></li>
        <a className="p-4 boreder border-gray-600" href={"/events"}>Support</a>
        <li className="p-4 boreder border-gray-600"></li>
        <a className="p-4 boreder border-gray-600" href={"/events"}>Events</a>
          <div className=" my-6">
            <button className="absolte uppercase bg-transparent border-[1px] border- rounded px-10 mx-auto py-3 mb-4 hover:scale-110 hover:bg-white hover:text-black duration-300 ">
              Log in
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
