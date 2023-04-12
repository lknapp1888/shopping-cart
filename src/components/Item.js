import React from "react";

const Item = function ({title, description, price, id, images}) {


    return (
        <div className="itemContainer">
            <img src={images[0]}></img>
            <h3>{title}</h3>
            <p>£{price}</p>
            
           <button>Add to cart</button>
        </div>
    )
}

export default Item