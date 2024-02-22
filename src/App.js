import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { MusicProvider } from "./Context/musicContext";
import ProductList from "./Pages/Product-List/Product-List";
import ShopHomePage from "./Pages/Shop/ShopHomePage/ShopHomePage";

function App() {
  return (
    <div className="App">
      <MusicProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="shop" element={<ProductList />}>
            <Route index element={<ShopHomePage />} />
          </Route>
        </Routes>
      </MusicProvider>
    </div>
  );
}

export default App;
