import React from "react";

export function Form() {
  return (
    <form action="" className="px-3">
      <div className="flex flex-col justify-center">
        <label htmlFor="email" className="text-[#888888] text-lg font-normal">
          Your email
        </label>
        <input
          type="email"
          name="email"
          required
          className="border  border-solid  border-[#747474] rounded-[10px] py-3 px-4 bg-[#F2F2F2]"
        />
        <div className="flex  items-baseline space-x-2">
          <input
            type="checkbox"
            required
            className="bg-[#F2F2F2] border-none"
          />
          <span className="text-[13px] text-[#747474] ">
            Get updates about new drops & exclusive offers
          </span>
        </div>

        <label htmlFor="cars" className="text-[#888888] text-lg font-normal">
          Choose a wallet
        </label>
        <select
          name="cars"
          id="cars"
          className="border  border-solid  border-[#747474] rounded-[10px] py-3 px-4 bg-[#F2F2F2]"
        >
          <option value="volvo"></option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label
          htmlFor="city"
          className="text-[#888888] text-lg font-normal mt-3"
        >
          City
        </label>
        <select
          name="city"
          id="city"
          className="border  border-solid  border-[#747474] rounded-[10px] py-3 px-4 bg-[#F2F2F2]"
        >
          <option value="volvo"></option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label
          htmlFor="city"
          className="text-[#888888] text-lg font-normal mt-3"
        >
          Country
        </label>
        <select
          name="country  "
          id="country  "
          className="border  border-solid  border-[#747474] rounded-[10px] py-3 px-4 bg-[#F2F2F2]"
        >
          <option value="volvo"></option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label
          htmlFor="postalcode"
          className="text-[#888888] text-lg font-normal mt-3"
        >
          Postal code
        </label>
        <input
          type="text"
          name="postalcode"
          required
          className="border  border-solid  border-[#747474] rounded-[10px] py-3 px-4 bg-[#F2F2F2]"
        />

        <label
          htmlFor="email"
          className="text-[#888888] text-lg font-normal mt-3"
        >
          Phone number
        </label>
        <input
          type="phone"
          name="phonenumber"
          required
          className="border  border-solid  border-[#747474] rounded-[10px] py-3 px-4 bg-[#F2F2F2]"
        />

        <button className="bg-[#3341C1] py-[16px]  text-white text-[17.5px] rounded-[4px] w-[70%] mt-3 self-center">
          Proceed to payment
        </button>
      </div>
    </form>
  );
}
