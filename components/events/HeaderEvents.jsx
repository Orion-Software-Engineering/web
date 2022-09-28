import React, { useState } from "react";
import Logo from "../../public/orionLogo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  //Nav bar function to implement slider on smaller displays
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  function logout() {
    localStorage.clear("user-info");
    window.location.replace("/login");
  }

  return (
    <div>
      <div className="">
        <div className="flex relative justify-between items-center h-16 max-2-[1024] mx-auto px-4 text-black bg-[#F6F6F6] w-screen z-10">
          <div className="flex sm:ml-5 ml-0">
            <Image src={Logo} alt="Logo_Image" width={"70px"} height={"70px"} />
            <h1 className="pt-1 pl-1 w-full text-4xl font-bold text-black font-Nunito">
              <Link href={"/"}>Meet</Link>
            </h1>
          </div>
          <ul className="hidden md:flex font-Nunito font-bold pt-4  text-black">
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
            <Link href={"/organiserprofile"}>
              <FaRegUserCircle
                href="/organiser profile"
                className="hover:scale-150 duration-300 mr-10 mt-3"
                size={25}
              />
            </Link>

            <li>
              <Link href={"/login"}>
                <button
                  onClick={logout}
                  className="mr-10 absolte uppercase bg-transparent border-[1px] border- rounded px-6 mx-auto py-2 mb-4 hover:scale-110 hover:bg-black hover:text-white duration-300 "
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>

          <div onClick={handleNav} className="block md:hidden ">
            {!nav ? (
              <AiOutlineClose size={20} className="bg-black" />
            ) : (
              <AiOutlineMenu size={20} className="bg-black" />
            )}
          </div>

          <div
            className={
              !nav
                ? "md:hidden fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#F6F6F6] ease-in-out duration-500 z-10"
                : "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#F6F6F6] ease-in-out duration-500 z-10"
            }
          >
            <div className="flex m-4 ">
              <Image
                src={Logo}
                alt="Logo_Image"
                width={"70px"}
                height={"70px"}
              />
              <h1 className="pl-1 w-full text-4xl font-bold text-black">
                <Link href={"/"}>MEET</Link>
              </h1>
            </div>

            <ul className="uppercase p-4 font-Merriweather text-black">
              <div className="flex-row flex">
                <Link href={"/organiserprofile"}>
                  <FaRegUserCircle
                    href="/organiser profile"
                    className="hover:scale-150 duration-300 mt-3 mr-2"
                    size={25}
                  />
                </Link>
                <Link href={"/organiserprofile"}>
                  <h1 className="mt-3 font-nunito font-semibold">Profile</h1>
                </Link>
              </div>
              <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
              <Link href={"/"}>
                <h1 className=" font-nunito font-semibold">Home</h1>
                  </Link>
              <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
              <Link href={"/about"}>
               <h1 className=" font-nunito font-semibold"> About</h1>
                </Link>
              <li className=" mt-4 mb-4 border-b border-b-gray-600"></li>
              <Link href={"/support"}>
                <h1 className=" font-nunito font-semibold">Support</h1>
                </Link>
              <li className="mt-4 mb-4 border-b border-b-gray-600"></li>
              <Link href={"/events"}>
                <h1 className=" font-nunito font-semibold">Events</h1>
                </Link>
              <li className="mt-4 mb-4 border-b border-b-black"></li>
              <div className=" my-6 ">
                <Link href={"/login"}>
                  <button 
                    onClick={logout}
                    className=" font-semibold font-Nunito absolte uppercase bg-transparent border-[1px] border- rounded px-6 mx-auto py-2 mb-4 hover:scale-110 hover:bg-white hover:text-black duration-300  "
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
