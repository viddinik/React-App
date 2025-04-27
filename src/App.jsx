import Header from './components/Layout/Header'
import Products from './components/Product/Products'
import Slider from './components/Slider/Slider'
import Cart from './components/Cart/Cart'
import './App.css'
import { useContext } from 'react'
import { CartContext } from './contexts/CartProvider'

function App() {

  const {cartIsShow} = useContext(CartContext);

  return (
    <>
    {
      cartIsShow && <Cart />
    }
      <Header />
      <Slider />
      <Products />
    </>
  )
}

export default App
