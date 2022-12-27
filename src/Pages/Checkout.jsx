import React from "react";
import CheckoutComponent from "../Components/CheckoutComponent";

export default function Checkout() {
  return (
    <main className="flex flex-col  items-center space-y-5 my-4 px-3">
      <div className="w-fit">
        <div className="bg-[#3A3A3A]  rounded-[40px] text-lg font-medium py-2 px-10 space-x-3 text-lg">
          <a
            href="#"
            className="rounded-[27px] bg-white px-5 py-1  text-center  "
          >
            Shop{" "}
          </a>
          <a href="#" className="text-white">
            Scheduled
          </a>
        </div>
      </div>
      <section className=" space-y-10 w-full">
        <CheckoutComponent />
        <CheckoutComponent />
        <CheckoutComponent />
        <CheckoutComponent />
      </section>
      <section className="w-full space-y-4">
        <div className="flex justify-between  text-xl">
          <p className="text-[#888888] font-normal">Products in cart : </p>
          <p className="text-[#292929] font-medium">4 items</p>
        </div>
        {/* Second */}
        <div className="flex justify-between  text-xl">
          <p className="text-[#888888] font-normal">Shipping :</p>
          <p className="text-[#292929] font-medium">$2.50</p>
        </div>

        {/* Third*/}

        <div className="flex justify-between  text-xl">
          <p className="text-[#888888] font-normal">Total :</p>
          <p className="text-[#292929] font-medium">$114.00</p>
        </div>

        {/* Grand Total */}

        <div className="flex justify-between  text-xl py-5 border-t-2 border-dotted border-[#616161]">
          <p className="text-[#888888] font-normal">Grand total:</p>
          <p className="text-[#292929] font-medium">$116.50</p>
        </div>
      </section>
      <button className="bg-[#3341C1] py-[16px]  text-white text-[17.5px] rounded-[4px] w-[70%] mt-3 self-center">
        Proceed to checkout
      </button>

      <button className="font-normal text-base text-[#006CA2] border-b border-solid border-[#006CA2] ">
        Continue shopping
      </button>
    </main>
  );
}
