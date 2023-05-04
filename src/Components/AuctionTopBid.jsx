import React from "react";
import Bid from "../Assets/bid.png";
import LikeRed from "../Assets/like-red.svg";

export default function AuctionTopBid() {
  return (
    <div className=''>
      <div className='px-2 lg:px-0 py-4 shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-[15px] flex flex-col justify-center mb-4 '>
        <div className='self-end pb-1 lg:m-3 border border-solid border-[#333333] rounded-[50%] mb-1 flex justify-center items-center'>
          <img src={LikeRed} alt='' className='p-1 w-[23px] h-[19px]' />
        </div>
        <img src={Bid} alt='' />
        <div className='flex justify-between text-[#333333] font-bold text-xl'>
          <p>Out of the box</p>
          <p className='block lg:hidden'>0.57 ETH</p>
        </div>
      </div>
      <div>
        <div className='space-y-8'>
          <div className='w-fit text-lg flex justify-between items-baseline px-3'>
            <p className=' text-[#616161] font-medium'>
              Creator <span className='text-[#333333]'>:</span>
            </p>
            <p className='font-bold  text-[#006CA2] '>Jacob Banks</p>
          </div>

          <div className=' w-fit text-lg flex justify-between px-3 '>
            <p className=' text-[#616161] font-medium'>
              Date<span className='text-[#333333]'>:</span>
            </p>
            <p className='font-bold  text-[#333333] '>12/08/22</p>
          </div>
          <div className="hidden lg:block">
            <div className=' w-fit text-lg flex justify-between px-3 '>
              <p className=' text-[#616161] font-medium'>
                Highest bid<span className='text-[#333333]'>:</span>
              </p>
              <p className='font-bold  text-[#333333] '> 0.57 ETH</p>
            </div>
          </div>

          <div className='bg-[#F6F4F4] rounded-[10px] flex justify-between items-center  w-full py-2 px-4  '>
            <div className='space-y-5 '>
              <p className='font-bold text-lg text-[#616161]'>Current bid</p>
              <p className='text-xl font-bold text-[#333333]'>0.987 ETH</p>
            </div>
            <div>
              <button className='bg-[#3341C1] text-white px-[44px] py-[12px] rounded-[2.34px]'>
                Place bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
