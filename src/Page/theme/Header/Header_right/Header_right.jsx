import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header_right = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const cart = useSelector((state) => state.cartChecker.cart);
  return (
    <div className="hidden flex-row items-center justify-between gap-10 lg:flex">
      <div className="flex flex-row rounded-xl border-2 border-gray-500 border-opacity-30 px-5 py-2">
        <input
          type="text"
          className="mr-5 rounded-lg focus:outline-none"
          placeholder="Tìm kiếm"
        />
      </div>
      <NavLink to="/login">
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
          <CiShoppingCart className="text-2xl" />
        )}
      </NavLink>
    </div>
  );
};

export default Header_right;
