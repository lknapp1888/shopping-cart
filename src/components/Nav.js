import React from "react";
import { Link } from "react-router-dom";

const Nav = function (props) {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart ({props.cartAmount})</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
