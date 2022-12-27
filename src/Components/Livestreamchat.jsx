import React from "react";
import BidProfile from "../Assets/bidprofile.png";

export default function Livestreamchat() {
  return (
    <div className="flex space-x-3 items-center text-[13px] font-medium ">
      <div>
        <img src={BidProfile} alt="" />
      </div>
      <div>
        <p className="text-[rgba(255,255,255,0.6)]">Ella Flynn</p>
        <p className="text-[rgba(255,255,255,0.5)]">Tight bid</p>
      </div>
    </div>
  );
}
