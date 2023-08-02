import { useContext, useEffect, useState } from "react";
import BonusGift from "./BonusGift";
import CustomButton from "./UI/CustomButton";
import useCurrencyConversion from "../hooks/useCurrencyConversion";
import { CartContext } from "../context/CartProvider";

import { TrashSolid } from "@graywolfai/react-heroicons";


const Summary = () => {
  const [totalBRL, setTotalBRL] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const [includeBonusGift, setIncludeBonusGift] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { dollarRate } = useCurrencyConversion();

  useEffect(() => {
    calculateTotal();
  }, [cartItems, dollarRate]);

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

  const toggleIncludeBonusGift = () => {
    setIncludeBonusGift((prev) => !prev);
  };

  const renderBonusGift = () => {
    const totalPoints = cartItems.reduce(
      (totalPoints, item) => totalPoints + item.points,
      0
    );

    return <BonusGift totalPoints={totalPoints} />;
  };

  return (
    <aside className="w-full sm:w-4/12 bg-gray-100 p-4 mt-7 rounded-md">
      <header className="font-semibold text-center sm:text-left">
        Resumo da compra
      </header>
      <div className="info mt-2">
        <div className="flex justify-between">
          <span>Sub-total</span>
          <span>R$ {totalBRL}</span>
        </div>
        <div className="flex justify-between">
          <span>Frete</span>
          <span>Gratuito</span>
        </div>
        <div className="mt-4 flex justify-between">
          <span className="font-semibold">Total USD</span>
          <span className="font-semibold">$ {totalUSD}</span>
        </div>
        {renderBonusGift() && (   
          <div className="mt-4 text-lg font-semibold flex justify-between items-center">
            {renderBonusGift()}
            {includeBonusGift && (
              <div
                className="flex mt-2 cursor-pointer"
                onClick={() => toggleIncludeBonusGift()}
              >
                <TrashSolid className="h-5 w-5 text-rose-700" />
                <span className="ml-2 text-sm text-gray-600">Remover brinde</span>
              </div>
            )}
          </div>
        )}
      </div>
      <footer className="mt-4 flex justify-between">
        <span className="font-semibold">Total BRL</span>
        <span className="font-semibold">R$ {totalBRL}</span>
      </footer>
      <div className="flex justify-center mt-4">
        <CustomButton>Finalizar Compra</CustomButton>
      </div>
    </aside>
  );
};

export default Summary;
