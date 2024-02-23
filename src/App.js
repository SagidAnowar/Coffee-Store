import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { MusicProvider } from "./Context/musicContext";
import ProductList from "./Pages/Product-List/Product-List";
import ShopHomePage from "./Pages/Shop/ShopHomePage/ShopHomePage";
import Product from "./Components/Product/Product";
import DarkRoast from "./Pages/Shop/DarkRoast/DarkRoast";

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
          </Route>
        </Routes>
      </MusicProvider>
    </div>
  );
}

export default App;
