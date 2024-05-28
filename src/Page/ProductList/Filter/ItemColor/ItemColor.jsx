import React from "react";
import "./index.css";
const ItemColor = ({ data, ChangeDk }) => {
  return (
    <div className="filer-item-color">
      <input
        type="checkbox"
        value={data.name}
        onClick={() => {
          ChangeDk(data.name);
        }}
      />
      <label>{data.name}</label>
    </div>
  );
};

export default ItemColor;
