import "./App.css";
import Nav from "./components/Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = function (
    { title, price, id, images, description },
    quantity
  ) {
    let newCart = cart;
    let itemInCart = false;
    newCart = newCart.map((item) => {
      if (item.id === id) {
        if (item.qty + quantity > 99) {
          item.qty = 99;
          itemInCart = true;
          return item;
        }

        item.qty = item.qty + quantity;
        itemInCart = true;
        return item;
      }
      return item;
    });
    if (!itemInCart) {
      newCart.push({ title, description, price, images, id, qty: quantity });
    }
    setCart(newCart);
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
    newCart = newCart.map((item) => {
      if (item.id === id) {
        item.qty = qty;
        return item;
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div className="App">
      <Nav cartAmount={cart.length}></Nav>
      <div className="mainContainer">
        <div className="mainSubContainer">
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
