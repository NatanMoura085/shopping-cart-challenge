import React from "react";
import { TrashSolid } from "@graywolfai/react-heroicons";

const BonusGift = ({ totalPoints }) => {
  let bonusGift = "";

  if (totalPoints >= 10000) {
    bonusGift = " Camiseta ";
  } else if (totalPoints >= 5000) {
    bonusGift = "Squeeze";
  } else if (totalPoints >= 2000) {
    bonusGift = "Chaveiro";
  }

  return (
    <>
      {bonusGift && (
        <div className="text-lg font-semibold flex flex-row sm:flex-row sm:items-center justify-between w-full">
          <p className="sm:text-left">BonusGift:</p>
          <p className="">{bonusGift}</p>
        </div>
      )}
    </>
  );
};

export default BonusGift;
