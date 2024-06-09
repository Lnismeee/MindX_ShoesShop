import { useState, useEffect } from "react";
import data1 from "../../Data/data.json";
import "./index.css";
import Filter from "./Filter/Filter";
import List from "./List/List";
import Sort from "./Sort/Sort";
import ProductListHeader from "./ProductListHeader/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/products_slice.js";
import ReactLoading from "react-loading";

/**------------------------------------------------------------------------
 *                           main function
 *------------------------------------------------------------------------**/
const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const [data, setData] = useState(data1); // data1 is optional

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    } else {
      setData(products);
    }
    console.log(status);
    // setData(products)
  }, [dispatch]);

  useEffect(() => {
    if (status === "success") {
      setData(products);
    }
  }, [status]);

  while (status === "loading") {
    return (
      <ReactLoading
        type={"spin"}
        color={"#fc531b"}
        className="mx-auto mt-10 pt-56"
      />
    );
  }

  if (status === "failed") {
    return <div>Failed to load data</div>;
  }

  if (status === "success") {
    console.log("succeeded");
    // console.log(products);
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
  }
};

export default ProductList;
