import React from "react";

const Item = function ({title, description, price, id, images, addToCart, item}) {

    const addItemToCart = function() {
        addToCart(item)
      }

    return (
        <div className="itemContainer">
            <img src={images[0]} className='itemImg'></img>
            <h3>{title}</h3>
            <p>£{price}</p>  
           <button onClick={addItemToCart}>Add to cart</button>
        </div>
    )
}

export default Item