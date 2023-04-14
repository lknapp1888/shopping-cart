import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import { Link } from "react-router-dom";

const Shop = function (props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async function () {
    const list = await fetch("https://api.escuelajs.co/api/v1/products");
    const itemList = await list.json();
    setItems(itemList);
  };
  return (
    <div className="shopContainer">
      {items.map((item) => (
        <Item 
        item={item}
        title={item.title} 
        description={item.description}
        price={item.price}
        key={item.id}
        images={item.images}
        addToCart={props.addToCart}
        ></Item>
      ))}
    </div>
  );
};

export default Shop;
