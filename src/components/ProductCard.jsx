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
      // Caso contrário, adicione um novo item ao carrinho
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
          Price in USD: ${priceUSD}
        </p>
        <p className="font-medium text-lg text-gray-600">
          Price in BRL: R${priceBRL}
        </p>
        <div className="flex justify-center">
          {quantityInCart > 0 && <p>{quantityInCart}</p>}
          <button
            onClick={handleAddToCart}
            className="bg-[#ef3c44] text-white px-4 py-2 rounded-md flex gap-1 items-center"
          >
            {Icon}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
