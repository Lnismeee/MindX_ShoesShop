import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const navigate = useNavigate();
  React.useEffect(() => {   
    if (!loginState) {
      navigate("/login");
    }
  }, [loginState, navigate]);

  
  return (
    <div className="pt-48">
      <p>Checkout</p>
    </div>
  );
}
