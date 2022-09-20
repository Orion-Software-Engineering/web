import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rectangle14 from "../../public/rectangle14.png";
import Rectangle15 from "../../public/rectangle15.png";
import Rectangle17 from "../../public/rectangle17.png";


export default function OrganiserProfile() {
  return (
    <div className="grid grid-cols-2 divide-x mt-10 h-screen mb-10">
      <div>
        <div className="flex flex-col mt-[80px] items-center justify-center ">
          <div className="bg-blue-600 h-80 w-80 rounded-t-[30px]">
            <div className="text-center mt-10">
              <div className="items-center justify-center flex flex-col">
                <div className="w-40 h-40 bg-white rounded-full">
                  <div>
                    <div className="text-[60px] pt-10">
                      <ion-icon name="camera"></ion-icon>
                    </div>
                    <h1 className="text-[10px]">[Organizer's Logo]</h1>
                  </div>
                </div>
              </div>
              <h1 className="font-Nunito text-3xl text-white">
                [Organizer's Name]
              </h1>
              <p className="text-white font-Nunito font-semibold">Organizer</p>
            </div>
            <div className="bg-blue-100 h-80 w-80 rounded-b-[30px] mt-[80px] text-center font-Nunito">
              <div className="flex-col space-y-">
                <ul>
                  <li className="border-b"></li>
                  <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                    <Link href="">
                      <ion-icon name="person-circle-outline"></ion-icon>
                    </Link>
                    <h1 className="text-[15px] font-bold pr-20">Profile</h1>
                    <Link href="">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                  </div>
                  <li className="border-b border-b-gray-400"></li>
                  <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                    <Link href="">
                      <ion-icon name="settings"></ion-icon>
                    </Link>
                    <h1 className="text-[15px] font-bold pr-20">Settings</h1>
                    <Link href="">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                  </div>
                  <li className="border-b border-b-gray-400"></li>
                  <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                    <Link href="">
                      <ion-icon name="cash"></ion-icon>
                    </Link>
                    <h1 className="text-[15px] font-bold pr-20">Billing</h1>
                    <Link href="">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                  </div>
                  <li className="border-b border-b-gray-400"></li>
                  <div className="mt-6 mb-6 text-[20px] flex justify-between px-10">
                    <Link href="">
                      <ion-icon name="Log-out"></ion-icon>
                    </Link>
                    <h1 className="text-[15px] font-bold pr-20">Logout</h1>
                    <Link href="">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-full bg-slate-100 mx-10 rounded-3xl">
        <div className="flex flex-row"> 
          <div >
          <Image src={Rectangle14} alt="Rectangle14" className=""/></div>
            <div>
            <Image src={Rectangle15} alt="Rectangle15" className=""/></div>
              <div>
              <Image src={Rectangle17} alt="Rectangle17" className=""/></div>
                <div className="flex flex-row">
                  <div>
                  
                    <div>

                    </div>
                  </div>
                </div>
              
          <div>

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
  );
}
