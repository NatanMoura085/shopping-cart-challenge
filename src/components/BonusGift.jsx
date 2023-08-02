import React from "react";
import { TrashSolid } from "@graywolfai/react-heroicons";

const BonusGift = ({ totalPoints }) => {
  let bonusGift = "";

  if (totalPoints >= 10000) {
    bonusGift = "camiseta ";
  } else if (totalPoints >= 5000) {
    bonusGift = "squeeze";
  } else if (totalPoints >= 2000) {
    bonusGift = "chaveiro";
  }

  return (
    <>
      {bonusGift && (
        <div className="text-lg font-semibold flex flex-row sm:flex-row gap-x-2 sm:items-center justify-end w-full">
          <p className="font-bold text-gray-600">Cupom:</p>
          <p className="font-medium text-sky-600 uppercase">{bonusGift}</p>
        </div>
      )}
    </>
  );
};

export default BonusGift;
