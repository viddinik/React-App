import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductProvider } from './contexts/ProductProvider.jsx'
import { CartProvider } from './contexts/CartProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </StrictMode>,
)