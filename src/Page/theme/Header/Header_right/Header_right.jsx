import React, { useEffect, useState } from "react";
import "./index.css";

const Header_right = () => {
  return (
    <div className="flex flex-row border-gray-500">
      <input
        type="text"
        className="border-2 rounded-lg mr-5 px-3"
      />
      <button>Search</button>
    </div>
  );
};

export default Header_right;
