import React from "react";

const QtyInput = function ({qty, updateQty }) {

    const preventMinus = (e) => {
      if (e.code === 'Minus') {
          e.preventDefault();
      }
  };
  
    return (
      <input
      type="number"
      value={qty}
      onChange={updateQty}
      onKeyDown={preventMinus}
      min="1"
      max="99"
      maxLength="2"
    ></input>
    )
  }

  export default QtyInput