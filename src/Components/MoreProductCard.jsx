import React from "react";
import Diamond from "../Assets/ProductDescription-assets/diamond.png";
import Like from "../Assets/ProductDescription-assets/like.svg";
import Collection from "../Assets/ProductDescription-assets/collection.png";
import NextForward from "../Assets/ProductDescription-assets/next-forward.svg";
import NextBackward from "../Assets/ProductDescription-assets/next-backward.svg";

export default function MoreProductCard() {
  return (
    <div className="px-4">
      <div className="border border-solid border-[#333333] px-4 py-1 flex flex-col relative">
        <div className="self-end">
          <img src={Like} alt="" className="p-1" />
        </div>
        <img src={Collection} alt="collection" />
        <div className="flex justify-between items-center font-medium text-base text-[#333333]   w-full ">
          <p className=" ">Sassy</p>
          <div className="flex items-center space-x-3 py-1  ">
            <img src={Diamond} alt="" className="" />
            <p className=" font-medium text-[40px] text-[#333333]">3.20</p>
          </div>
        </div>
        <button className="border border-solid border-white rounded-[50%] absolute top-[11rem] left-5 p-2 lg:hidden">
          <img src={NextBackward} alt="" className="h-[40px] w-[40px] p-1 " />
        </button>
        <button className="border border-solid border-white rounded-[50%] absolute flex justify-center top-[11rem] right-5 p-2 lg:hidden">
          <img src={NextForward} alt="" className="h-[40px] w-[40px] p-1 " />
        </button>
      </div>
    </div>
  );
}
