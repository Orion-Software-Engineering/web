import React from "react";
import Header from "../components/home/Header";
import Form from "../components/support/Form";
import Accordion from "../components/support/Accordion";

export default function Support() {
  return (

    <div className=" h-screen bg-[url('../public/bg2.jpg')] ">
      <div className=" bg-[url('../public/bg2.jpg')]">

        <Header />
        <div className="w-screen space-y-5 mt-10">
          <Form />
          <Accordion />
        </div>
      </div>
    </div>

  );
}
