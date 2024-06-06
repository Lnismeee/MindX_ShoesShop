import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Store/isLoggedInSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CredentialForm from "../../Components/Registeration/CredentialForm";

export default function Login() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginState === true) {
      dispatch(getUserInfo(localStorage.getItem("accessToken")));
      navigate("/login/user");
    }
  }, [loginState, navigate]);

  if (loginState == false) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <CredentialForm />
      </div>
    );
  }
}
