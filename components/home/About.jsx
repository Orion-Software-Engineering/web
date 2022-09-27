import React from "react";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  UserGroupIcon,
  ChatIcon,
} from "@heroicons/react/outline";

const About = () => {
  return (
    <div className="bg-[url('../public/bg2.jpg')] w-full h-screen bg-no-repeat bg-cover font-Nunito mt-[-64px]">
      <div className="bg-[url('../public/bg2.jpg')] w-full bg-no-repeat bg-cover font-Nunito mt-[-64px]">
        <div className="w-full h-[700px] bg-gray-900/90 absolute"></div>
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className=" pt-20 px-4 py-12 ">
            <h2 className=" text-3xl pt-8 text-slate-300 uppercase text-center">
              About
            </h2>
            <h3 className="text-4xl font-medium  py-6 text-center">
              Orion Meet
            </h3>
            <p className="py-4 text-3xl text-slate-300">
              Orion meet is an app based platform for match making and event
              organizing. Unlike other match making apps, it matches people
              based on their shared interests. It also gives community leaders
              and event organizers the platform to share and host events.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <ChatIcon className="w-16 p-4 bg-red-400 text-white rounded-lg  mt-[-4rem] " />
                <h3 className="font-bold text-2xl my-6">Matches & Events</h3>
                <p className="text-gray-600 text-xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  velit urna, cursus eu ornare eget, egestas ut tellus. Mauris
                  suscipit lacinia velit ac pulvinar. Curabitur quis magna vel
                  ligula rutrum viverra in vitae quam.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4  hover:bg-slate-400">
                <a href={"/signup"}>
                  <p className="flex items center text-red-300  ">
                    Join us <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <UserGroupIcon className="w-16 p-4 bg-red-400 text-white rounded-lg  mt-[-4rem] " />
                <h3 className="font-bold text-2xl my-6">Our Team</h3>
                <p className="text-gray-600 text-xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  velit urna, cursus eu ornare eget, egestas ut tellus. Mauris
                  suscipit lacinia velit ac pulvinar. Curabitur quis magna vel
                  ligula rutrum viverra in vitae quam.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4  hover:bg-slate-400 ">
              <a href={"/team"} >
                <p className="flex items center text-red-300  ">
                  Know us <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <PhoneIcon className="w-16 p-4 bg-red-400 text-white rounded-lg  mt-[-4rem] " />
                <h3 className="font-bold text-2xl my-6">Support</h3>
                <p className="text-gray-600 text-xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  velit urna, cursus eu ornare eget, egestas ut tellus. Mauris
                  suscipit lacinia velit ac pulvinar. Curabitur quis magna vel
                  ligula rutrum viverra in vitae quam.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4  hover:bg-slate-400">
                <a href={"/support"}>
                  <p className="flex items center text-red-300  ">
                    Contact us <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
