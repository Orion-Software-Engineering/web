import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Loginpage() {
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  const [resp, setResp] = useState("");
  const [resp1, setResp1] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/organiserprofile");
    }
  });

  //function to validate login and pass data to organiser profile page
  async function login() {
    console.warn(username, password);
    let item = { username, password };
    let result = await fetch(
      "https://orion-meet-testing.herokuapp.com/api/auth/signin",
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
    ).then(async (result) => {
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
    });

    let result1 = await fetch(
      "https://orion-meet-testing.herokuapp.com/api/auth/signin",
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
      if (response.status == 404) {
        setResp("Incorrect Username or Password!");
        setResp1("");
      } else if (response.status == 200) { 
        setResp1("Success!");
        setResp("");
        window.location.replace("/");

        window.location.replace("/");
      } else if (response.status == 403) {
        setResp1("Verify your mail!");
        setResp("");
        window.location.replace("/verifymail");
      }
    });
  }

  return (
    <div className="bg-[url('../public/bg2.jpg')] bg-cover w-screen h-screen bg-no-repeat">
      <div className="relative w-full h-screen max-w-[800px] mt-[-64px] mx-auto ">
        <div className="relative w-full h-screen ">
          <div className="flex justify-center items-center h-full mx-5">
            <form className=" rounded-xl max-w-[400px] w-full mx-auto bg-white p-8">
              <h1 className="text-red-700 font-semibold font-Nunito text-center">
                {resp}
              </h1>
              <h1 className="text-green-700 text-center font-nunito font-semibold">
                {resp1}
              </h1>
              <h2 className="text-4xl font-bold text-center py-4 font-Nunito">
                ORION
              </h2>
              <div className="flex justify-between">
                <button>
                  <p className="border shadow-lg hover:shadow-xl px-6 py-2 mb-5 relative flex items-center">
                    <FcGoogle /> Google
                  </p>
                </button>
                <button>
                  <p className="border shadow-lg hover:shadow-xl px-6 py-2 mb-5 relative flex items-center">
                    <AiFillFacebook /> Facebook
                  </p>
                </button>
              </div>
              <div className="flex flex-col mb-4  ">
                <label>Username</label>
                <div className="flex border-2 p-1 rounded-xl">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    className=" border-none relative bg-grey-100 w-full p-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <div className="flex border-2 p-1 rounded-xl">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className=" border-none relative bg-grey-100 p-2 w-full"
                    type={open === false ? "password" : "text"}
                    name="password"
                    autoComplete="on"
                  />

                  <div className="text-xl items-center flex pl-4">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={login}
                className=" rounded-xl w-full py-3 mt-8 bg-red-600 hover:bg-red-400 hover:scale-110   duration-300 relative text-white"
              >
                LOGIN
              </button>
              <p className="flex items-center mt-2">
                <input className="mr-2" type="checkbox" />
                Remember Me
              </p>
              <p className="text-center mt-8 flex justify-center">
                Don't have an account?
                <a href={"/signup"} className="px-2 underline text-red-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
