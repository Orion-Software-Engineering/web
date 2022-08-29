import React from "react";
import About from "../components/home/About";
import Header from "../components/home/Header";
import Profiles from "../components/home/Profiles";
import Getapp from "../components/home/Getapp";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <Profiles />
      <Getapp />
    </div>
  );
}
