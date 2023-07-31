import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageCheckout from "../pages/PageCheckout";
import PageProdutos from "../pages/PageProdutos";
import NotFound from "../pages/NotFound";
export default function Ways() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<PageHome />}  />
        <Route index element={<PageProdutos />} />
        <Route path="/checkout" element={<PageCheckout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
