import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../HeaderEvents";
import { FaRegUserCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { info } from "autoprefixer";
import Modal from "../organiser/Modal";
import Modal1 from "../organiser/Modal1";
import Org from "../../Org";

export default function OrganiserProfile() {
  const data = JSON.parse(localStorage.getItem("user-info"));
  var link1 =
    "https://orion-meet-testing.herokuapp.com/api/organizer/events/" + data.id;
  fetch(link1)
    .then((data1) => {
      return data1.json();
    })
    .then((completedata) => {
      console.log(completedata);
      let data2 = "";
      completedata.map((values) => {
        data2 += `
        <Image class="it1"  src=${values.cover_image} alt="img">
        <div class="it0">
          <h5 className="textimg font-semibold text-4xl">${values.name}</h5>
          <h5 className="textimg font-semibold text-4xl">${values.description}</h5>
          <p><BiTimeFive/>${values.time} | ${values.date}</p>
          <p><GrLocation/>${values.location}</p>
          <p><GiTicket/>${values.ticket_price}</p>
        </div>`;
      });
      // document.getElementById("event_web").innerHTML = data2;
      document.getElementById("event_mob").innerHTML = data2;
    })
    .catch((err) => {
      console.log(err);
    });

  function logout() {
    localStorage.clear("user-info");
    window.location.replace("/login");
  }

  return (
    <div>
      {data.roles[0] == "ROLE_ORGANIZER" ? (
        <>
          <Header />
          {/* Web */}
          <div className="md:contents hidden">
            <Org />
            {/* <div className="px-[10%] w-full">
              <div className="h-screen items-center justify-center flex mt-[-64px] ">
                <div className="flex space-x-[5%]  justify-center w-full items-center px-auto">
                  <div className="">
                    <div className="bg-blue-600 w-80 rounded-t-[30px]">
                      <div className="text-center py-10">
                        <div>
                          <h1 className="font-Nunito text-3xl text-white">
                            {data.username}
                          </h1>
                          <p className="text-white font-Nunito font-semibold ">
                            Organizer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-100 h-80 w-80 rounded-b-[30px] mt-10 text-center font-Nunito">
                      <div className="flex-col">
                        <ul>
                          <li className="border-b"></li>
                          <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                            <Link href="/organiserprofile">
                              <FaRegUserCircle size={25} />
                            </Link>
                            <h1 className="text-[15px] font-bold pr-20">
                              Profile
                            </h1>
                            <Link href="/organiserprofile">
                              <IoIosArrowForward size={25} />
                            </Link>
                          </div>
                          <li className="border-b border-b-gray-400"></li>
                          <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                            <Link href="/organiserprofile">
                              <FiSettings size={25} />
                            </Link>
                            <h1 className="text-[15px] font-bold pr-20">
                              Settings
                            </h1>
                            <Link href="/organiserprofile">
                              <IoIosArrowForward size={25} />
                            </Link>
                          </div>
                          <li className="border-b border-b-gray-400"></li>
                          <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                            <Link href="/organiserprofile">
                              <FaRegMoneyBillAlt size={25} />
                            </Link>
                            <h1 className="text-[15px] font-bold pr-20">
                              Billing
                            </h1>
                            <Link href="/organiserprofile">
                              <IoIosArrowForward size={25} />
                            </Link>
                          </div>

                          <li className="border-b border-b-gray-400"></li>

                          <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                            <button onClick={logout}>
                              <BiLogOut size={25} />
                            </button>
                            <h1 className="text-[15px] font-bold pr-20">
                              Logout
                            </h1>
                            <Link href="/login">
                              <IoIosArrowForward size={25} />
                            </Link>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 flex items-center justify-center">
                    <div className="relative h-[500px] w-0.5 mx-5 items-center bg-gray-200"></div>
                    <div className="">
                      <div className="pb">
                        <div className="flex justify-between">
                          <div className="font-Nunito font-bold">My Events</div>
                          <div>
                            <Link href="/events">
                              <div className="inline-flex flex-row space-x-2 text-lg">
                                <h1 className="font-Nunito font-semibold text-sm">
                                  Create new event
                                </h1>
                                <AiOutlinePlusCircle size={20} />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 w-full h-[700px] rounded-lg">
                        <div className="flex-col">
                          <div className="bg-none-300 m-5 flex-row flex space-x-10 pt-5">
                            <div id="event_web" className=""></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="justify-center h-screen mt-[80-px]">
              <div className=" flex flex-row sm:mt-[20%]  justify-center ">
                <div className="md:flex-row  flex-col flex  pb-10">
                  <div className="w-screen px-5">
                    <div className="bg-blue-600 w-full h-20 my-2 rounded-lg">
                      <div className="text-center p-2">
                        <h1 className="font-Nunito text-3xl text-white">
                          {data.username}
                        </h1>
                        <p className="text-white font-Nunito font-semibold ">
                          Organizer
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-5">
                      <div className="font-Nunito font-bold">My Events</div>
                      <div>
                        <Link href="/events">
                          <div className="inline-flex flex-row space-x-2 text-lg">
                            <h1 className="font-Nunito font-semibold text-sm">
                              Create new event
                            </h1>
                            <AiOutlinePlusCircle size={20} />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 h-full rounded-lg">
                      <div className="space-y-5">
                        <div id="event_mob" className="py-5 space-y-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>{window.location.replace("/redirect")};</>
      )}
    </div>
  );
}
