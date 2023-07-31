import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import useCurrencyConversion from "../hooks/useCurrencyConversion";

const CartItem = () => {
  const [totalBRL, setTotalBRL] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const { cartItems, addItemToCart, removeItemFromCart, decreaseCartItem } = useContext(CartContext);
  const { dollarRate, conversionError } = useCurrencyConversion();


  const calculateTotal = () => {
    const totalBRL = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity * dollarRate,
      0
    );
    setTotalBRL(totalBRL.toFixed(2));

    const totalUSD = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    setTotalUSD(totalUSD.toFixed(2));
  };

  useEffect(() => {
    calculateTotal(); 
  }, [cartItems, dollarRate]);

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

  const renderBonusGift = () => {
    const totalPoints = cartItems.reduce((totalPoints, item) => totalPoints + item.points, 0);
    let bonusGift = "";

    if (totalPoints >= 10000) {
      bonusGift = "Camiseta personalizada";
    } else if (totalPoints >= 5000) {
      bonusGift = "Squeeze";
    } else if (totalPoints >= 2000) {
      bonusGift = "Chaveiro";
    }

    return (
      <div>
        {bonusGift && (
          <div className="text-lg font-semibold mt-4">
            Bonus Gift: {bonusGift}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-2">
     
      <div className="table-responsive">
        <table className="w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Image</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Name</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Price (USD)</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Price (BRL)</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Quantity</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Points</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Subtotal (BRL)</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  <img src={item.image} alt={item.name} className="h-16 w-16 object-contain mix-blend-multiply" />
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.name}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">${Number(item.price).toFixed(2)}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">R${(item.price * dollarRate).toFixed(2)}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.quantity}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{item.points}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">R${(item.price * item.quantity * dollarRate).toFixed(2)}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 space-x-2">
                  <button onClick={() => handleDecreaseItem(item.id)} className="bg-blue-500 text-white px-2 py-1 rounded">
                    -
                  </button>
                  <button onClick={() => handleAddItem(item)} className="bg-green-500 text-white px-2 py-1 rounded">
                    +
                  </button>
                  <button onClick={() => handleRemoveItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total in BRL: R${totalBRL}</p>
        <p className="text-lg font-semibold">Total in USD: ${totalUSD}</p>
      </div>
      {renderBonusGift()}
    </div>
  );
};

export default CartItem;
