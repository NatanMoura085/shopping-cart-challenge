import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutline,
  ShoppingBagOutline,
} from "@graywolfai/react-heroicons";
import { useCart } from "../hooks/UseCart";
import { useState } from "react";
import Modal from "./Modal";

export default function Header() {
  const { cartItems } = useCart();
  const [isOpen, setOpen] = useState(false);
  const HandleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <header className="bg-rose-700 p-4 flex justify-between items-center">
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
          <ShoppingBagOutline
            className="h-7 text-cyan-50"
            onMouseMove={HandleClick}
          />

        <div className="absolute top-0 right-0 left-89 bottom-0  z-50">
        {isOpen > 0 && 
            cartItems.map((product) => (
              <Modal
                key={product.id}
                name={product.name}
                image={product.image}
              />
            ))}
        </div>

          {cartItems.length > 0 && (
            <div className="bg-white animate-pulse text-black rounded-full w-5 h-5 flex justify-center items-center  relative  right-3  bottom-2">
              {cartItems.length}
            </div>
          )}
        </Link>
      </header>
    </div>
  );
}
