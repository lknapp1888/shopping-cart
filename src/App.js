import "./App.css";
import Nav from "./components/Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = function ({ title, price, id, images, description }) {
    let newCart = cart;
    newCart.push({ title, description, price, images, id, qty: 1 });
    setCart(newCart);
    console.log(newCart);
    // add qty feature for duplicates
  };

  const removeFromCart = function (id) {
    let newCart = cart;
    newCart = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const updateQty = function (qty, id) {
    let newCart = cart;
    console.log(qty)
    console.log(id)
    newCart = newCart.map(item => {
      if (item.id === id) {
        item.qty = qty;
        return item;
      }
      return item;
    })
    setCart(newCart)
  }

  return (
    <div className="App">
      <Nav></Nav>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQty={updateQty}
              />
            }
          />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
