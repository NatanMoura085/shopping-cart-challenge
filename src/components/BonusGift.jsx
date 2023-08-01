import React from "react";

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

export default BonusGift;
    