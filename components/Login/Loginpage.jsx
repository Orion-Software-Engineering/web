import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("add");
    }
  }, []);

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch(
      "https://orion-meet-testing.herokuapp.com/api/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.JSON();
    localStorage.setItemn("user-info", JSON.stringify(result));
    history.push("/add");
  }

  return (
    <div className="bg-[url('../public/TopBackground.png')] bg-cover w-screen h-screen bg-no-repeat">
      <div className="relative w-full h-screen">
        <div className="relative w-full h-screen">
          <div className="flex justify-center items-center h-full">
            <form
              onSubmit={login}
              className=" rounded-xl max-w-[400px] w-full mx-auto bg-white p-8"
            >
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
                <label>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className=" rounded-xl border relative bg-grey-100 p-2"
                  type="email"
                />
              </div>
              <div className="flex flex-col ">
                <label>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className=" rounded-xl border relative bg-grey-100 p-2"
                  type="password"
                />
              </div>
              <button
                type="submit"
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
