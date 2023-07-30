import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const decreaseCartItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        decreaseCartItem,
        clearCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
