import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const ProductCard = ({
  Icon,
  produto,
  priceUSD,
  pontos,
  image,
  description,
  dollarRate,
  textBtn,
}) => {
  const priceBRL = (priceUSD * dollarRate).toFixed(2);

  const { addItemToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === produto.id);

    if (existingItem) {
      addItemToCart({
        ...existingItem,
        quantity: existingItem.quantity + 1,
      });
    } else {
      const item = {
        id: produto,
        name: produto,
        price: priceUSD,
        points: pontos,
        quantity: 1,
        image: image,
      };

      addItemToCart(item);
    }
  };

  const quantityInCart = cartItems
    .filter((item) => item.id === produto.id)
    .reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-white h-96 w-60 flex flex-col items-center border border-gray-300 shadow-md rounded-md p-6 ">
      <div className="w-full h-auto m-auto overflow-hidden">
        <img
          src={image}
          className="w-full h-auto object-cover mix-blend-multiply"
          alt={produto}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="font-semibold text-xl text-center">{produto}</h3>
        <div className="flex flex-row items-center justify-center gap-x-2 font-semibold text-lg text-gray-600">
          <p>${priceUSD}</p>
          <p>-</p>
          <p>R${priceBRL}</p>
        </div>
        <div className="flex justify-center">
          {quantityInCart > 0 && <p>{quantityInCart}</p>}
          <button
            onClick={handleAddToCart}
            className=" bg-rose-700 hover:bg-rose-600 focus:bg-rose-600 py-3 px-4 m-auto rounded-full flex justify-center items-center font-semibold text-white gap-2 ease-in-out duration-200 hover:scale-105 focus:ring-2  focus:ring-rose-300 transform active:scale-x-95 transition-transform"
          >
            {Icon}
            {textBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
