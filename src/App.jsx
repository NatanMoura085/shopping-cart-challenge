import CartProvider from "./context/CartProvider";
import Ways from "./routes";

export default function App() {
  return (
    <CartProvider>
      <div className="bg-[#e5e6e6] h-screen">
        <Ways />
      </div>
    </CartProvider>
  );
}
