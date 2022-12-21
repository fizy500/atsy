import React from "react";
import Search from "../Assets/search.png";
import Setting from "../Assets/setting.svg";
import { ProductCard } from "../Components/ProductCard";

export default function Product() {
  return (
    <main className="  lg:px-14 my-5">
      <div className="grid grid-cols-4 justify-between px-2">
        <form action="" className="col-span-1 ">
          <div className="flex space-x-3 px-2 bg-[#F4F2F2] rounded-[15px] py-3 ">
            <img src={Search} alt="" />
            <input type="text" placeholder="Search" className="bg-[inherit]" />
          </div>
        </form>
        <div className="bg-yellow-500 col-span-3 px-20">
          <p>See 1-6 of 15 results</p>

        </div>
      </div>
      <div className="lg:grid grid-cols-4 ">
        <section className="col-span-1  sticky left-0 px-3">
          <div className="py-4">
            <button className="flex space-x-4 items-center py-3">
              <img src={Setting} alt="" />
              <span className="text-[32px] text-black font-medium">Filter</span>
            </button>
            <hr className="h-2 w-full bg-[#AFB091] rounded-[10px]" />
          </div>
        </section>
        <div className="lg:col-span-3 lg:grid grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
