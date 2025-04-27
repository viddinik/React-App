import React, { useContext } from 'react'
import "./CartItem.css";
import { CartContext } from '../../contexts/CartProvider';

const CartItem = ({ item }) => {
    const { removeItemFromCart } = useContext(CartContext);

    const removeHandle = (e) => {
        e.preventDefault();
        removeItemFromCart(item)
    }
    return (
        <div className='cart-item'>
            <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-text">
                    <strong>{item.name}</strong>
                    <div>
                        <span>₺ {item.price} X </span>
                        <span>{item.amount}</span>
                    </div>
                </div>
                <a href="/" className='cart-item-remove' onClick={removeHandle}>x</a>
            </div>
        </div>
    )
}

export default CartItem