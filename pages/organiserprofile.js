import React from "react";
import Header from "../components/events/HeaderEvents";
import Profile from "../components/events/organiser/Profile";
import NoSSR from "react-no-ssr";



export default function organiserprofile() {
   return (
      <div >
         <NoSSR>
            <Header />
            <Profile />
         </NoSSR>
      </div>
   )
}