import React from "react";
import Header from "../components/home/Header";
import Team from "../components/home/Team"
import NoSSR from "react-no-ssr";




export default function Home() {
    return (
        <div>
            <NoSSR>
                <Header />
            </NoSSR>
            <Team />

        </div>

    );
}