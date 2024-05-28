import React, { useState } from "react";
import data1 from "../../Data/data.json";
import "./index.css";
import Filter from "./Filter/Filter";
import List from "./List/List";
import Sort from "./Sort/Sort";
import ProductListHeader from "./ProductListHeader/index";
const ProductList = () => {
  const [data, setData] = useState(data1);
  return (
    <div>
      <ProductListHeader />
      <div className="container1 product_list ">
        <div className="filter-all">
          <Filter data={data} setData={setData} />
        </div>
        <div className="product_list_right">
          <Sort data={data} setData={setData} />
          <List data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
