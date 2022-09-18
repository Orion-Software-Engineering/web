import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export default function Loginpage() {
  return (
    <div className="bg-[url('../public/TopBackground.png')] bg-cover w-screen h-screen bg-no-repeat">
      <div className="relative w-full h-screen">
        <div className="relative w-full h-screen">
          <div className="flex justify-center items-center h-full">
            <form className="max-w-[400px] w-full mx-auto bg-white p-8">
              <h2 className="text-4xl font-bold text-center py-4"> ORION </h2>
              <div className="flex justify-between">
                <button>
                  <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                    <FcGoogle /> Google
                  </p>
                </button>
                <button>
                  <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
                    <AiFillFacebook /> Facebook
                  </p>
                </button>
              </div>
              <div className="flex flex-col mb-4">
                <label>Email</label>
                <input
                  className="border relative bg-grey-100 p-2"
                  type="email"
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  className="border relative bg-grey-100 p-2"
                  type="password"
                />
              </div>
              <button className="w-full py-3 mt-8 bg-red-600 hover:bg-red-400 relative text-white">
                LOGIN
              </button>
              <p className="flex items-center mt-2">
                <input className="mr-2" type="checkbox" />
                Remember Me
              </p>
              <p className="text-center mt-8 flex justify-center">
                Don't have an account?
                <a href={"/signup"}>
                  <p className="px-2 underline">Sign up</p>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
