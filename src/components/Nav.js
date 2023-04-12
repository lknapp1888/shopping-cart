import React from "react";
import { Link } from "react-router-dom";

const Nav = function (props) {
  return (
    <nav>
      <p>Placeholder name/logo</p>
      <input type="text" placeholder="Search (not functioning"></input>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
