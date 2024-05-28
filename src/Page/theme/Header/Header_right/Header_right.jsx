import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import Login from "../Login/Login.jsx";

const Header_right = () => {
  const activeClass = (params) => {
    return params.isActive ? "active-item h-c-title" : "h-c-title";
  };
  const [a, setA] = useState(0);
  let i = "Tìm kiếm sản phẩm ...  xBạn cần tìm gì ...?   xNhập tên sản phẩm z";
  const [content, setContent] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setContent(content + i[a]);
      setA(a + 1);
      if (i[a] == "x") setContent("");
      if (i[a] == "z") {
        setA(0);
        setContent("");
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });
  const [checkbokmenu, setCheckboxmenu] = useState(false);
  const closemenu = () => {
    setCheckboxmenu(!checkbokmenu);
  };
  return (
    <div className="header-right">
      <div className="input_hr">
        <input placeholder={content} type="text" />
      </div>
      <i className="fa-solid fa-magnifying-glass"></i>
      <label htmlFor="check_repon" className="i_check">
        <i className="fa-solid fa-bars"></i>
      </label>
      <Login />
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-bag-shopping"></i>
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
