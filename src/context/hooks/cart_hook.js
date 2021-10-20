import React, { useContext, useState, createContext } from "react";

const CartContext = createContext({});

function useCart() {
  const context = useContext(CartContext);
  return context;
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { useCart, CartProvider };
