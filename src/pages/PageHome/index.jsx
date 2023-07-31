import Header from "../../components/Header";
import PageProdutos from "../PageProdutos";

export default function PageHome() {
  return (
    <main className="h-screen flex flex-col" >
      <Header />
      <PageProdutos/>
    </main>
  );
}
