import React from "react";
import "./board.css";
import NewsHeader from "./NewsHeader/header";
import NewsContent from "./NewsContent/index.jsx";
const News = () => {
  return (
    <>
      <div className="container_news">
        <NewsHeader></NewsHeader>
        <NewsContent></NewsContent>
      </div>
    </>
  );
};

export default News;
