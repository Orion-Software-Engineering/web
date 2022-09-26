import React from "react";
import Head from "next/head";
import Signuppage from "../components/Signup/Signuppage";
import Header from "../components/home/Header";
import NoSSR from "react-no-ssr";


export default function Signup() {
  return (
    <div>
      <Head>
        <title>Orion Login</title>
        <link rel="" href="" />
      </Head>
      <NoSSR>
        <Header />
      </NoSSR>
      <Signuppage />
    </div>

  );

}