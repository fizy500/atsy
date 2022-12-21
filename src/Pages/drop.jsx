import React from "react";
import DropComponent from "../Components/DropComponent";
import Footer from "../Components/Footer";

export default function Drop() {
  return (
    <>
      <main className="flex flex-col justify-center items-center space-y-10  px-4 py-10 my-3 ">
        <h2 className="font-bold text-3xl text-black">Upcoming drops</h2>
        <p className=" font-normal  text-lg text-[#616161] text-center">
          You may turn on notifications so that no drop will miss you.
        </p>
        <button className="text-black font-medium text-[22.46px] border border-solid border-black rounded-[6.24px] px-10 py-2">
          Notify me
        </button>
        <section className="flex flex-col space-y-20">
          <DropComponent />
          <DropComponent />
          <DropComponent />
          <DropComponent />
          <DropComponent />
        </section>
        <div className="hidden lg:block ">
          <button className="text-black font-medium text-[22.46px] border border-solid border-black rounded-[6.24px] px-10 py-2 ">
            See more
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
