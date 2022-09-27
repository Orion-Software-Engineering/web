import React from "react";
import Header from "../components/home/Header";
import Cont from "../components/Continue";
import NoSSR from "react-no-ssr";


export default function Continue() {
    return (
        <div>
            <NoSSR>
                <Header />
                <Cont />
            </NoSSR>
        </div>
    )
}