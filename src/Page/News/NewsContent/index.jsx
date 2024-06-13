import React, { useState } from "react";
import "./index.css";
import newsData from "../../../Data/newsData.json";
import { NavLink } from "react-router-dom";

const NewsContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  const rightSideItems = newsData.slice(1, 4);
  return (
    <div className="N-container">
      <div className="container_content_left">
        <NavLink to={"/news/detail"}>
          <div className="newsGrid">
            {currentItems.map(({ img, title, time, company, desc }, index) => (
              <div className="newsDataAll" key={index}>
                <img src={img} alt="" className="N-img" />
                <div className="N-content">
                  <p className="N-title">{title}</p>
                  <p className="N-time">
                    <i class="fa-solid fa-calendar-days space"></i>
                    {time}
                  </p>
                  <p className="N-company">
                    <i class="fa-solid fa-location-dot space"></i>
                    {company}
                  </p>
                  <p className="N-desc-r">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </NavLink>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={(e) => handleClick(e, index + 1)}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="container_content_right">
        <div className="c_c_r1">
          <div className="N-header-r">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1334/1334205.png"
              alt=""
              className="N-icon"
            />
            <span className="N-heading-r">Đừng bỏ lỡ</span>
          </div>
          <NavLink to={"/news/detail"}>
            {rightSideItems.map(({ img, title, time, company }, index) => (
              <div className="newsDataAll-r" key={index}>
                <img src={img} alt="" className="itemLeft" />
                <div className="N-content-r">
                  <p className="N-title-r">{title}</p>
                  <p className="N-time-r">{time}</p>
                  <p className="N-company-r">{company}</p>
                </div>
              </div>
            ))}
          </NavLink>
        </div>
        <div className="c_c_r2">
          <div className="c_c_r2">
            <div className="N-header-r">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1334/1334205.png"
                alt=""
                className="N-icon"
              />
              <span className="N-heading-r">Bạn cần tư vấn gì?</span>
            </div>
            <img
              src="https://bizweb.dktcdn.net/thumb/grande/100/493/370/themes/940719/assets/main_blog_banner_image.jpg?1713464283843"
              alt=""
              className="c_c_r2_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
