import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutline,
  ShoppingBagOutline,
} from "@graywolfai/react-heroicons";
import { useCart } from "../hooks/UseCart";
export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="bg-[#ef3c44] p-4 flex justify-between items-center">
      <div className="flex flex-row gap-2 items-center">
        <ShoppingCartOutline className="h-7 text-cyan-50" />
        <p className="font-semibold text-xl text-cyan-50">Shopping cart</p>
      </div>

      <Link
        className="flex items-center cursor-pointer"
        to={{
          pathname: "/checkout",
        
        }}
      >
        <ShoppingBagOutline className="h-7 text-cyan-50" />
      </Link>
    </header>
  );
}
