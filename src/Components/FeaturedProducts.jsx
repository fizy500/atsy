import React from "react";
import Arrow from "./FeaturedProducts-assets/arrow.png";
import ArrowBlack from "./FeaturedProducts-assets/arrow-black.svg";
import Contributor1 from "./FeaturedProducts-assets/contributor1.png";
import Contributor2 from "./FeaturedProducts-assets/contributor2.png";
import Contributor3 from "./FeaturedProducts-assets/contributor3.png";
import Contributor4 from "./FeaturedProducts-assets/contributor4.png";
import Contributor5 from "./FeaturedProducts-assets/contributor5.png";

export default function FeaturedProducts() {
  return (
    <div className=" lg:grid grid-cols-2 g    lg:border-t-2 border-[#333333] border-solid lg:space-x-5  py-4 space-y-4">
      {/* <img src={Lady} alt="" /> */}
      <div className="bg-Egypt lg:bg-EgyptDesktop w-full h-[255.42px] lg:h-[380px]  bg-contain bg-no-repeat bg-center flex flex-col justify-between items-center py-8 order-2">
        <h2 className="font-semibold  text-3xl  text-white lg:hidden">
          The Boolean Egyptian
        </h2>
        <div className="self-end mr-4 lg:hidden ">
          <button className="border border-solid border-white rounded-[50%]  ">
            <img src={Arrow} alt="" className="h-[40px] w-[40px] p-1 " />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:pb-7">
        <h2 className="font-bold text-[40px] text-[#333333] hidden lg:block">
          The Boolean Egyptian
        </h2>
        <p className="font-normal text-base lg:text-2xl text-[#616161] py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </p>
        <div className="flex">
          <div className="grid grid-cols-2 lg:grid-cols-3 space-x-9 justify-center  ">
            <div className=" relative w-full h-full ">
              <img src={Contributor1} alt="" className="absolute " />
              <img src={Contributor2} alt="" className="absolute left-8" />
              <img src={Contributor3} alt="" className="absolute left-16" />
              <img src={Contributor4} alt="" className="absolute left-[6rem]" />
              <img src={Contributor5} alt="" className="absolute left-[8rem]" />
            </div>
            <div className=" py-3">
              <p className=" font-medium  text-base text-[#000000] ">
                <span className="">64 </span>
                major creators
              </p>
            </div>
            <div className="hidden lg:block">
              <button className="border border-solid border-[#333333] rounded-[50%]  ">
                <img src={ArrowBlack} alt="" className="h-[40px] w-[40px] p-1 " />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[0.01rem] w-[50%] bg-[#000000] lg:hidden " />
    </div>
  );
}
