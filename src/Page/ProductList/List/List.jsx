import React from "react";
import Card from "../../../Components/Card/Card";
import "./index.css";
import { NavLink } from "react-router-dom";
const List = ({ data, setData }) => {
  return (
    <div className="list12">
      <div className="list">
        {data.map((item, index) => {
          if (item.hide == true) {
            return (
              <div className="card1">
                <NavLink to={`/products/${item._id}`}>
                  <Card
                    data={item}
                    key={item.id}
                  />
                </NavLink>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default List;
