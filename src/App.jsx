import CartProvider from "./context/CartProvider";
import Ways from "./routes";

export default function App() {
  return (
    <CartProvider>
      <div className="bg-slate-200 h-screen">
        <Ways />
      </div>
    </CartProvider>
  );
}
