import "./App.css";
import React from "react";
import ProductList from "./Page/ProductList";
import News from "./Page/News";
import Contact from "./Page/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./Page/theme/Header/Header";
import Footer from "./Page/theme/Footer/Footer";
import Example1 from "./Components/Example/Example1";
import Login from "./Page/Login";
import UserPage from "./Page/UserPage";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./Store/isLoggedInSlice";
import Product_detail from "./Page/Product_detail";
import Home from "./Page/Home/Home";
import NewsDetail from "./Page/NewsDetail/NewsDetail";
import Cart from "./Page/Cart";
import Checkout from "./Page/Checkout";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  React.useEffect(() => {
    if (token) {
      dispatch(getUserInfo(token));
    }
  }, [accessToken, dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product_detail />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/user" element={<UserPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/news/detail" element={<NewsDetail />} />
      </Routes>
      <Example1/>
      <Footer />
    </div>
  );
}

export default App;
