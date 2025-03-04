import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import { MyFooter } from "./components/Footer";
import Category from "./pages/Category";
import bannerwomens from "./assets/bannerwomens.png";
import bannermens from "./assets/bannermens.png";
import bannerkids from "./assets/bannerkids.png";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/kids"
          element={<Category category={"kid"} banner={bannerkids} />}
        />
        <Route
          path="/mens"
          element={<Category category={"men"} banner={bannermens} />}
        />
        <Route
          path="/womens"
          element={<Category category={"women"} banner={bannerwomens} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart-page" element={<Cart/>} />
      </Routes>
      <MyFooter />
    </div>
  );
}
