import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/")
    }
  }, []);

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
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/");
  }

  return (
    <div className="bg-[url('../public/TopBackground.png')] bg-cover w-screen h-screen bg-no-repeat">
      <div className="relative w-full h-screen">
        <div className="relative w-full h-screen">
          <div className="flex justify-center items-center h-full">
            <form className=" rounded-xl max-w-[400px] w-full mx-auto bg-white p-8">
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
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className=" rounded-xl border relative bg-grey-100 p-2"
                  type="text"
                />
              </div>
              <div className="flex flex-col ">
                <label>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className=" rounded-xl border relative bg-grey-100 p-2"
                  type="password"
                  name="password"
                  autoComplete="on"
                />
              </div>
              <button
                type="button"
                onClick={login}
                className=" rounded-xl w-full py-3 mt-8 bg-red-600 hover:bg-red-400 relative text-white"
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
