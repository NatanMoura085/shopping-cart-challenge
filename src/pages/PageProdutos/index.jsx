import ProductCard from "../../components/ProductCard";
import productList from "../../data/productList";
import { ShoppingBagOutline } from "@graywolfai/react-heroicons";
export default function PageProdutos() {
  return (
    <div className="flex justify-center m-7 gap-4">
      {productList.map((product) => (
        <ProductCard
          Icon={<ShoppingBagOutline className="w-5 h-5" />}
          key={product.id}
          image={product.image}
          produto={product.name}
          price={product.price} 
          pontos={product.pontos}
        />
      ))}
    </div>
  );
}
