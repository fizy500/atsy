import React from "react";
import Atsy from "../Components/Navbar-assets/ARTSY.png";
import Search from "../Components/Navbar-assets/search.png";
import Notification from "../Components/Navbar-assets/notification.png";
import Basket from "../Components/Navbar-assets/basket.png";

export function Navbar() {
  return (
    <header className="top-0 sticky z-40">
      <nav className="flex justify-around items-center py-10">
        <ul>
          <li className="">
            <img src={Atsy} alt="logo" className="" />
          </li>
        </ul>
        <ul className="font-normal text-2xl text-[#292929] space-x-8  ">
          <li className="inline-block">
            <a href="#">Home</a>{" "}
          </li>
          <li className="inline-block">
            {" "}
            <a href="#">Marketplace</a>{" "}
          </li>
          <li className="inline-block">
            {" "}
            <a href="#">Auctions</a>{" "}
          </li>
          <li className="inline-block">
            <a href="#">Drop</a>{" "}
          </li>
        </ul>

        <ul className="space-x-6">
          <img src={Search} alt="" className="inline-block" />
          <img src={Basket} alt="" className="inline-block" />
          <img src={Notification} alt="" className="inline-block" />
        </ul>
      </nav>
    </header>
  );
}
