import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../HeaderEvents";
import { FaRegUserCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

export default function OrganiserProfile() {
  let result1 = fetch(
    " https://orion-meet-testing.herokuapp.com/api/events"
    // fetch(" https://orion-meet-testing.herokuapp.com/api/event/${data1.id}")
  ).then(async (result1) => {
    result1 = await result1.json();
    localStorage.setItem("event-info", JSON.stringify(result1));
  });

  function logout() {
    localStorage.clear("user-info");
    window.location.replace("/login");
  }

  const data = JSON.parse(localStorage.getItem("user-info"));
  console.log(data.roles[0]);

  const data1 = JSON.parse(localStorage.getItem("event-info"));
  console.log(data1);

  return (
    <div>
      {data.roles[0] == "ROLE_ORGANIZER" ? (
        <>
          <Header />
          
          <div className="justify-center h-screen mt-[80-px]">
            <div className=" flex flex-row sm:mt-[20%]  justify-center ">
              <div className="md:flex-row  flex-col flex  pb-10">
                <div className="items-center justify-center px-20 hidden md:contents">
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <div className="bg-blue-600 rounded-t-[30px]">
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
                  </div>
                </div>

                {/* Mobile */}
                <div className="w-screen px-5 sm:hidden">
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
                          <ion-icon
                            className="fill-blue-600"
                            name="add-circle"
                          ></ion-icon>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-100 w-full h-full rounded-lg">
                    <div className=" flex w-">
                      <div className=" bg-blue-300 w-[50%] h-full m-5 flex-col">
                        <div className=" bg-red-300 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                      </div>
                      <div className=" bg-blue-300 w-[50%] h-full m-5">
                        <div className=" bg-red-300 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                        <div className=" bg-red-300 mt-5 h-40"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Web */}

                <div className="px-5 md:contents hidden">
                  <div className="relative h-[600px] w-0.5 mx-10 bg-gray-200 "></div>
                  <div>
                    <div className="flex justify-between mt-5">
                      <div className="font-Nunito font-bold">My Events</div>
                      <div>
                        <Link href="/events">
                          <div className="inline-flex flex-row space-x-2 text-lg">
                            <h1 className="font-Nunito font-semibold text-sm">
                              Create new event
                            </h1>
                            <ion-icon
                              className="fill-blue-600"
                              name="add-circle"
                            ></ion-icon>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-gray-100 w-[400px] rounded-lg">
                      <div className=" flex">
                        <div className=" bg-none-300 w-[50%] h-full m-5 flex-col">
                          <div className=" bg-red-300 h-40"></div>
                          <div className=" bg-red-300 mt-5 h-40"></div>
                          <div className=" bg-red-300 mt-5 h-40"></div>
                        </div>
                        <div className=" bg-none-300 w-[50%] h-full m-5">
                          <div className=" bg-red-300 h-40"></div>
                          <div className=" bg-red-300 mt-5 h-40"></div>
                          <div className=" bg-red-300 mt-5 h-40"></div>
                        </div>
                        <div className=" bg-none-300 w-[50%] h-full m-5">
                          <div className=" bg-red-300 h-40"></div>
                          <div className=" bg-red-300 mt-5 h-40"></div>
                          <div className=" bg-red-300 mt-5 h-40"></div>
                        </div>
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
