import React from "react";
import Link from "next/link";

import Fileupload from "../../events/organiser/Fileupload";

export default function OrganiserProfile() {
  fetch(" https://orion-meet-testing.herokuapp.com/api/events")
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .then((completedata) => {
      // console.log(completedata);
      let data1 = "";
      let data2 = "";
      completedata.map((values) => {
        data1 += `                  
            <div>
              <Image src=${values.cover_image} alt="event" />
            </div>`;

        data2 = `                  
      <div>
        <h1> ${values.organizer}</h1>
      </div>`;
      });
      document.getElementById("event_img").innerHTML = data1;
      document.getElementById("org_name").innerHTML = data2;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="justify-center h-screen mt-[80-px]">
      <div className=" flex flex-row pt-[96px] justify-center ">
        <div className="md:flex-row  flex-col flex pt-10 pb-10">
          <div className="items-center justify-center px-20">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue-600 h-80 w-80 rounded-t-[30px]">
                <div className="text-center mt-10 space-y-5">
                  <div className="items-center justify-center flex flex-col">
                    <div className="w-40 h-40 bg-white rounded-full">
                      <div>
                        <div className="items-center justify-center pt-20 ml-7">
                          <Fileupload className="" />
                          <ion-icon name="camera"></ion-icon>
                        </div>
                        <h1 className="text-[10px]">[Organizer's Logo]</h1>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1
                      id="org_name"
                      className="font-Nunito text-3xl text-white"
                    ></h1>
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
                        <h1 className="text-[15px] font-bold pr-20">Profile</h1>
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
                        <h1 className="text-[15px] font-bold pr-20">Billing</h1>
                        <Link href="/organiserprofile">
                          <ion-icon name="chevron-forward-outline"></ion-icon>
                        </Link>
                      </div>

                      <li className="border-b border-b-gray-400"></li>

                      <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                        <Link href="/login">
                          <ion-icon name="Log-out"></ion-icon>
                        </Link>
                        <h1 className="text-[15px] font-bold pr-20">Logout</h1>
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
          <div className="relative w-0.5 m-2 bg-gray-200"></div>
          <div className="px-20">
            <div className="flex flex-row justify-between">
              <div className="font-Nunito font-bold">My Events</div>
              <div>
                <Link href="/events">
                  <div className="inline-flex flex-row space-x-2 text-lg">
                    <h1 className="font-Nunito text-sm">Create new event</h1>
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
  );
}
