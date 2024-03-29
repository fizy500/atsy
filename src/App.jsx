import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MoreProductCard from "./Components/MoreProductCard";
import Auction from "./Pages/Auction";
import Checkout from "./Pages/Checkout";
import { Checkout2 } from "./Pages/Checkout2";
import Drop from "./Pages/drop";
import Homepage from "./Pages/Homepage";
import Livestream from "./Pages/Livestream";
import Product from "./Pages/Product";
import ProductDescription from "./Pages/ProductDescription";
import MarketPlace from "./Pages/MarketPlace";
import { ProductCard } from "./Components/ProductCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route  /> */}
        {/* <Route path='/marketplace' element={<MarketPlace />} /> */}
        <Route path='/marketplace' element={<MarketPlace />}>
          <Route path='productDetail' element={<ProductCard />} />
        </Route>
        <Route path='/auction' element={<Auction />} />
        <Route path='/drop' element={<ProductDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
