import React from "react";
import Email from "./footer-assets/email.svg";
import Location from "./footer-assets/location.svg";
import FooterLogo from "./footer-assets/footer-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-3 lg:px-7 py-8">
      <div className="">
        <div className="flex flex-col lg:items-center  space-y-8 lg:border border-solid border-[#333333] py-5">
          <h2 className="font-normal  text-2xl text-[#333333] uppercase ">
            NewsLetter
          </h2>
          <p className="font-normal text-[#333333] text-xs ">
            SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
          </p>
          <form
            action=""
            className="space-y-8 lg:flex lg:space-x-5 items-center lg:space-y-0 "
          >
            <input
              type="email"
              required
              placeholder="Enter your email here"
              className="py-4 px-2 lg:pr-40 w-full border border-solid border-[#333333]  text-[#333333] uppercase text-left"
            />
            <button className="py-4 px-20 border border-solid border-[#333333] bg-[#272727] text-white">
              Subscribe
            </button>
          </form>
        </div>

        <div className="lg:grid grid-cols-4 place-items-center py-8">
          <img src={FooterLogo} alt="logo" className="hidden lg:block" />
          <nav className="hidden lg:block">
            <ul className="space-y-4">
              <li className="text-[#333333] text-2xl font-normal">Home</li>
              <li className="text-[#333333] text-2xl font-normal">
                Marketplace
              </li>
              <li className="text-[#333333] text-2xl font-normal">Auctions</li>
              <li className="text-[#333333] text-2xl font-normal">Drops</li>
            </ul>
          </nav>

          <nav className="hidden lg:block">
            <ul className="space-y-4">
              <li className="text-[#333333] text-2xl font-normal">Blog</li>
              <li className="text-[#333333] text-2xl font-normal">Wallets</li>
              <li className="text-[#333333] text-2xl font-normal">Rates</li>
              <li className="text-[#333333] text-2xl font-normal">High bids</li>
            </ul>
          </nav>

          <div className="space-y-5 lg:self-start">
            <p className="text-[#333333] font-light text-xs uppercase lg:hidden">
              Reach us
            </p>
            <div className="flex items-center space-x-5">
              <img src={Email} alt="email" />
              <a
                className="text-[#333333] font-light text-xs lg:text-2xl lg:font-normal"
                href="mailto:artsystudios@gmail.com"
              >
                artsystudios@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-5">
              <img src={Location} alt="location" />
              <address className="text-[#333333] font-light text-xs lg:text-2xl lg:font-normal">
                Lagos, Nigeria.
              </address>
            </div>
          </div>
        </div>

        <p className="text-center text-2xl text-[#333333] font-medium hidden lg:block">
          Artsystudios &copy; <span>{currentYear}</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
