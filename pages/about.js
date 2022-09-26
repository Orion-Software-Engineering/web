import React from "react";
import About from "../components/home/About";
import Header from "../components/home/Header";
import NoSSR from "react-no-ssr";

export default function AboutPage() {
  return (
    <div>
      <NoSSR>
        <Header />
      </NoSSR>
      <About />
    </div>
  );
}
