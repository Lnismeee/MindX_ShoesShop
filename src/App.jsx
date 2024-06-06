import "./App.css";
import React from "react";
import ProductList from "./page/ProductList";
import News from "./Page/News";
import Contact from "./Page/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./Page/theme/Header/Header";
import Footer from "./page/theme/Footer";
import Example1 from "./components/Example";
import Login from "./Page/Login";
import UserPage from "./Page/UserPage";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./Store/isLoggedInSlice";
import Product_detail from "./Page/Product_detail";

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
    <>
      <Header />
      <Routes>
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/products/:id"
          element={<Product_detail/>}
        />  
        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/login/user"
          element={<UserPage />}
        />
      </Routes>
      <Example1></Example1>
      <Footer />
    </>
  );
}

export default App;
