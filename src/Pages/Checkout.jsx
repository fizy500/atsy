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
              <CheckoutComponent/>
          </section>

      
    </main>
  );
}
