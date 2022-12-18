import React from "react";
import { Navbar } from "../Components/Navbar";
// import { Slideshow } from "../Components/SlideShow";

import Arrow2 from "./Homepage-assets/arrow-black.svg";
import ArrowBlue from "./Homepage-assets/arrow-blue.svg";

import Dot from "./Homepage-assets/dot.svg";
import Blackdot from "./Homepage-assets/black-dot.svg";
import AnimationImage1 from "./Homepage-assets/animation-image1.png";
import AnimationImage1Desktop from "./Homepage-assets/animation-image1Desktop.png";
import Footer from "../Components/footer";
import FeaturedProducts from "../Components/FeaturedProducts";
export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className=" ">
        <div className=" flex flex-col justify-center items-center space-y-4">
          <h1 className="text-[#292929] font-semibold  text-4xl  text-center  leading-[48px] lg:leading-[125.36px] lg:font-semibold lg:text-[80px] py-8 px-3 lg:w-[70%]">
            Photography is poetry and beautiful untold stories
          </h1>
          <p className=" font-medium text-[#292929]  text-base lg:text-[28px] lg:w-[59%] lg:leading-[43.88px] text-center ">
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>
        {/* <Slideshow/> */}
        <div className="  space-y-3 px-3 lg:px-20">
          <h2 className="font-bold text-[#333333]  text-3xl text-left">
            Featured products
          </h2>
          <FeaturedProducts />
          <FeaturedProducts />
          <FeaturedProducts />
        </div>
        <div className="w-full  bg-cover h-[336px] back flex flex-col justify-center items-center py-5 my-10 ">
          <p className="self-start text-white font-medium  text-[40px] px-20 hidden lg:block">
            See Upcoming Auctions and Exhibitions
          </p>
          <div className="inside-div bg-gallery   w-[90%] h-[90%] bg-cover bg-no-repeat   flex flex-col justify-center space-y-4 items-baseline px-1  ">
            <div className="flex items-baseline space-x-7">
              <img src={Dot} alt="" />
              <h2 className="font-normal  text-xl text-white ">
                MONALISA REDEFINED IN STYLE.
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#E1E1E1] text-4xl font-normal">01</span>
              <p className="text-xs font-normal text-white">
                Start on : 08:00 GTS . Monday{" "}
              </p>
            </div>
            <p className=" text-xs text-white  pl-5">
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
            <div className=" self-end space-x-6 pr-2">
              <button className="font-normal text-sm text-white  border-b-2 border-solid border-white">
                See more
              </button>
              <button className="py-3 px-2 border border-solid border-white font-normal text-sm text-white rounded-lg ">
                Set a reminder
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 justify-between items-center border-y border-solid border-[#000000] py-5 px-4">
            <h2 className=" text-2xl font-medium text-[#292929]">
              Explore marketplace
            </h2>
            <div className="    flex justify-end">
              <button className="border border-solid border-[#000000]   rounded-[50%]">
                <img
                  src={Arrow2}
                  alt=""
                  className="h-[40px] w-40px p-1  fill-red-700  "
                />
              </button>
            </div>
          </div>
          {/* second */}
          <div className="grid grid-cols-2 justify-between items-center  border-b border-solid border-[#000000] py-5 px-4">
            <h2 className=" text-2xl font-medium text-[#292929]">
              Explore marketplace
            </h2>
            <div className="    flex justify-end">
              <button className="border border-solid border-[#000000]   rounded-[50%]  ">
                <img
                  src={Arrow2}
                  alt=""
                  className="h-[26.25px] w-[26.25px] p-1  "
                />
              </button>
            </div>
          </div>
        </div>
        {/* Animation */}

        <div className=" bg-[#E2E2E2] h-full  py-6 space-y-5 flex justify-center items-center my-20">
          <div className="relative  flex flex-col justify-between items-center lg:w-[90%]  lg:h-[950px]   ">
          <div className="flex space-x-2 ">
            <p className="font-semibold text-2xl lg:text-[55px] text-[#161616] pb-2  pl-1  w-auto ">
              TOP CREATORS OF THE WEEK
            </p>
            <div className="self-start inline-flex space-x-3 pl-10 lg:grid grid-rows-4 ">
              <button className="  text-[10px]  font-normal text-[#333333]">
                Editorials
              </button>
              <button className="inline-flex items-baseline space-x-1 text-[10px]  font-normal text-[#333333]">
                <img src={Blackdot} alt="" className=" lg:hidden" />
                <p>Fashion</p>
              </button>

              <button className="inline-flex items-center space-x-1 text-[10px]  font-normal text-[#333333]">
                <img src={Blackdot} alt="" className="  lg:hidden" />
                <p>Lifestyle</p>
              </button>

              <button className="text-[10px]  font-normal text-[#333333]">
                {" "}
              </button>
            </div>
          </div>

          <p className="text-[rgba(0,0,0,0.57)] lg:text-[32px] lg:leading-[41.6px] text-xs font-extralight text-center lg:text-left px-1 z-10">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
          <p className="font-bold  text-[64px] lg:text-[170px] text-[#161616] self-end px-2 line-through decoration-1 decoration-[black] ">
            1985
          </p>
          <img
            src={AnimationImage1}
            alt=""
            className="absolute right-[3.7rem] bottom-7 z-50 lg:hidden"
            />
            <img
            src={AnimationImage1Desktop}
            alt=""
            className="absolute right-[3.7rem] top-[11rem] z-50 hidden lg:block"
          />
          <p className="font-bold text-[32px] lg:text-[48px] text-[#333333] absolute bottom-[10rem] right-3 z-40 ">
            CIRCA
          </p>
        </div>
          
         </div>
      </main>
      <Footer />
    </>
  );
}
