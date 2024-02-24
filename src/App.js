import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { MusicProvider } from "./Context/musicContext";
import ProductList from "./Pages/Product-List/Product-List";
import ShopHomePage from "./Pages/Shop/ShopHomePage/ShopHomePage";
import Product from "./Components/Product/Product";
import DarkRoast from "./Pages/Shop/DarkRoast/DarkRoast";
import LightRoast from "./Pages/Shop/LightRoast/LightRoast";
import Espresso from "./Pages/Shop/Espresso/Espresso";
import Decaf from "./Pages/Shop/Decaf/Decaf";
import Cart from "./Components/Cart/Cart";
import About from "./Pages/About/About";
import LoginList from "./Pages/LoginList/LoginList";

function App() {
  return (
    <div className="App">
      <MusicProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="shop" element={<ProductList />}>
            <Route index element={<ShopHomePage />} />
            <Route path=":product" element={<Product />} />
            <Route path="Dark_Roast" element={<DarkRoast />} />
            <Route path="Light_Roast" element={<LightRoast />} />
            <Route path="Espresso" element={<Espresso />} />
            <Route path="Decaf" element={<Decaf />} />
            <Route path="Cart" element={<Cart />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginList />}></Route>
        </Routes>
      </MusicProvider>
    </div>
  );
}

export default App;
