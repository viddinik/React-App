import React, { useContext } from 'react'
import "./Cart.css"
import CartItems from './CartItems'
import { CartContext } from '../../contexts/CartProvider'
import OffCanvas from '../General/OffCanvas.jsx'

const Cart = () => {
  const { hideCartHandle, cartTotalPrice, clearCartList } = useContext(CartContext)
  return (
    <OffCanvas hideCartHandle={hideCartHandle}>
      <div className="cart">
        <div className="cart-header">
          <h2>Cart</h2>
          <a href="/" onClick={hideCartHandle}>X</a>
        </div>
        <CartItems />
        <div className="cart-total">
          <span>Total</span>
          <span>{cartTotalPrice} ₺</span>
        </div>
        <div className="action-buttons">
          <button className='order-button'>Pay</button>
          <button className='cart-clear' onClick={clearCartList}>Clear</button>
        </div>
      </div>
    </OffCanvas>
  )
}

export default Cart