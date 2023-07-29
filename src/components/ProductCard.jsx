import { useCart } from "../hooks/UseCart";

export default function ProductCard({ produto, price, image, pontos, onAddToCart, Icon}) {
  const {addItemToCart} = useCart()
  const handleAddItem = () => {
    addItemToCart(produto);
  };
  return (
    <div className="bg-white h-96 w-60 flex flex-col items-center border border-gray-300 shadow-md rounded-md p-4">
      <div className="w-full h-56 mb-4 overflow-hidden">
        <img src={image} className="w-full h-full object-cover mix-blend-multiply" alt={produto} />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-xl">{produto}</h3>
        <p className="font-medium text-lg text-gray-600">R${price}</p>
        <p className="font-light text-base text-gray-500">Pontos: {pontos}</p>
        <button onClick={()=>handleAddItem()}  className="bg-red-500 hover:bg-red-600 text-white font-semibold text-center py-2 px-4 rounded-md flex items-center gap-2">
          {Icon}
          Add to Cart
        </button>
      </div>
    </div>  
  );
}
