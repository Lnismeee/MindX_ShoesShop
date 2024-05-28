import React, { Children, createContext, useState } from "react";

const ContextCheckLogin = createContext();

function LoginContext({ children }) {
  const [CheckLogin, SetCheckLogin] = useState(false);
  const SetLogin = () => {
    SetCheckLogin(true);
  };
  const OutLogin = () => {
    SetCheckLogin(false);
  };
  const value = {
    CheckLogin,
    SetLogin,
    OutLogin,
  };
  return (
    <ContextCheckLogin.Provider value={value}>
      {children}
    </ContextCheckLogin.Provider>
  );
}
export { ContextCheckLogin, LoginContext };
