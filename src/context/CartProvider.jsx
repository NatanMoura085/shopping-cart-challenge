import { createContext, useCallback, useState } from "react";
export const CartContext = createContext();
export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  console.log(cartItems);
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ addItemToCart, removeItemFromCart, clearCart,cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
