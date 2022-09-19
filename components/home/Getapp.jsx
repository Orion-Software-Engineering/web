import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import imagePlaystore from "../../public/playstore.png";
import imageAppstore from "../../public/applestore2.png";

const Getapp = () => {
  return (
    <div className="h-[250px] flex">
      <div className="border-gray-600 h-[350px] w-[400px] ml-[130px] mt-[20px]">
        <div
          className="text-black w-[400px] h-[80px] text-5xl text-center mt-[50px] ml-[px] pl-[2px] 
                font-bold border-gray-600 font-nunito"
        >
          Get the app!
        </div>
        <div className="mt-[10px] ml-[80px] cursor-pointer w-[102px] h-[52px]">
          <Link href="https://play.google.com/store/games">
            <Image
              src={imagePlaystore}
              alt="playstore"
              width="100px"
              height="50px"
            />
          </Link>
        </div>
        <div className="ml-[220px] mt-[-52px] cursor-pointer w-[101px] h-[51px] ">
          <Link href="https://www.apple.com/app-store/">
            <Image
              src={imageAppstore}
              alt="appstore"
              width="100px"
              height="50px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Getapp;

