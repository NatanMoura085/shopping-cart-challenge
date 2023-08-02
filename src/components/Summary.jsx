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
    <aside className="flex flex-col gap-y-4 items-center justify-center w-full sm:w-4/12 bg-gray-100 px-6 py-8 rounded-md">
      <h5 className="font-extrabold text-xl text-left w-full text-gray-800">Resumo da compra</h5>

      <div className="flex flex-col w-full gap-y-1">
        <div className="flex justify-between">
          <span className="font-bold">Sub-total:</span>
          <span className="font-normal">R$ {totalBRL}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Frete:</span>
          <span className="font-normal">Gratuito</span> 
        </div>
      </div>

      <hr className="w-full border-t border-gray-400 transform rotate-55 "></hr>

      <div className="flex flex-col w-full gap-y-1">
        <div className="flex justify-between">
          <span className="font-bold">Total USD:</span>
          <span className="font-normal">$ {totalUSD}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">Total BRL</span>
          <span className="font-normal">R$ {totalBRL}</span>
        </div>

        {renderBonusGift() && (
        <div className="flex justify-between items-center w-full text-lg font-semibold ">
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

      <hr className="w-full border-t border-gray-400 transform rotate-55 "></hr>

      <CustomButton>Finalizar Compra</CustomButton>
    </aside>
  );
};

export default Summary;
