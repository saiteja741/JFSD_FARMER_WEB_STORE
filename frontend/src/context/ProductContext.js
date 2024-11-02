// src/context/ProductContext.js
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, isApproved: false }]);
  };

  const approveProduct = (productId) => {
    setProducts(
      products.map(product =>
        product.id === productId ? { ...product, isApproved: true } : product
      )
    );
  };

  const rejectProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, approveProduct, rejectProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
