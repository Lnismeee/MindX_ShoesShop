import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

const Header_left = () => {
  return (
    <NavLink to={"/"} className="mr-8">
      <img src="https://bizweb.dktcdn.net/thumb/medium/100/493/370/themes/940719/assets/shop_logo_image.png?1713464283843" alt=" LOGO" className="h-5" />
    </NavLink>
  );
};

export default Header_left;
