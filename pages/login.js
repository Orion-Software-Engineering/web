import React from "react";
import Head from "next/head";
import Loginpage from "../components/Login/Loginpage";
import Header from "../components/home/Header";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Orion Login</title>
        <link rel="" href="" />
      </Head>
      <Header />
      <Loginpage />
    </div>
  );
}
