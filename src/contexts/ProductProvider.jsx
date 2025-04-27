import React, { createContext, useState } from 'react'
import products from '../productData';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState(products)
    
    const values = {
        productList,
        setProductList
    }
    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider, ProductContext } 