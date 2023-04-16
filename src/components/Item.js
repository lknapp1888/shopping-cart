import React from "react";
import QtyInput from "./QtyInput";
import { useState } from "react";

const Item = function ({title, description, price, id, images, addToCart, item}) {
    const [qty, setqty] = useState(1);

    const updateQty = function (e) {
        if (e.target.value.length > 2) {return}
        setqty(e.target.value);
    }
    const addItemToCart = function() {
        addToCart(item, parseInt(qty))
      }

    return (
        <div className="itemContainer">
            <img src={images[0]} className='itemImg'></img>
            <h3>{title}</h3>
            <p>£{price}</p>  
           <button onClick={addItemToCart}>Add to cart</button>
           <QtyInput qty={qty} updateQty={updateQty}></QtyInput>
        </div>
    )
}

export default Item