import React from "react";
import { useSelector } from "react-redux";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { CiShoppingCart, CiHeart, CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import "./index.css";

const Header_right = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const cart = useSelector((state) => state.cartChecker.cart);
  return (
    <div className="flex flex-row justify-between items-center gap-4 md:gap-10">
      <div className="flex items-center border-gray-500 border-opacity-30 border-2 py-2 px-3 md:px-5 rounded-xl w-full md:w-auto">
        <IoSearchSharp className="text-xl text-gray-600 mr-3" />
        <input
          type="text"
          className="flex-grow rounded-lg focus:outline-none"
          placeholder="Tìm kiếm"
        />
      </div>
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
      <button aria-label="Favorites">
        <CiHeart className="text-4xl text-gray-600" />
      </button>
      <button aria-label="Shopping Cart">
        <CiShoppingCart className="text-4xl text-gray-600" />
      </button>
    </div>
  );
};

export default Header_right;
