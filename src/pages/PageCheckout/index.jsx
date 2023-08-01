import React from "react";
import CartItem from "../../components/CartItem";
import Summary from "../../components/Summary";

export default function PageCheckout() {
  return (
    <div className="w-full h-full flex flex-col p-4 md:flex-row md:space-x-4">
      <CartItem />

      <Summary />
    </div>
  );
}
