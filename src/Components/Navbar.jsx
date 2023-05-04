import { Link } from "react-router-dom";
import Atsy from "../Assets/ARTSY.png";
import Search from "../Assets/search.png";
import Notification from "../Assets/notification.png";
import Basket from "../Assets/basket.png";
import Homepage from "../Pages/Homepage";

export function Navbar() {
  return (
    <header className='top-0 sticky z-40'>
      <nav className='flex justify-around items-center py-10'>
        <ul>
          <li className=''>
            <img src={Atsy} alt='logo' className='' />
          </li>
        </ul>
        <ul className='font-normal text-2xl text-[#292929] space-x-8  '>
          <li className='inline-block'>
            <Link to="/">Home</Link>
          </li>
          <li className='inline-block'>
          <Link to="/marketplace">Marketplace</Link>
          </li>
          <li className='inline-block'>
           <Link to="/auction">Auctions</Link>
          </li>
          <li className='inline-block'>
            <Link to="/drop">Drop</Link>
          </li>
        </ul>

        <ul className='space-x-6'>
          <img src={Search} alt='' className='inline-block' />
          <img src={Basket} alt='' className='inline-block' />
          <img src={Notification} alt='' className='inline-block' />
        </ul>
      </nav>
    </header>
  );
}
