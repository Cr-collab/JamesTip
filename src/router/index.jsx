import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProduct } from "../pages/create-product";
import { Products } from "../pages/products";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-product/:id" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
