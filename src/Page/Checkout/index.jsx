import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../../Components/CheckoutForm";

export default function Checkout() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const cart = useSelector((state) => state.cartChecker.cart);
  const products = useSelector((state) => state.products.products);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loginState) {
      navigate("/login");
    }
  }, [loginState, navigate]);

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
    }
  }, [products, cart, totalPrice]);

  const renderCart = () => {
    // map the products with the id in the cart
    return products.map((product) => {
      const item = cart.find((item) => item.id === product._id);
      if (item) {
        return (
          <div
            key={product._id}
            className="flex flex-row items-center justify-between py-2"
          >
            <div className="flex flex-row items-center">
              <img
                src={product.images.img_1}
                alt={product.name}
                className="mr-2 h-16 w-16 rounded-full border-2 object-cover"
              />
              <div className="ml-5">
                <p className="text-lg">
                  {product.name.split(" ").slice(0, 5).join(" ")}
                  {product.name.split(" ").length > 5 ? "..." : ""}
                </p>
                <p className="text-sm text-gray-500">x{item.quantity}</p>
              </div>
            </div>
            <p className="text-lg">
              {Number(product.cost * item.quantity).toLocaleString()}
            </p>
          </div>
        );
      }
    });
  };
  /*------------------------------------------------------------------------------------------------*/
  
  
  return (
    <div className="py-56">
      <div className="flex h-fit w-full flex-col items-start justify-center lg:flex-row">
        <div className="flex w-1/2 flex-col items-end">
          <div className="mb-3 flex h-96 w-full flex-col divide-y-2 overflow-scroll rounded-md border-2 px-5 py-3">
            {renderCart()}
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <button
              onClick={() => navigate("/cart")}
              className="flex flex-row items-center gap-2 rounded-md bg-gray-200 px-3 py-1 transition duration-200 hover:bg-gray-300"
            >
              <span>
                <IoMdArrowBack />
              </span>
              <span className="text-sm">Back to cart</span>
            </button>
            <p className="pr-4 text-lg text-gray-600">
              total price: {totalPrice.toLocaleString()} đ
            </p>
          </div>
        </div>
        <div className="ml-7 h-96 w-2/6">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
