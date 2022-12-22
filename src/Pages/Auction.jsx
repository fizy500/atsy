import React from "react";
import ArrowGray from "../Assets/arrow-gray.svg";
import AuctionTopBid from "../Components/AuctionTopBid";
import AuctionVerticalScroll from "../Components/AuctionVerticalScroll";
export default function Auction() {
  return (
    <main className="px-2 grid grid-rows-2 gap-y-5 justify-center items-center">
      <p className=" font-medium  text-xl text-[#333333]">
        Here’s an overview of products actively on auction, explore!
      </p>
      <div className="flex  overflow-x-scroll">
        <AuctionVerticalScroll />
      </div>
      <p className=" font-medium  text-xl text-[#333333]">
        Top bids from popular creators
      </p>
      <section className=" lg:grid grid-cols-2 gap-x-10 ">
        <AuctionTopBid />
        <AuctionTopBid />
        <AuctionTopBid />
        <AuctionTopBid />
        <AuctionTopBid />
        <AuctionTopBid />
      </section>

      <div className=" self-center">
        <div className="flex items-center space-x-3 ">
          <p className="text-lg font-normal text-black">Load more</p>{" "}
          <button className="">
            <img src={ArrowGray} alt="" />
          </button>
        </div>
      </div>
    </main>
  );
}
