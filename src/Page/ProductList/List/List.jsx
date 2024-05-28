import React from "react";
import Card from "../../../Components/Card/Card";
import "./index.css";
const List = ({ data, setData }) => {
  return (
    <div className="list12">
      <div className="list">
      {data.map((item, index) => {
        if (item.hide == true)
          return (
            <div className="card1">
              <Card data={item} key={item.id} />
            </div>
          );
      })}
    </div>
    </div>
  );
};

export default List;
