import React from "react";
import Image from "next/image";
import Logo from "../../public/orionlogo.svg";
import Link from "next/link";

export default function Signuppage() {
  return (
    <div className="bg-[url('../public/TopBackground.png')] p-40 min-h-screen bg-no-repeat bg-cover">
      <div className="container mx-auto  ">
        <div className=" flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden ">
          <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <Image src={Logo} alt="" />

            <h1 className="font-Nunito text-3xl mb-5 pt-10">Welcome</h1>
            <div>
              <p className="font-Nunito mb-5 pb-10">
                Register now and meet new people!{" "}
              </p>
            </div>
          </div>
          <div className="w-1/2 py-16 px-12">
            <h2 className="font-Nunito text-3xl mb-4 ">SignUp </h2>
            <p className="mb-4 ">
              Create your account. It's free and only takes a minute
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className=" rounded-xl border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  className=" rounded-xl border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  className=" rounded-xl border border-gray-400 py-1 px-2 w-full"
                />
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder=" Password"
                  className=" rounded-xl border border-gray-400 py-1 px-2 w-full"
                />
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className=" rounded-xl border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mg-5">
                <input type="checkbox" className="border border-gray-400" />
                <span className="font-Nunito p-1">
                  I accept the
                  <a
                    href={""}
                    className="text-red-500 font-semibold font-Nunito p-1"
                  >
                    Terms of Use
                  </a>
                  &
                  <a
                    href={""}
                    className="text-red-500 font-semibold font-Nunito p-1"
                  >
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button className=" rounded-xl w-full font-Nunito bg-red-500 py-3 text-center">
                  <a className="text-white"> SignUp Now</a>
                </button>
                <p className="text-center mt-2 flex justify-center ">
                  Already have an account?
                  <a href={"/login"} className="px-2 underline text-red-500">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
