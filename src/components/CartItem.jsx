import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import useCurrencyConversion from "../hooks/useCurrencyConversion";

const CartItem = () => {
  const { cartItems, addItemToCart, removeItemFromCart, decreaseCartItem } =
    useContext(CartContext);
  const { dollarRate, conversionError } = useCurrencyConversion();

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
    <div className="container mx-auto  flex flex-col sm:flex-row gap-4">
      <div className="rounded-lg overflow-hidden">
        <div className="px-4 py-4 sm:p-6">
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto">
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
      </div>
    </div>
  );
};

export default CartItem;
