import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { CiShoppingCart, CiHeart, CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import "./index.css";

const Header_right = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const cart = useSelector((state) => state.cartChecker.cart);

  const [a, setA] = useState(0);
  const i = "TTìm kiếm sản phẩm ...  xBạn cần tìm gì ...? xNhập tên sản phẩm z";
  const [content, setContent] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (i[a] === "x") {
        setContent("");
      } else if (i[a] === "z") {
        setA(0);
        setContent("");
      } else {
        setContent((prevContent) => prevContent + i[a]);
      }
      setA((prevA) => prevA + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [a, i]);
  const activeClass = (params) => {
    return params.isActive ? "active-item h-c-title" : "h-c-title";
  };
  const [checkbokmenu, setCheckboxmenu] = useState(false);
  const closemenu = () => {
    setCheckboxmenu(!checkbokmenu);
  };
  return (
    <div className="flex flex-row justify-between items-center gap-4 md:gap-10">
      <div className="flex items-center border-gray-500 border-opacity-30 border-2 py-2 px-3 md:px-5 rounded-xl w-full md:w-auto">
        <IoSearchSharp className="text-xl text-gray-600 mr-3" />
        <input
          type="text"
          className="flex-grow rounded-lg focus:outline-none"
          placeholder={content}
        />
      </div>
      <label htmlFor="check_repon" className="i_check">
        <i className="fa-solid fa-bars"></i>
      </label>
      <NavLink to={isLoggedIn ? "/profile" : "/login"}>
        {isLoggedIn ? (
          <BsPersonCircle className="text-xl text-gray-600" />
        ) : (
          <CiLogin className="text-2xl" />
        )}
      </NavLink>
      <CiHeart className="text-2xl" />
      <NavLink to="/cart">
        {cart.length > 0 ? (
          <MdShoppingCartCheckout className="text-2xl" />
        ) : (
          <CiShoppingCart className="text-2xl text-gray-600" />
        )}
      </NavLink>
      <input
        type="checkbox"
        id="check_repon"
        checked={checkbokmenu}
        onChange={() => {
          setCheckboxmenu(!checkbokmenu);
        }}
      />
      <label htmlFor="check_repon" className="nar-overplay"></label>
      <div className="menu_mobile">
        <div className="menu_mobile_h">
          <h2>Danh mục</h2>
          <label htmlFor="check_repon">
            <i className="fa-solid fa-xmark"></i>
          </label>
        </div>
        <div className="list_link">
          <NavLink
            to="/"
            className={activeClass}
            onClick={(e) => {
              closemenu(e);
            }}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/products"
            className={activeClass}
            onClick={(e) => {
              closemenu(e);
            }}
          >
            Tất cả sản phẩm &#8250;
          </NavLink>
          <NavLink
            to="/news"
            className={activeClass}
            onClick={(e) => {
              closemenu(e);
            }}
          >
            Tin tức
          </NavLink>
          <NavLink
            to="/contact"
            className={activeClass}
            onClick={(e) => {
              closemenu(e);
            }}
          >
            Liên hệ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header_right;
