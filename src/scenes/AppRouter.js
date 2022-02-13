import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/Admin/Main";
import Products from "../components/products/Product";
import ProductDetail from "../components/products/ProductDetails";
import Cart from "../components/Cart/Cart";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
