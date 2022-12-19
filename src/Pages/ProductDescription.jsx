import React from "react";
import Product from "../Assets/ProductDescription-assets/product-checkout.png";
import ProductDesktop from "../Assets/ProductDescription-assets/productDesktop.png";
import Diamond from "../Assets/ProductDescription-assets/diamond.png";
import Like from "../Assets/ProductDescription-assets/like.svg";
import NextForward from "../Assets/ProductDescription-assets/next-forward.svg";
import NextBackward from "../Assets/ProductDescription-assets/next-backward.svg";
import MoreProductCard from "../Components/MoreProductCard";

export default function ProductDescription() {
  return (
    <main className="my-10">
      <div className="flex flex-col justify-center items-center">
        <div className="lg:flex justify-center lg:border border-solid border-[#333333] ">
          <div className="flex flex-col justify-center items-center lg:border-r border-solid border-[#333333] p-4 ">
            <img src={ProductDesktop} alt="" />
            <div className="flex justify-between font-medium text-base text-[#333333]  py-3 w-full lg:hidden">
              <p className=" ">PHILOMENA ‘22</p>
              <p>$21.00</p>
            </div>
          </div>

          <div className=" space-y-2 ">
            <div className="hidden  border-b border-solid border-[#333333] lg:flex space-x-3 w-full     ">
              <h2 className="font-bold text-[40px] text-[#333333]  py-4 px-2 ">
                Boolean Egyptian
              </h2>
              <div className="flex items-center space-x-3 py-4 px-4 ">
                <img src={Diamond} alt="" className="" />
                <p className=" font-medium text-[40px] text-[#333333]">0.09</p>
              </div>
            </div>
            <div className="p-3 space-y-4">
              <p className=" text-base text-black font-medium">
                Creator : <span className="text-[#006CA2]">Ali Dawa</span>
              </p>
              <p className="text-base font-medium  text-[#616161]">
                Made in Italy
              </p>
              <p className=" text-base text-[#616161] font-medium">
                Total views :<span className="">1.7</span> K
              </p>
              <div className="flex font-medium text-[#333333] text-3xl space-x-4">
                <button>-</button>
                <p className="">7</p>
                <button>+</button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="py-4 px-14 bg-[#3341C1] rounded-[4px] text-white">
                  Add to cart
                </button>
                <button className="px-4 py-4 border border-solid border-[#161616] rounded-[4px]">
                  <img src={Like} alt="" />
                </button>
              </div>
            </div>
            <hr className="h-[2px] w-full bg-[#333333]  hidden lg:block " />
          </div>
        </div>
        <div className="w-full flex justify-center items-center  ">
          <div className="bg-white py-4 px-2 flex justify-between items-center   lg:shadow-2xl shadow-[rgba(0,0,0,0.08)]  rounded-[15px]  my-8 w-[95%]">
            <p className="inline-flex lg:space-x-1 text-2xl text-[#292929] lg:text-[32px] font-medium lg:text-[#333333] ">
              <span className="hidden lg:block"> Explore </span>
              <span className="lg:lowercase"> M</span> ore from this collection
            </p>

            <div className="  space-x-3 hidden lg:flex">
              <button className="border border-solid border-black rounded-[50%]  p-2">
                <img
                  src={NextBackward}
                  alt=""
                  className="h-[40px] w-[40px] p-1 "
                />
              </button>
              <button className="border border-solid border-black rounded-[50%]  flex justify-center  p-2 ">
                <img
                  src={NextForward}
                  alt=""
                  className="h-[40px] w-[40px] p-1 "
                />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex ">
          <MoreProductCard />
          <MoreProductCard />
          <MoreProductCard />
        </div>
      </div>
    </main>
  );
}
