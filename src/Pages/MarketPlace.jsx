import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import Search from "../Assets/smallSearch.svg";
import { ProductCard } from "../Components/ProductCard";
import Footer from "../Components/Footer";
import Setting from "../Assets/settingIcon.svg";
import Dropdown2 from "../Assets/dropdownDown.svg";
import { Navbar } from "../Components/Navbar";
import DropDown from "../Components/DropDown";

function MarketPlace() {
  const [search, setSearch] = useState("");
  const [categoryDropdown, setCategoryDropdown] = useState(true);
  const [priceDropdown, setPriceDropdown] = useState(true);
  const [artistDropdown, setArtistDropdown] = useState(true);
  const [collection, setCollection] = useState(true);

  const onChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  return (
    <>
      <Navbar />
      <main className='lg:flex justify-between px-8 py-5'>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='w-[25%] hidden lg:block px-4 space-y-20'>
          <div className='pr-8 '>
            <div className='flex bg-[#F4F2F2] rounded-[15px]'>
              <img src={Search} alt='' className='' />
              <input
                type='search'
                placeholder='Search'
                className='px-8 py-2 outline-none bg-inherit'
                onChange={onChange}
              />
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center'>
              <img src={Setting} alt='settingIcon' />
              <p className='font-medium text-[32px]'>Filter</p>
            </div>
            <hr className='bg-[#AFB091] h-[0.4rem]  rounded-lg' />
          </div>

          <div className='mt-8'>
            <div className='space-y-10'>
              <div onClick={() => setCategoryDropdown(false)}>
                <DropDown>By category</DropDown>
              </div>
              <div className={`block ${categoryDropdown ? "hidden" : "block"}`}>
                <form className='text-[#292929] font-normal text-[24px] space-y-4'>
                  <label htmlFor='checkbox1' className='flex items-center '>
                    <span className='mr-4'>
                      <input
                        type='checkbox'
                        id='checkbox1'
                        className='accent-[#D9D9D9] w-[26px] h-[26px]'
                      />
                    </span>
                    <span>Editorials</span>
                  </label>

                  <label htmlFor='checkbox2' className='flex items-center '>
                    <span className='mr-4'>
                      <input
                        type='checkbox'
                        id='checkbox2'
                        className='accent-[#D9D9D9] w-[26px] h-[26px]'
                      />
                    </span>
                    <span> Fashion</span>
                  </label>

                  <label htmlFor='checkbox3' className='flex items-center '>
                    <span className='mr-4'>
                      <input
                        type='checkbox'
                        id='checkbox3'
                        className='accent-[#D9D9D9] w-[26px] h-[26px]'
                      />
                    </span>
                    <span>Optics</span>
                  </label>

                  <label htmlFor='checkbox4' className='flex items-center '>
                    <span className='mr-4'>
                      <input
                        type='checkbox'
                        id='checkbox4'
                        className='accent-[#D9D9D9] w-[26px] h-[26px]'
                      />
                    </span>
                    <span>Art & Museum</span>
                  </label>

                  <label htmlFor='checkbox5' className='flex items-center'>
                    <span className='mr-4'>
                      <input
                        type='checkbox'
                        id='checkbox5'
                        className='accent-[#D9D9D9] w-[26px] h-[26px]'
                      />
                    </span>
                    <span>Nature</span>
                  </label>
                </form>
              </div>
            </div>
          </div>
          {/* Second DropDown */}
          <div className='mt-14 space-y-8'>
            <div onClick={() => setPriceDropdown(false)}>
              <DropDown>By price</DropDown>
            </div>
            <div className={`block ${priceDropdown ? "hidden" : "block"}`}>
              <div className='font-normal text-[#292929] text-[24px]'>
                $100.00 - $150.00
              </div>
              <div>
                <ReactSlider
                  className='horizontal-slider bg-slate-700'
                  thumbClassName='example-thumb bg-[#333333] w-[32px] h-[32px] rounded-full'
                  trackClassName='example-track bg-black'
                  defaultValue={[100, 150]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={10}
                />
              </div>
            </div>
          </div>
          {/* MarketPlace */}

          <div className='mt-14 space-y-8'>
            <div onClick={() => setArtistDropdown(false)}>
              <DropDown>By artist</DropDown>
            </div>
            <div className='font-normal text-[#292929] text-[24px]'>
              <p className='border-b-2 border-[#292929] w-fit'> All</p>
            </div>
            <div className='font-normal text-[#292929] text-[24px] space-y-5'>
              <button>Below $100.00</button> <br />
              <button>$100.00 - $150.00</button>
              <button>$150.00 - $200.00</button>
              <button>Above $200.00</button>
            </div>
          </div>

          <div>
            <div onClick={() => setCollection(false)}>
              <DropDown>Collection year</DropDown>
            </div>
          </div>
        </div>
        <div className='lg:w-[75%] space space-y-4'>
          <div className='px-10'>
            <div className='bg-[#FFFFFF] rounded-[15px] result-range py-3 px-2 flex justify-between items-center'>
              <p className='font-normal text-2xl'>See 1-6 of 15 results</p>
              <div className='b border-2 border-solid border-black rounded-[15px] '>
                <div className='flex justify-between '>
                  <p className=' font-medium text-[24px] px-4 py-2'>Sort by</p>
                  <img src={Dropdown2} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:grid grid-cols-3 lg:gap-x-4 lg:gap-y-6'>
            <Link to='productDetail'>
              <ProductCard />
            </Link>
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
        {/* <Outlet /> */}
      </main>
      <Footer />
    </>
  );
}

export default MarketPlace;
