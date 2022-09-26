import React, { useState } from "react";
import Logo from "../../public/orionLogo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  //Nav bar function to implement slider on smaller displays
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex relative justify-between items-center h-16 max-2-[1024] mx-auto px-4 text-white bg-[#000000] w-screen z-10">
      <div className="flex">
        <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
        <h1 className="pt-1 pl-1 w-full text-4xl font-bold text-white font-Nunito">
          <Link href={"/"}>Meet</Link>
        </h1>
      </div>

      <ul className="hidden md:flex font-Nunito font-bold pt-4  text-white">
        <li className="pt-3">
          <Link className=" p-4 " href={"/"}>
            Home
          </Link>
        </li>
        <li className="pt-3 px-6 ">
          <Link className="p-4 " href={"/about"}>
            About
          </Link>
        </li>
        <li className="pt-3 ">
          <Link className="p-4 " href={"/support"}>
            Support
          </Link>
        </li>
        <li className="pt-3 px-6">
          <Link className="p-4" href={"/events"}>
            Events
          </Link>
        </li>
        <li>
          <Link href={"/login"}>
            <button className=" absolte uppercase bg-transparent border-[1px] border- rounded px-6 mx-auto py-2 mb-4 hover:scale-110 hover:bg-black hover:text-white duration-300 ">
              Log in
            </button>
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden ">
        {!nav ? (
          <AiOutlineClose seize={20} className="bg-black" />
        ) : (
          <AiOutlineMenu size={20} className="bg-black" />
        )}
      </div>

      <div
        className={
          !nav
            ? "md:hidden fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#00030075] ease-in-out duration-500 z-10"
        }
      >
        <div className="flex m-4 ">
          <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
          <h1 className="pl-1 w-full text-4xl font-bold text-white">
            <Link href={"/"}>MEET</Link>
          </h1>
        </div>

        <ul className="uppercase p-4 font-Merriweather">
          <Link href={"/"}>Home</Link>
          <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
          <Link href={"/about"}>About</Link>
          <li className=" mt-4 mb-4 border-b border-b-gray-600"></li>
          <Link href={"/support"}>Support</Link>
          <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
          <Link href={"/events"}>Events</Link>
          <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
          <div className=" my-6 ">
            <Link href={"/login"}>
              <button className="absolte uppercase bg-transparent border-[1px] border- rounded px-6 mx-auto py-2 mb-4 hover:scale-110 hover:bg-white hover:text-black duration-300 ">
                Log in
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
