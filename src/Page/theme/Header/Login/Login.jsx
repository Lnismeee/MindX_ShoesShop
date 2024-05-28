import React, { useEffect, useState, useContext } from "react";
import { ContextCheckLogin } from "../../../../Context/CheckLogin.jsx";
import "./index.css";
import Box_login from "./Box_login/Box_login.jsx";

const Login = () => {
  const [usernow, setusernow] = useState({});
  const cl = useContext(ContextCheckLogin);
  const [boxlogin, setBoxlogin] = useState(false);
  const [boxlogout, setBoxlogout] = useState(false);
  const loginsucces = () => {
    setBoxlogin(false);
    cl.SetLogin();
  };
  const logoutsucces = () => {
    setBoxlogout(false);
    cl.OutLogin();
  };
  return (
    <div className="login">
      {cl.CheckLogin && (
        <label htmlFor="logout">
          <i class="fa-regular fa-circle-user"></i>
        </label>
      )}
      {!cl.CheckLogin && (
        <label htmlFor="login">
          <i className="fa-regular fa-user"></i>
        </label>
      )}
      <input
        type="checkbox"
        className="none"
        id="login"
        checked={boxlogin}
        onChange={() => {
          setBoxlogin(!boxlogin);
        }}
      />
      <input
        type="checkbox"
        className="none"
        id="logout"
        checked={boxlogout}
        onChange={() => {
          setBoxlogout(!boxlogout);
        }}
      />
      <div className="boxlogin">
        <label htmlFor="login">
          <i className="fa-solid fa-xmark"></i>
        </label>
        <Box_login
          loginsucces={loginsucces}
          usernow={usernow}
          setusernow={setusernow}
        />
      </div>
      <div className="boxout">
        <div className="boxoutinfo">
          <div>
            <h2>Họ và tên:</h2>
            <p>{usernow.name}</p>
          </div>
          <div>
            <h2>Gmail:</h2>
            <p>{usernow.gmail}</p>
          </div>
          <div>
            <h2>Số điện thoại:</h2>
            <p>{usernow.phonenumber}</p>
          </div>
        </div>
        <h2
          className="dangxuat"
          onClick={() => {
            logoutsucces();
          }}
        >
          Đăng xuất
        </h2>
      </div>
      <label htmlFor="login" className="nar-overplay1"></label>
      <label htmlFor="logout" className="nar-overplay"></label>
    </div>
  );
};

export default Login;
