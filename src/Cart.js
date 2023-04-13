import React from "react";

const Cart = function (props) {
  return (
    <div className="cartContainer">
        <CartTable></CartTable>
      <div className="cartSummary">
        <h2>Summary</h2>
        <div className="discountContainer">
            <h3>Add discount Code</h3>
            <div>
                <input type="text"></input>
                <button>Apply</button>
            </div>
        </div>
        <p>Subtotal: 00</p>
        <p>Order total: 00</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

const CartTable = function (props) {
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
    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>
    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>    <tr>
      <td>Product 1</td>
      <td>$10.00</td>
      <td>2</td>
      <td>x</td>
    </tr>
  </tbody>
</table>
    )
}
