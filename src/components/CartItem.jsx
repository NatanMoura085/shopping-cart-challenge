import { useCart } from "../hooks/UseCart";

export default function CartItem() {
  const { cartItems, addItemToCart, removeItemFromCart, decreaseCartItem } = useCart();

  const handleAddItem = (item) => {
    addItemToCart(item);
  };

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleDecreaseItem = (itemId) => {
    decreaseCartItem(itemId);
  };

  return (
    <section className=" flex justify-center   container">
    <div className="flex flex-row justify-start -m-7">

      <div className="w-screen">
        <h5 className="text-2xl font-semibold mb-4">Cart</h5>
        <table className="w-full border border-slate-950 divide-y divide-slate-950">
            <thead>
              <tr className="bg-slate-950 text-white">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2">
                    <img src={item.image} className="h-24" alt={item.name} />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">R${item.price}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDecreaseItem(item.id)}
                      className="bg-blue-500 text-white px-2 py-1 mr-2"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="bg-green-500 text-white px-2 py-1 mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
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
