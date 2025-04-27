import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../../contexts/CartProvider'

const CartItems = () => {
  const { cartList } = useContext(CartContext)
  return (
    <div className='cart-items'>
      {
        cartList.map(item => <CartItem key={item.id} item={item} />)
      }
    </div>
  )
}

export default CartItems