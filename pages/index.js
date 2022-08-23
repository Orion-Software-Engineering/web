import React from "react";
import Hero from "../components/Landing Page/Hero";
import Header from "../components/Landing Page/Header";
import About from "../components/Landing Page/About";
import Chat from "../components/Landing Page/Chat";
import Find from "../components/Landing Page/Find";
import Getapp from "../components/Landing Page/Getapp";
import Profiles from "../components/Landing Page/Profiles";
import Question from "../components/Landing Page/Question";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        {/* <Chat />
        <Question /> */}
        {/* <Find />
        <About />
        <Profiles />
        <Getapp /> */}
      </main>

      <footer></footer>
    </div>
  );
}
