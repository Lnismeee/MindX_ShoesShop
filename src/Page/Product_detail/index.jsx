import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateCart } from "../../Store/cartChecker";
import { fetchProducts } from "../../Store/products_slice";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// fetch product by id import here

export default function Product_detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const cart = useSelector((state) => state.cartChecker.cart);
  const [quantity, setQuantity] = React.useState(1);
  console.log(cart);

  /**========================================================================
   *                           Function definition
   *========================================================================**/
  // fetch product by id here
  const productDetail = () => {
    if (products.length !== 0) {
      return products.find((product) => product._id === id);
    } else {
      dispatch(fetchProducts());
      return products.find((product) => product._id === id);
    }
  };
  const product = productDetail();
  console.log(product);

  const setCart = (newCart, type) => {
    if (type === "add") {
      dispatch(addToCart(newCart));
    } else if (type === "update") {
      dispatch(updateCart(newCart));
    }
  };

  function handleQuantity(type) {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  }

  function handleAddToCart() {
    // chech if product is already in cart
    const item = cart.find((item) => item.id === id);
    if (item) {
      setCart({ id: id, quantity: item.quantity + quantity }, "update");
      console.log("update quantity of item in cart");
      // setCart(newCart, "update");
      setQuantity(1);
      toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        limit: 3,
        theme: "light",
      });
    } else {
      console.log("add new item to cart");
      setCart({ id: id, quantity: quantity }, "add");
      setQuantity(1);
      toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        limit: 3,
        theme: "light",
      });
    }
  }

  while (status === "loading") {
    return (
      <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto pt-48" />
    );
  }

  if (product?.images && "img_2" in product.images) {
    console.log(product.images.img_2);
    const imageLink = product.images.img_2;

    return (
      <div className="h-screen">
        <div
          className="flex h-96 w-full flex-col items-start justify-between bg-cover bg-no-repeat object-cover object-center px-14 py-36"
          style={{
            backgroundImage: `url("https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/main_product_breadcrumb_bg.jpg?1713464283843")`,
          }}
        >
          <p className="text-4xl font-bold">Chuck Taylor All Star Classic</p>
          <p className="text-lg font-light italic text-gray-500">
            Trang chủ / CONVERSE ALL Chuck Taylor / All Star Classic
          </p>
        </div>

        {
          //todo  TODO: fetch product by id then display here
        }

        <div className="mb-96 mt-10 flex flex-row items-start justify-between gap-7 px-32 py-5">
          <div className="w-4/5">
            <img
              src={imageLink}
              alt="productimgs"
              className="rounded-lg object-cover object-center shadow-md"
            />
          </div>

          {/* product info and order */}
          <div className="flex w-3/5 flex-col items-start justify-start gap-2 divide-y-2 divide-solid divide-gray-400 divide-opacity-25 px-3">
            <h1 className="pb-3 text-2xl font-bold leading-9">
              {product.name}
            </h1>
            <p className="w-full pt-3 text-xl font-medium text-gray-500">
              Giá: {Number(product.cost).toLocaleString()} đ
            </p>
            <div className="mt-5 flex w-full flex-col gap-2 py-5 font-sans text-xl font-bold">
              <span>Size</span>
              <div className="justify-item-center mt-4 flex flex-row gap-28">
                <span>Số lượng</span>
                <div className="flex flex-row items-center gap-5 rounded-md p-2 ring-1 ring-gray-700 ring-opacity-15">
                  <button
                    className="h-8 w-8 rounded-md bg-gray-300"
                    onClick={() => handleQuantity("decrease")}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="h-8 w-8 rounded-md bg-gray-300"
                    onClick={() => handleQuantity("increase")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-between gap-3 pt-5">
              <button
                className="h-12 w-1/2 rounded-md bg-orange-600 font-bold text-white"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ
              </button>
              <ToastContainer />
              <button className="h-12 w-1/2 rounded-md bg-green-600 font-bold text-white">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------- */}
      </div>
    );
  }
}
