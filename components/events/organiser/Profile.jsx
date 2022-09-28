import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../HeaderEvents";

export default function OrganiserProfile() {
  let result1 = fetch(
    " https://orion-meet-testing.herokuapp.com/api/event/d852373d-806c-493b-95a6-0bc37a940ed4/"
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
            <div className=" flex flex-row pt-[96px] justify-center ">
              <div className="md:flex-row  flex-col flex pt-10 pb-10">
                <div className="items-center justify-center px-20">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-blue-600 h-40 w-80 rounded-t-[30px]">
                      <div className="text-center mt-10 space-y-5">
                        <div className="items-center justify-center flex flex-col"></div>
                        <div>
                          <h1 className="font-Nunito text-3xl text-white">
                            {data.username}
                          </h1>
                          <p className="text-white font-Nunito font-semibold">
                            Organizer
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-100 h-80 w-80 rounded-b-[30px] mt-[80px] text-center font-Nunito">
                        <div className="flex-col">
                          <ul>
                            <li className="border-b"></li>
                            <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                              <Link href="/organiserprofile">
                                <ion-icon name="person-circle-outline"></ion-icon>
                              </Link>
                              <h1 className="text-[15px] font-bold pr-20">
                                Profile
                              </h1>
                              <Link href="/organiserprofile">
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                              </Link>
                            </div>
                            <li className="border-b border-b-gray-400"></li>
                            <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                              <Link href="/organiserprofile">
                                <ion-icon name="settings"></ion-icon>
                              </Link>
                              <h1 className="text-[15px] font-bold pr-20">
                                Settings
                              </h1>
                              <Link href="/organiserprofile">
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                              </Link>
                            </div>
                            <li className="border-b border-b-gray-400"></li>
                            <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                              <Link href="/organiserprofile">
                                <ion-icon name="cash"></ion-icon>
                              </Link>
                              <h1 className="text-[15px] font-bold pr-20">
                                Billing
                              </h1>
                              <Link href="/organiserprofile">
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                              </Link>
                            </div>

                            <li className="border-b border-b-gray-400"></li>

                            <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                              <button onClick={logout}>
                                <ion-icon name="Log-out"></ion-icon>
                              </button>
                              <h1 className="text-[15px] font-bold pr-20">
                                Logout
                              </h1>
                              <Link href="/login">
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                              </Link>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[300%] w-0.5 m-2 bg-gray-200"></div>
                <div className="px-20">
                  <div className="flex flex-row justify-between">
                    <div className="font-Nunito font-bold">My Events</div>
                    <div>
                      <Link href="/events">
                        <div className="inline-flex flex-row space-x-2 text-lg">
                          <h1 className="font-Nunito text-sm">
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
                  <div className="bg-gray-100 rounded-lg ">
                    <div className="space-y-20  h-full">
                      <div className="flex flex-row space-x-20 ">
                        <div className="flex space-x-10" id="event_img"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <script
                  type="module"
                  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                  async
                />
                <script
                  noModule
                  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                  async
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <> {window.location.replace("/")};</>
      )}
    </div>
  );
}
