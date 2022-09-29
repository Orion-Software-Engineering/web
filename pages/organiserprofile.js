import React from "react";
import Profile from "../components/events/organiser/Profile";
import NoSSR from "react-no-ssr";




export default function organiserprofile() {

   return (
      <div >

         <NoSSR>
            <Profile />
         </NoSSR>



      </div>
   )
}