import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import useCurrencyConversion from "../hooks/useCurrencyConversion";
import CustomButton from "./UI/CustomButton";
  
const CartItem = () => {
  const [totalBRL, setTotalBRL] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const [includeBonusGift, setIncludeBonusGift] = useState(false)
  const { cartItems, addItemToCart, removeItemFromCart, decreaseCartItem } =
    useContext(CartContext);
  const { dollarRate, conversionError } = useCurrencyConversion();

  const calculateTotal = () => {
    const totalBRL = cartItems.reduce(
      (accumulator, item) =>
        accumulator + item.price * item.quantity * dollarRate,
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
  const toggleIncludeBonusGift = () => {
    setIncludeBonusGift((prev) => !prev);
  };
  if (conversionError) {
    return <div>Error fetching dollar rate.</div>;
  }

  const renderBonusGift = () => {
    const totalPoints = cartItems.reduce(
      (totalPoints, item) => totalPoints + item.points,
      0
    );
 
    let bonusGift = "";

    if (totalPoints >= 10000) {
      bonusGift = " Camiseta ";
    } else if (totalPoints >= 5000) {
      bonusGift = "Squeeze";
    } else if (totalPoints >= 2000) {
      bonusGift = "Chaveiro";
    }

    return (
      <div>
        {bonusGift && (
          <div className="text-lg font-semibold flex flex-row gap-60">
            <p className="">BonusGift:</p>
            <p className="  ">{bonusGift}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto  flex flex-col sm:flex-row gap-4">
      <div className="rounded-lg overflow-hidden">
        <div className="px-4 py-4 sm:p-6">
          <table className="w-full">
            <thead> 
              <tr className="border-b border-gray-300">
                <th className="px-4 py-4 whitespace-nowrap text-center  text-xs font-medium text-gray-600 uppercase tracking-wider">
                  (11)34234324
                </th>
                <th className="px-4 py-4 whitespace-nowrap text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Price (USD)
                </th>
                <th className="px-4 py-4 whitespace-nowrap text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Price (BRL)
                </th>
                <th className="px-4 py-4 whitespace-nowrap text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-4 py-4 whitespace-nowrap text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-4 py-4 whitespace-nowrap text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Subtotal (BRL)
                </th>
                <th className="px-4 py-4 whitespace-nowrap text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-300">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img
                          className="h-16 w-16 rounded-lg object-contain mix-blend-multiply"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${Number(item.price).toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      R${(item.price * dollarRate).toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.points}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      R${(item.price * item.quantity * dollarRate).toFixed(2)}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecreaseItem(item.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M20 12H4"></path>
                        </svg>
                      </button>
                      <button
                        onClick={() => handleAddItem(item)}
                        className="text-green-500 hover:text-green-700"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 4v16m8-8H4"></path>  
                        </svg>
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <span className="border border-gray-600 my-4" />

      <aside className="  w-full sm:w-4/12">
        <div className=" bg-gray-200 p-4 mt-7">
          <header className="font-semibold">Resumo da compra</header>
          <div className="info mt-2">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>R$ {totalBRL}</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span>Gratuito</span>
            </div>
            <div className=" mt-4 flex justify-between">
              <span className="font-semibold">TotalUSD</span>
              <span className="font-semibold"> $ {totalUSD}</span>
            </div>
            {renderBonusGift() && (
              <div className="mt-4 text-lg font-semibold flex justify-between">
             {renderBonusGift()}
                <div className="flex mt-2 relative left-1">
                  <input
                    type="checkbox"
                    className="h-4 w-4 gap-2 text-rose-700 focus:ring-rose-700 border-gray-300 rounded"
                    checked={includeBonusGift}
                    onChange={toggleIncludeBonusGift}
                  />
                  <span className="ml-2 text-sm text-gray-600  gap-2"></span>
                </div>
              </div>
            )}
          </div>
          <footer className=" mt-4 flex justify-between">
            <span className="font-semibold">TotalBRL</span>
            <span className="font-semibold">R$ {totalBRL}</span>
          </footer>
        </div>
        <div className="flex justify-center mt-4">
          <CustomButton>Finalizar Compra</CustomButton>
        </div>
      </aside>
    </div>
  );
};

export default CartItem;
