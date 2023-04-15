import React from "react";
import { useEffect, useState } from "react";

const Cart = function (props) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let totalPrice = 0;

    for (let i = 0; i < props.cart.length; i ++) {
      totalPrice += (props.cart[i].qty * props.cart[i].price)
    }

    setTotal(totalPrice)
  })
  return (
    <div className="cartContainer">
        <CartTable cart={props.cart} removeFromCart={props.removeFromCart}></CartTable>
      <div className="cartSummary">
        <h2>Summary</h2>
        <div className="discountContainer">
            <h3>Add discount Code</h3>
            <div>
                <input type="text"></input>
                <button>Apply</button>
            </div>
        </div>
        <p>Subtotal: {total}</p>
        <p>Order total: {total}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

const CartTable = function (props) {

  const removeItem = function(e) {
    props.removeFromCart(parseInt(e.target.id))
  }
    return (
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
{    props.cart.map((item) => (
          <tr>
          <td>{item.title}</td>
          <td>{item.price * item.qty}</td>
          <td>{item.qty}</td>
          <td><button onClick={removeItem} id={item.id}>x</button></td>
        </tr>
    ))}
  </tbody>
</table>
    )
}
