import React from "react";
import CheckoutPic from "../Assets/checkout-pic.png";
import Cancel from "../Assets/cancel.svg";

export default function CheckoutComponent() {
  return (
    <div className="grid grid-cols-3 justify-between items-center space-x-2   py-6  lg:border-y border-solid border-[#747474]">
      <div className="flex  space-x-2   pr-3 col-span-2">
        <img src={CheckoutPic} alt="" />
        <div className="flex flex-col justify-between">
          <p className="font-normal text-base text-[#616161]">Editorials</p>
          <p className="font-bold text-[#333333] text-[22px]">Philomena </p>
          <div className="flex justify-between items-center border border-solid border-black rounded-[10px] lg:border-none justify-items-center w-fit">
            <button className="py-1 px-4 font-normal  text-xl lg:text-[32px]">
              -
            </button>
            <p className="py-1 px-5 b- border-x border-solid border-black lg:border-none font-normal  text-xl lg:text-[32px] text-[#333333]">
              1
            </p>
            <button className="py-1 px-4  font-normal  text-xl lg:text-[32px] text-center flex justify-center items-center">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 justify-between place-self-end   col-span-1 px-2 ">
        <div>
          <button className="border-2 border-solid border-[#888888] rounded-[50%] p-4 ">
            <img src={Cancel} alt="" className="w-[12px] h-[12px]" />
          </button>
        </div>

        <p className="font-bold text-[#333333] text-[24px]">$36.50</p>
      </div>
    </div>
  );
}
