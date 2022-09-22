import React from "react";
import Header from "../components/home/Header";
import Form from "../components/support/Form";
import Accordion from "../components/support/Accordion";

export default function Support() {
  return (

    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="bg-gray-100 space-y-5 pt-10">
        <Form />
        <Accordion />
      </div>
    </div>

  );
}
