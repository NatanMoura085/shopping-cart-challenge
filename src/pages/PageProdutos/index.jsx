
import ProductCard from "../../components/ProductCard";
import productList from "../../data/productList";
import { ShoppingBagOutline } from "@graywolfai/react-heroicons";
import useDollarRate from "../../hooks/useDollarRate";

const PageProdutos = () => {
  const dollarRate = useDollarRate();
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            Icon={<ShoppingBagOutline className="w-5 h-5" />}
            produto={product.name}
            priceUSD={product.price}
            pontos={product.pontos}
            image={product.image}
            description={product.description}
            dollarRate={dollarRate}
          />
        ))}
      </div>
    </section>
  );
};

export default PageProdutos;