import "./App.css";
import Nav from "./components/Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([])

  const addToCart = function ({title, price, id, images, description}) {
    let newCart = cart;
    newCart.push({title, description, price, images, id, qty: 1})
    setCart(newCart)
    console.log(newCart)
  }
  return (
    <div className="App">
      <Nav></Nav>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
