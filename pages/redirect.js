import React from "react";
import Header from "../components/home/Header";
import User from "../components/UserRedirect"
import NoSSR from "react-no-ssr";



export default function Continue() {
    return (
  <div>
      <Header />
                <User />
  </div>


    );
}