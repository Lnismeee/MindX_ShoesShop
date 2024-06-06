import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { IoSearchSharp } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header_right = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  return (
    <div className="flex flex-row justify-between items-center gap-10">
      <div className="flex flex-row border-gray-500 border-opacity-30 border-2 py-2 px-5 rounded-xl">
        <input
          type="text"
          className="rounded-lg mr-5 focus:outline-none"
          placeholder="Tìm kiếm"
        />
      </div>
      <NavLink to="/login">
        {isLoggedIn ? (
          <BsPersonCircle className="text-3xl text-gray-600" />
        ) : (
          <CiLogin className="text-4xl" />
        )}
      </NavLink>
      <CiHeart className="text-4xl" />
      <CiShoppingCart className="text-4xl" />
    </div>
  );
};

export default Header_right;
