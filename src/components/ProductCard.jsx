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
  textBtn
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
      <div className="w-full h-56 mb-4 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover mix-blend-multiply"
          alt={produto}
        />
      </div>

      <div className="text-center  ">
        <h3 className="font-semibold text-xl">{produto}</h3>
        <p className="font-medium text-lg text-gray-600">
          ${priceUSD}
        </p>
        <p className="font-medium text-lg text-gray-600">
          R${priceBRL}
        </p>
        <div className="flex justify-center">
          {quantityInCart > 0 && <p>{quantityInCart}</p>}
          <button
            onClick={handleAddToCart}
            className="bg-[#ef3c44] p-2 rounded-full w-32 flex justify-center items-center font-semibold text-white gap-1"
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
