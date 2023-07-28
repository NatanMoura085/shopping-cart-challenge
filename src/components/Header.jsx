import React from "react";
import { ShoppingCartOutline, ShoppingBagOutline } from "@graywolfai/react-heroicons";

export default function Header() {
  return (
    <header className="bg-[#ef3c44] p-4 flex justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <ShoppingCartOutline className="h-7 text-cyan-50" />
        <p className="font-semibold text-xl text-cyan-50">Shopping cart</p>
      </div>

      <div className="flex items-center">
        <ShoppingBagOutline className="h-7 text-cyan-50" />
      </div>
    </header>
  );
}
