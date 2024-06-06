import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CredentialForm from "../../Components/Registeration/CredentialForm";

export default function Login() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState === true) {
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
