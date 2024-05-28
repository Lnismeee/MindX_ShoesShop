import React from "react";
import "./index.css";
import newsData from "../../../Data/newsData.json";
const NewsContent = () => {
  return (
    <>
      <div className="container_content">
        {newsData.map(({ img, title, time, company }, index) => (
          <div className="newsDataAll" key={index}>
            <img src={img} alt="" className="itemE" />
            <p>{title}</p>
            <p>{time}</p>
            <p>{company}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsContent;
