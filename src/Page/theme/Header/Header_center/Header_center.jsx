import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

const Header_center = () => {
  const activeClass = (params) => {
    return params.isActive ? "active-item h-c-title" : "h-c-title";
  };
  return (
    <div className="header-center">
      <div className="pc">
        <NavLink to="/" className={activeClass}>
          Trang chủ
        </NavLink>
        <NavLink to="/products" className={activeClass}>
          Tất cả sản phẩm &#8250;
        </NavLink>
        <NavLink to="/news" className={activeClass}>
          Tin tức
        </NavLink>
        <NavLink to="/contact" className={activeClass}>
          Liên hệ
        </NavLink>
      </div>
    </div>
  );
};

export default Header_center;
