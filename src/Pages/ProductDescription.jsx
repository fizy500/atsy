import React from "react";
import Product from "./ProductDescription-assets/product-checkout.png";
import ProductDesktop from "./ProductDescription-assets/productDesktop.png";
import Diamond from "./ProductDescription-assets/diamond.png";
import Like from "./ProductDescription-assets/like.svg";

export default function ProductDescription() {
  return (
    <main className="mt-10">
      <div className="flex justify-center items-center">
        <div className="lg:flex justify-center lg:border border-solid border-[#333333] lg:w-[80%]">
          <div className="flex flex-col justify-center items-center lg:border-r border-solid border-[#333333] lg:pr-4 lg:pt-4">
            <img src={Product} alt="" />
            <div className="flex justify-between font-medium text-base text-[#333333]  py-3 w-full">
              <p className=" ">PHILOMENA ‘22</p>
              <p>$21.00</p>
            </div>
          </div>

          <div className="lg:px-7 space-y-2">
            <div className="hidden  border-b border-solid border-[#333333] lg:grid grid-cols-2  items-baseline bg-red-600 p-4">
              <h2 className="font-bold text-[46px] text-[#333333]">
                Boolean Egyptian
              </h2>
              <div className="flex items-center">
                
                              <img src={Diamond} alt="" className="" />
                              <p className=" font-medium text-[40px] text-[#333333]">0.09</p>
              </div>
            </div>
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

            <div>
              <option value="">fffffff</option>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
