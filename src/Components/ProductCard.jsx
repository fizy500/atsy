import React from "react";
import Product1 from "../Assets/product1.png";

export function ProductCard() {
  return (
    <div className="flex justify-center items-center  w-full px-3 ">
      <div className="lg:rounded-[15px]  lg:bg-white productcard  p-4">
        <img src={Product1} alt="" className="rounded-lg " />
        <div className="flex justify-between font-medium text-base text-[#333333]  py-3 w-full lg:flex-col lg:space-y-6 ">
          <p className="font-medium lg:font-normal text-base lg:text-[22px] ">BOOLEAN EGYPTIAN</p>
          <p className="font-medium lg:font-bold text-base lg:text-[28px]">$21.00</p>
        </div>
      </div>
    </div>
  );
}
