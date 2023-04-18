import React from "react";
import { useEffect, useState } from "react";
import QtyInput from "./components/QtyInput";

const Cart = function (props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;

    for (let i = 0; i < props.cart.length; i++) {
      totalPrice += props.cart[i].qty * props.cart[i].price;
    }

    setTotal(totalPrice);
  });
  return (
    <div className="cartContainer">
      <CartTable
        cart={props.cart}
        removeFromCart={props.removeFromCart}
        updateQty={props.updateQty}
      ></CartTable>
      <div className="cartSummary">
        <h2>Summary</h2>
        <div className="discountContainer">
          <h3>Add discount Code</h3>
          <div>
            <input type="text" maxLength={10}></input>
            <button>Apply</button>
          </div>
        </div>
        <p>Subtotal: £{total}</p>
        <p><b>Order total: £{total}</b></p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

const CartTable = function (props) {
  const removeItem = function (e) {
    props.removeFromCart(parseInt(e.target.id));
  };
  return (
    <div className="cartTableContainer">
      <table className="cartTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => (
            <CartRow
              item={item}
              removeFromCart={props.removeFromCart}
              updateQtyArr={props.updateQty}
            ></CartRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CartRow = function ({ item, removeFromCart, updateQtyArr }) {
  const [qty, setqty] = useState(item.qty);

  const removeItem = function (e) {
    removeFromCart(parseInt(e.target.id));
  };

  const updateQty = function (e) {
    if (e.target.value.length > 2) {return}
    setqty(e.target.value);
    updateQtyArr(e.target.value, item.id);
  };

  return (
    <tr>
      <td>{item.title}</td>
      <td>£{item.price * qty}</td>
      <td>
        <QtyInput qty={qty} updateQty={updateQty}></QtyInput>
      </td>
      <td>
        <button onClick={removeItem} id={item.id}>
          x
        </button>
      </td>
    </tr>
  );
};