import React from "react";
import Eyoo from "../Assets/Eyoo.png";
export default function DropComponent() {
  return (
    <div className="lg:grid grid-cols-2 justify-between lg:space-x-4">
      <div className="space-y-4 relative px-1">
        <img src={Eyoo} alt="" className="w-full h-full " />
        <div className="bg-[rgba(245,244,244,0.24)] px-6 py-2 rounded-lg font-normal  text-white w-[93%] border border-solid border-white absolute top-[6rem] left-[0.87rem] z-50">
          <div className="flex justify-between items-end w-full">
            <div>
              {" "}
              <span className=" text-base">Time remaining</span>
              <p className=" text-[22px]">06 hrs : 45 min : 22 s</p>
            </div>
            <div>
              {" "}
              <button className="bg-[#4693ED] text-white  text-base  font-medium  rounded-[15px] px-6 py-1   hidden lg:block">
                Join
              </button>
            </div>
          </div>
        </div>
        <p className="bg-[#4693ED] text-white text-xs  font-medium  rounded-[5px] px-8 py-2 w-fit absolute top-[0.19rem] right-[0.87rem] lg:hidden">
          UPCOMING
        </p>
      </div>
      <div className="px-3 py-4 flex flex-col justify-between">
        <p className="bg-[#4693ED] text-white text-xs  font-medium  rounded-[5px] px-8 py-2 w-fit  hidden lg:block">
          UPCOMING
        </p>
        <p className="text text-base text-black font-normal">
          November 21 at 11 am WAT
        </p>
        <h2 className="text-[24px] lg:text-[36px] text-black font-medium">
          Eyo : Eko For Show
        </h2>
        <p className="font-normal text-[15px] lg:text-xl text-[#616161] lg:w-[58%]">
          Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae
          tempus. Sed nunc tempus aliquet lectus ut vulputate.
        </p>
        <p className="font-medium text-xl">
          Creator : <span className="text-[#006CA2]">Aliya Minat</span>{" "}
        </p>
        <div>
          {" "}
          <button className="font-normal text-base text-[#006CA2] border-b border-solid border-[#006CA2] ">
            Get notified
          </button>
        </div>
      </div>
    </div>
  );
}
