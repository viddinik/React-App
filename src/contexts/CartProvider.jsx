import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);


  useEffect(() => {
    calculateTotal();
  }, [cartList]);



  const clearCartList = () => {
    setCartList([]);
  }

  const showCartHandle = () => {
    setCartIsShow(true);
  }
  const hideCartHandle = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  }

  const addToCart = (product) => {
    const isThereProduct = cartList.find(item => item.id === product.id);
    if (isThereProduct) {
      const newCartList = cartList.map(item => item.id === product.id ? { ...item, amount: item.amount + 1 } : item)
      setCartList(newCartList);
    } else {
      setCartList([...cartList, { ...product, amount: 1 }]);
    }

  }
  const calculateTotal = () => {
    const total = cartList.reduce((accumulator, current) => {
      return accumulator + (current.price * current.amount)
    }, 0)
    setCartTotalPrice(total);
  }
  const removeItemFromCart = (product) => {
    const removeAfterCart = cartList.filter(item => item.id !== product.id);
    setCartList(removeAfterCart)
  }
  
  const values = {
    cartIsShow,
    cartList,
    cartTotalPrice,
    setCartIsShow,
    hideCartHandle,
    showCartHandle,
    addToCart,
    clearCartList,
    removeItemFromCart
  }
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }