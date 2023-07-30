import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import useCurrencyConversion from "../hooks/useCurrencyConversion";

export default function CartItem() {
  const { cartItems, addItemToCart, removeItemFromCart, decreaseCartItem } = useContext(CartContext);
  const { dollarRate, conversionError } = useCurrencyConversion();
  console.log(cartItems)

  const handleAddItem = (item) => {
    addItemToCart(item);
  };

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleDecreaseItem = (itemId) => {
    decreaseCartItem(itemId);
  };

  if (conversionError) {
    return <div>Error fetching dollar rate.</div>;
  }

  return (
    <section className="flex justify-center container">
      <div className="flex flex-row justify-start -m-7">
        <div className="w-screen">
          <h5 className="text-2xl font-semibold mb-4">Cart</h5>
          <table className="w-full border border-slate-950 divide-y divide-slate-950">
            <thead>
              <tr className="bg-slate-950 text-white">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price (USD)</th>
                <th className="px-4 py-2">Price (BRL)</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Points</th>
                <th className="px-4 py-2">Subtotal (BRL)</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>  
            <tbody>   
              {cartItems.map((...produto) => (
             <tr key={produto.id}>
                  <td className="px-4 py-2">
                    <img src={produto.image} className="h-24" />
                  </td>
                  <td className="px-4 py-2">{produto.name}</td>
                  <td className="px-4 py-2">R${Number(produto.price).toFixed(2)}</td>

                  <td className="px-4 py-2">R${(produto.price * dollarRate).toFixed(2)}</td>
                  <td className="px-4 py-2">{produto.quantity}</td>
                  <td className="px-4 py-2">{produto.pontos}</td>
                  <td className="px-4 py-2">R${(produto.price * produto.quantity * dollarRate).toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDecreaseItem(produto.id)}
                      className="bg-blue-500 text-white px-2 py-1 mr-2"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleAddItem(produto)}
                      className="bg-green-500 text-white px-2 py-1 mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(produto.id)}
                      className="bg-red-500 text-white px-2 py-1"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
