import CartProvider from "./context/CartProvider";
import Ways from "./routes";

export default function App() {
  return (
    <CartProvider>
      <Ways />
    </CartProvider>
  );
}
