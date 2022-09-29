import React from "react";
import Image from "next/image";
import burnaflyer1 from "../../../public/burnaflyer1.png";
import { BiTimeFive,} from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { GiTicket} from "react-icons/gi";
import { CgDanger } from "react-icons/cg";




const Modal = ({ open,onClose }) => {

  const data = JSON.parse(localStorage.getItem("user-info"));
  var link1 =
    "https://orion-meet-testing.herokuapp.com/api/organizer/events/" + data.id;
  fetch(link1)
    .then((data1) => {
      return data1.json();
    })
    .then((completedata) => {
      console.log(completedata);
      let data2 = "";
      completedata.map((values) => {
        data2 += `<Image  src=${values.cover_image} alt="img">`;
      });
      document.getElementById("event_web").innerHTML = data2;
      document.getElementById("event_mob").innerHTML = data2;
    })
    .catch((err) => {
      console.log(err);
    });

  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay1">
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalContainer rounded-xl">
        <div id="modal">
        <Image  width={"500%"} src={burnaflyer1} alt="" />
        <div className="modalRight pb-20">
            <p  onClick={onClose} className="closeBtn">X</p>
            <div className=" flex content font-Nunito text-black-400 text-lg ">
             <h5 className="font-semibold text-4xl">AstroNight</h5>
             <p >Entertainment</p>
             <p><BiTimeFive/>9pm| 05-05-2022</p>
             <p><GrLocation/>O2 lounge</p>
             <p><GiTicket/>200ghc</p>
             <p><CgDanger/> Strictly 18+</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
