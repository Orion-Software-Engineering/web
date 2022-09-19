import React from "react";
import Image from "next/image";
import Profile1 from "../../public/profile1.png";
import Eventflyer from "../../public/Eventflyer.jpg";

export default function OrganiserProfile() {
  return (
    <div className=" container mx-auto">
      <div className=" flex w-full h-full bg-blue-300 rounded-xl mx-auto shadow-lg overflow-hidden ">
        <div className="w-1/2 flex flex-col items-center justify-center mt-4 bg-no-repeat bg-cover bg-center">
          <Image src={Profile1} alt="" className="mr" />
          <h1 className="font-Nunito text-3xl mb-5 mtpt-10 text-white">
            Dixie Normus
          </h1>
          <div>
            <p className=" mt pt-0 text-white">Organiser</p>
          </div>
        </div>
        <div className="w-1/2 py-16 px-12">
          <h2 className="font-Nunito text-2xl text-white mb-4 flex flex-row ">
            My Events
            <p className="px-40 ">Create New Events</p>{" "}
          </h2>
          <div className="container  rounded-xl mx-auto  bg-gray-400">
            <Image src={Eventflyer} alt="" className="rounded-xl fit-" />
          </div>
        </div>
      </div>
    </div>
  );
}
