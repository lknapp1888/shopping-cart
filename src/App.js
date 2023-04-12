import "./App.css";
import Nav from "./components/Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
