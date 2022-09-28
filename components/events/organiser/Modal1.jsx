import React from "react";
import Image from "next/image";
import burnaflyer1 from "../../../public/burnaflyer1.png";
import { BiTimeFive,} from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { GiTicket} from "react-icons/gi";
import { CgDanger } from "react-icons/cg";




const Modal = ({ open,onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay1">
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalContainer rounded-xl">
        <div></div>
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
  );
};

export default Modal;
