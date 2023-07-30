import Header from "../../components/Header";
import PageProdutos from "../PageProdutos";

export default function PageHome() {
  return (
    <main className="min-h-screen flex flex-col" >
      <Header />
      <PageProdutos/>
    </main>
  );
}
