import React from "react";
import Image from "next/image";
import Logo from "../../public/orionlogo1.svg";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Signuppage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const role = "organizer";

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/organiserprofile");
    }
  }, );

  //function to validate signup and pass data to organiser profile page

  async function signup() {
    console.warn(username, email, password, dob, gender, role);
    let item = { username, email, password, dob, gender, role };
    let result = await fetch(
      "https://orion-meet-testing.herokuapp.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Postman-Token": "<calculated when request is sent>",
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
          Host: "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/organiserprofile");
  }

  return (
    <div className="bg-[url('../public/bg2.jpg')] h-screen w-screen bg-no-repeat bg-cover">
      <div className=" max-w-[800px] md:mt-[-64px] mt-0 first-letter:w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="relative w-full md:pt-20 ">
          <div className=" md:py-0 sm:mb-0 mx-3 md:flex md:mt-0  bg-white rounded-xl shadow-lg ">
            <div className=" hidden sm:flex flex-col items-center justify-center p-12">
              <Image src={Logo} alt="logo" />
              <h1 className="font-Nunito text-3xl mb-5 pt-10">Welcome</h1>
              <div>
                <p className="font-Nunito mb-5 pb-10">
                  Register now and meet new people!{" "}
                </p>
              </div>
            </div>
            <div className="w-full py-16 px-10">
              <h2 className="font-Nunito text-3xl mb-4 ">SignUp </h2>
              <p className="mb-4 ">
                Create your account to start sharing events
              </p>
              <form action="#">
                <div className="mt-5">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    className=" rounded-xl border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mt-5">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    className=" rounded-xl border border-gray-400 py-1 px-2 w-full"
                  />
                </div>

                <div className="mt-5">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
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

                <div className="mt-5">
                  <input
                    onChange={(e) => setDob(e.target.value)}
                    name="DOB"
                    type="date"
                    placeholder="DOB"
                    className="rounded-xl border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="mg-5 flex ">
                  <input
                    onChange={(e) => setGender(true)}
                    type="checkbox"
                    className="border border-gray-400"
                  />
                  <span className="font-Nunito p-1">Male</span>
                  <input
                    onChange={(e) => setGender(false)}
                    type="checkbox"
                    className="border border-gray-400 ml-3"
                  />
                  <span className="font-Nunito p-1 ">Female</span>
                </div>

                <div className="mg-5 text-left">
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
                <div className="md:pt-5 pt-0">
                  <div className="">
                    <button
                      type="button"
                      onClick={signup}
                      className="rounded-xl w-full font-Nunito bg-red-500 py-3 text-center"
                    >
                      <a className="text-white"> SignUp Now</a>
                    </button>
                    <p className="text-center  flex justify-center ">
                      Already have an account?
                      <a
                        href={"/login"}
                        className="px-2 underline text-red-500"
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
