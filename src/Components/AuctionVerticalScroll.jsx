import React from "react";
import AuctionPic from "../Assets/auction-pic.png";
export default function AuctionVerticalScroll() {
  return (
    <div className="w px-6 relative ">
      <img src={AuctionPic} alt="auction" className="" />
      <div className="bg-[rgba(245,244,244,0.24)] px-4 py-2 rounded-lg font-normal  text-white w-fit border border-solid border-white absolute bottom-6 right-[2.4rem] z-50 ">
        <p className=" text-[20px]">06 hrs : 45 min : 22 s</p>
      </div>
    </div>
  );
}
