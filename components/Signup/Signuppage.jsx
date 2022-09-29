import React from "react";
import Image from "next/image";
import Logo from "../../public/orionlogo1.svg";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { calcLength } from "framer-motion";

export default function Signuppage() {
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const [resp, setResp] = useState("");
  const [resp1, setResp1] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [checktnc, setCheckTNC] = useState("");
  const [gendermale, setGendermale] = useState("");
  const [genderfemale, setGenderfemale] = useState("");
  const [gender, setGender] = useState("");
  const roles = ["organizer"];

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/organiserprofile");
    }
  });

  //function to validate signup and pass data to organiser profile page

  async function signup() {
    console.warn(username, email, password, dob, gender, roles);
    let item = { username, email, password, dob, gender, roles };
    let result = await fetch(
      "https://orion-meet.herokuapp.com/api/auth/signup",
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

    let result1 = await fetch(
      "https://orion-meet.herokuapp.com/api/auth/signup",
      {
        method: "POST",
        headers: {
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
    ).then((response) => {
      console.log("response", response);
      if (response.status == 400) {
        setResp1("Success!");
        setResp("");
        setTimeout(() => {
          localStorage.clear("user-info");
          window.location.replace("/login");
        }, 1000);
      } else if (response.status == 403) {
        setResp1("");
        setResp("Success!, Verify email!");
        window.location.replace("/verifymail");
      } else {
        setResp1("Failed to create your account");
        setResp("");
      }
    });
  }

  const handleusername = (e) => {
    if (
      username.match(/[a-z]/) != null ||
      username.match(/[A-Z]/) != null ||
      (username.match(/[0-9]/) != null && username.match(/[!@#$%^&*]/) == null)
    ) {
      handlemail();
    } else {
      setResp1("");
      setResp("Invid username");
    }
  };

  const handlemail = (e) => {
    if (/\S+@\S+\.\S+/.test(email)) {
      handlepassword();
    } else {
      setResp1("");
      setResp("Invalid Email");
    }
  };

  const handlepassword = (e) => {
    if (
      password.match(/[a-z]/) != null &&
      password.match(/[A-Z]/) != null &&
      password.match(/[0-9]/) != null &&
      password.match(/[!@#$%^&*]/) != null &&
      password.length > 7
    ) {
      handleDOB();
    } else {
      setResp1("");
      setResp("Insecure Password");
    }
  };

  const handleDOB = (e) => {
    if (dob) {
      handleGender();
    } else {
      setResp1("");
      setResp("You must provide your date of birth");
    }
  };

  const handleGender = (e) => {
    handleGendermale();
    handleGenderfemale();
    if ((gendermale || genderfemale) != true) {
      setResp("You must provide your gender");
    } else {
      handleTNC();
    }
  };

  const handleGendermale = (e) => {
    if (gendermale == true) {
      gender = true;
    }
  };

  const handleGenderfemale = () => {
    if (genderfemale == true) {
      gender = false;
    }
  };

  const handleTNC = (e) => {
    if (checktnc == true) {
      setResp1("");
      setResp("");
      signup();
    } else {
      setResp1("");
      setResp("You must agree with Terms of Use and Privacy Policy");
    }
  };

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
                  Register now and meet new people!
                </p>
              </div>
            </div>
            <div className="w-full py-16 px-10">
              <h1 className="text-red-700 font-semibold font-Nunito text-center">
                {resp}
              </h1>
              <h1 className="text-green-700 text-center font-nunito font-semibold">
                {resp1}
              </h1>
              <h2 className="font-Nunito text-3xl mb-4 ">SignUp </h2>
              <p className="mb-4 ">
                Create your account to start sharing events
              </p>
              <form action="#">
                <div className="mt-5 flex-row  flex border-2 p-1 rounded-xl">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    className="  border-none relative bg-grey-100 p-2 w-full"
                  />
                </div>
                <div className="mt-5 flex-row  flex border-2 p-1 rounded-xl">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="mail"
                    placeholder="Email"
                    className=" border-none relative bg-grey-100 p-2 w-full"
                  />
                </div>

                <div className="mt-5 flex-row  flex border-2 p-1 rounded-xl">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={open === false ? "password" : "text"}
                    placeholder=" Password"
                    className=" border-none relative bg-grey-100 p-2 w-full"
                  />

                  <div className="text-xl items-center flex pl-4">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>

                <div className="mt-5 flex-row  flex border-2 p-1 rounded-xl">
                  <input
                    onChange={(e) => setDob(e.target.value)}
                    type="date"
                    placeholder="DOB"
                    className="border-none relative bg-grey-100 p-2 w-full"
                  />
                </div>
                <div className="mg-5 flex ">
                  <input
                    onChange={(e) => setGendermale(true)}
                    type="checkbox"
                    className="border border-gray-400"
                  />
                  <span className="font-Nunito p-1">Male</span>
                  <input
                    onChange={(e) => setGenderfemale(true)}
                    type="checkbox"
                    className="border border-gray-400 ml-3"
                  />
                  <span className="font-Nunito p-1 ">Female</span>
                </div>

                <div className="mg-5 text-left">
                  <input
                    onChange={(e) => setCheckTNC(true)}
                    type="checkbox"
                    className="border border-gray-400"
                  />
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
                      onClick={handleusername}
                      className="rounded-xl w-full font-Nunito bg-red-500 py-3 text-center hover:bg-red-300 hover:scale-110  hover:text-white duration-300"
                    >
                      <a className="text-white"> SignUp Now</a>
                    </button>
                    <p className="text-center  flex justify-center ">
                      Already have an account?
                      <a
                        href={"/login"}
                        className="px-2 underline text-red-500 "
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
