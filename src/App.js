import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { MusicProvider } from "./Context/musicContext";

function App() {
  return (
    <div className="App">
      <MusicProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MusicProvider>
    </div>
  );
}

export default App;
