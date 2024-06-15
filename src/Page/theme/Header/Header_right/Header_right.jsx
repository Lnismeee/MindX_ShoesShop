import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findingProducts } from "../../../../Store/products_slice";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { CiShoppingCart, CiHeart, CiLogin } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import "./index.css";

const Header_right = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const cart = useSelector((state) => state.cartChecker.cart);
  const findingStatus = useSelector((state) => state.products.findingStatus);
  const foundProducts = useSelector((state) => state.products.foundProducts);
  const dispatch = useDispatch();
  const [findInput, setFindInput] = useState("");
  const navigate = useNavigate();
  
  // LN works--------------------------------------------------------------
  
  const [checkbokmenu, setCheckboxmenu] = useState(false);
  const closemenu = () => {
    setCheckboxmenu(!checkbokmenu);
  };
  const activeClass = (params) => {
    return params.isActive ? "active-item h-c-title" : "h-c-title";
  };
  //-----------------------------------------------------------------------

  
  
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
      <div className="absolute z-10 max-h-96 xl:w-96 w-80 -translate-x-4 translate-y-16 divide-y-2 divide-gray-100 overflow-scroll rounded-lg border-2 border-orange-400 bg-white p-4 shadow-lg">
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
                  setFindInput("");
                  navigate(`/products/${product._id}`);
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
    <div className="flex flex-row justify-between items-center gap-4 md:gap-10">
      <div className="flex flex-col border-gray-500 border-opacity-30 border-2 py-2 px-3 md:px-5 rounded-xl w-full md:w-auto">
        <div className="flex items-center">
        <IoSearchSharp className="text-xl text-gray-600 mr-3" />
        <input
          type="text"
          value={findInput}
          onChange={handleChange}
          className="mr-5 rounded-lg p-1 focus:outline-none"
          placeholder="Tìm kiếm"
        />
        </div>
        {findInput && renderResult()}
      </div>
      <label htmlFor="check_repon" className="i_check">
        <i className="fa-solid fa-bars"></i>
      </label>
      <NavLink to={isLoggedIn ? "/login/user" : "/login"}>
        {isLoggedIn ? (
          <BsPersonCircle className="text-xl text-gray-600" />
        ) : (
          <CiLogin className="text-2xl" />
        )}
      </NavLink>
      {/* <CiHeart className="text-2xl" /> */}
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
