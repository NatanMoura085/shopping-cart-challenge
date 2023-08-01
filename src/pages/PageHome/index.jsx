import Header from "../../components/Header";
import PageProdutos from "../PageProdutos";

export default function PageHome() {
  return (
    <main>
      <Header />
      <div className="min-h-screen flex flex-col sm:p-4 md:p-8 lg:p-16">
        <section className="sm:flex sm:flex-col sm:items-center">
          <PageProdutos />
        </section>
      </div>
    </main>
  );
}
