import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findingProducts } from "../../../../Store/products_slice";
import "./index.css";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Header_right = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const cart = useSelector((state) => state.cartChecker.cart);
  const findingStatus = useSelector((state) => state.products.findingStatus);
  const foundProducts = useSelector((state) => state.products.foundProducts);
  const dispatch = useDispatch();
  const [findInput, setFindInput] = useState("");
  const navigate = useNavigate();

  /**--------------------------------------------
   *               functions
   *---------------------------------------------**/
  const handleChange = (e) => {
    setFindInput(e.target.value);
  };
  useEffect(() => {
    const value = { name: findInput };
    if (findInput === "") {
      return;
    }
    dispatch(findingProducts(value));
  }, [findInput]);

  // render result
  const renderResult = () => {
    return (
      <div className="absolute z-10 max-h-96 w-96 -translate-x-28 translate-y-16 divide-y-2 divide-gray-100 overflow-scroll rounded-lg border-2 border-orange-400 bg-white p-4 shadow-lg">
        {findingStatus === "loading" ? (
          <div className="py-10">
            <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto" />
          </div>
        ) : foundProducts === null || foundProducts.length === 0 ? (
          <div className="py-10 text-center">Không tìm thấy sản phẩm</div>
        ) : (
          foundProducts.map((product) => {
            return (
              <div
                key={product._id}
                className="flex flex-row items-center justify-between gap-5 p-4 hover:bg-slate-100 cursor-pointer"
                onClick={() => {
                  navigate(`/products/${product._id}`);
                  setFindInput("");
                }}
              >
                <img
                  src={product.images.img_1}
                  alt={product.name}
                  className="h-16 w-16 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col items-end justify-between">
                  <p className="text-lg">
                    {product.name.split(" ").slice(0, 5).join(" ")}
                    {product.name.split(" ").length > 5 ? "..." : ""}
                  </p>
                  <p className="text-small text-gray-500">
                    {product.cost.toLocaleString()} đ
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  };
  /*------------------------------------------------------------------------*/

  return (
    <div className="hidden flex-row items-center justify-between gap-10 lg:flex">
      <div className="flex flex-row rounded-xl border-2 border-gray-500 border-opacity-30 px-5 py-2">
        <input
          type="text"
          value={findInput}
          onChange={handleChange}
          className="mr-5 rounded-lg p-1 focus:outline-none"
          placeholder="Tìm kiếm"
        />
        {findInput && renderResult()}
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
