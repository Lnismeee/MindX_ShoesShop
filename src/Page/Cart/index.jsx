import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/products_slice";
import { removeAll, removeById } from "../../Store/cartChecker";
import ReactLoading from "react-loading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { TbShoppingCartOff } from "react-icons/tb";

export default function Cart() {
  const cart = useSelector((state) => state.cartChecker.cart);
  const [totaPrice, setTotalPrice] = React.useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  /*------------------------------------------------------------------------------------------------*/

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  React.useEffect(() => {
    let totalPrice = 0;
    if (Array.isArray(products) && products.length !== 0 && cart !== null) {
      products.forEach((product) => {
        const item = cart.find((item) => item.id === product._id);
        if (item) {
          totalPrice += product.cost * item.quantity;
        } else {
          totalPrice += 0;
        }
      });
      setTotalPrice(totalPrice);
      console.log(totalPrice);
    }
  }, [products, cart, totaPrice]);

  // function handleDeleteAll() {
  //   localStorage.removeItem("cart");
  //   setTotalPrice(0);
  // }

  // function deleteIndividual(id) {
  //   const newCart = cart.filter((item) => item.id !== id);
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  // }

  const handleDelete = (item, type) => {
    if (type === "individual") {
      dispatch(removeById(item.id));
    } else if (type === "all") {
      dispatch(removeAll());
    }
  }
  /*------------------------------------------------------------------------------------------------*/

  while (status === "loading") {
    return (
      <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto pt-48" />
    );
  }

  console.log(cart);
  if (cart === null || cart.length === 0) {
    return (
      <div className="mb-80 pt-60 flex flex-col items-center justify-around gap-7">
        <h1 className="mt-8 text-5xl font-light text-gray-300">
          Your Cart Is Empty
        </h1>
        <TbShoppingCartOff className="h-40 w-40 text-gray-300" />
      </div>
    );
  }

  return (
    <div className="pt-36">
      <h1 className="mb-10 text-center text-4xl font-bold">Your Cart</h1>
      <div className="mx-36 mb-32 flex h-auto w-auto flex-col items-end">
        <button
          className="flex w-40 flex-row items-center justify-between divide-x-2 divide-white rounded bg-red-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-orange-700 hover:shadow-md"
          onClick={() => handleDelete(null, "all")}
        >
          <span className="text-sm">Delete All</span>
          <RiDeleteBin6Line className="w-1/3 pl-4 text-white" />
        </button>
        <div className="mt-8 flex h-auto w-full flex-col items-center justify-center divide-y-2 rounded-lg border border-gray-300 p-5 shadow-md">
          {Array.isArray(products) &&
            products.map((product) => {
              const item = cart.find((item) => item.id === product._id);
              if (item) {
                return (
                  <div
                    key={product._id}
                    className="flex h-auto w-full cursor-pointer flex-row justify-between justify-items-center gap-5 px-3 py-5 transition duration-100 hover:bg-gray-100 hover:shadow-lg"
                  >
                    <img
                      src={product.images.img_2}
                      alt={product.name}
                      className="h-32 w-32 rounded-full border border-gray-300 object-cover object-center shadow-md transition duration-300 hover:border-orange-500"
                    />
                    <div
                      className="flex h-auto w-3/4 flex-row items-center justify-end gap-7"
                      onClick={() =>
                        navigate(`/converseall/product/${product._id}`)
                      }
                    >
                      <p className="text-right font-bold text-gray-600">
                        {product.name}
                      </p>
                      <p className="text-gray-700">
                        giá: {Number(product.cost).toLocaleString()} đ
                      </p>
                      <p className="font-mono font-bold text-gray-600">
                        quantity: {item.quantity}
                      </p>
                    </div>
                    <button
                      className="ml-10 mr-4"
                      onClick={() => {
                        handleDelete(item, "individual");
                      }}
                    >
                      <IoIosCloseCircle className="text-4xl text-gray-200 transition duration-100 hover:text-red-500" />
                    </button>
                  </div>
                );
              }
            })}
        </div>
        <p className="my-7 mr-5 text-xl font-bold text-gray-500">
          Total Price: {totaPrice.toLocaleString()} đ
        </p>
        <button
          className="w-40 rounded bg-orange-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-orange-700 hover:shadow-md"
          onClick={() => navigate("/cart/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
