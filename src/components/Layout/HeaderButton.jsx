import React, { useContext } from "react";
import "./HeaderButton.css";
import { CartContext } from "../../contexts/CartProvider";

const HeaderButton = () => {
  const { showCartHandle, cartList } = useContext(CartContext);
  const itemAmount = cartList.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0)
  return (
    <button className="button" onClick={showCartHandle}>
      <span className="icon">
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span className="btn-text">Cart</span>
      <span className="badge">{itemAmount}</span>
    </button>
  );
};

export default HeaderButton;