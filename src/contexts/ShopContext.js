"use client";

import { useState, useEffect, useContext, createContext } from "react";
const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    console.log(cart)
  },[cart])

 const handleAddToCart = () => {
    // setCart('')
 }

  const cartQty = () => cart.length

  return (
    <ShopContext.Provider
      value={{
        handleAddToCart,
        cartQty
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

export default ShopContext;
