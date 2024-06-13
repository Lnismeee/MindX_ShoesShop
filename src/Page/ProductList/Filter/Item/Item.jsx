import React from "react";

const Item = ({ data, ChangeDk, id }) => {
  return (
    <div className="filer-item">
      <input
        type="checkbox"
        id={id}
        value={data.name}
        onClick={() => {
          ChangeDk(data.name);
        }}
        style={{ transform: "scale(1.5)", marginRight: "10px" }}
      />
      <label htmlFor={id}>{data.name}</label>
    </div>
  );
};

export default Item;
