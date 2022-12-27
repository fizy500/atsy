import React from "react";
import View from "../Assets/view.svg";
import CancelWhite from "../Assets/cancelwhite.svg";
import Livestreamchat from "../Components/Livestreamchat";

export default function Livestream() {
  return (
    <main className="bg-livestream h-screen w-screen w- bg-cover bg-center p-3 flex flex-col justify-between">
      <div className="text-white py-3 px-3 flex justify-between items-center">
        <p className=" text-base font-medium">
          Tag:<span className="">Lost or Wither</span>
        </p>
        <p className="bg-[#006CA2] px-3 py-2 rounded-[5px] text-[13px] font-medium">
          LIVE
        </p>

        <div className=" flex space-x-2 px-3 py-2  bg-[rgba(255,255,255,0.4)] rounded-[5px]">
          <img src={View} alt="" />
          <p className="text-[13px] font-medium">295</p>
        </div>
        <div>
          <button>
            <img src={CancelWhite} alt="" />
          </button>
        </div>
      </div>

      <section className="">
        <div className="">
          <p className="font-bold text-3xl text-white my-20 text-center">
            Current bid : $45.00
          </p>
        </div>
        <div className="space-y-3">
          <Livestreamchat />
          <Livestreamchat />
          <Livestreamchat />
          <Livestreamchat />
        </div>

        <div>
          <input type="text" />
        </div>
      </section>
    </main>
  );
}
