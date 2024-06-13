import React from "react";
import newsData from "../../Data/newsData.json";
import "./style.css";
import NewsHeader from "../News/NewsHeader/header";
import content from "../../Data/NewsDetail.json";
import data from "../../Data/data.json";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
const NewsDetail = () => {
  const rightSideItems = newsData.slice(1, 4);
  const left = newsData.slice(0, 1);
  return (
    <>
      <NewsHeader></NewsHeader>
      <div className="N-container">
        <div className="newsDetail">
          <p>
            Tác giả: Công Ty TNHH KTCN F1GENZ - đăng vào 16:45 ngày 04.11.2021
          </p>
          {left.map(({ img }, index) => (
            <div className="newsDetail_img" key={index}>
              <img src={img} alt="" />
            </div>
          ))}

          {content.map(({ heading1, desc, heading2, desc2 }, index) => (
            <div className="newsDetail_l" key={index}>
              <h2 className="newsDetail_heading">{heading1}</h2>
              <p className="newsDetail_desc">{desc}</p>
              <h2 className="newsDetail_heading">{heading2}</h2>
              <p className="newsDetail_desc">{desc2}</p>
            </div>
          ))}
          <div className="newCard">
            {data.slice(0, 3).map((item) => (
              <div className="card123" key={item._id}>
                <NavLink to={`/products/${item._id}`}>
                  <Card data={item} />
                </NavLink>
              </div>
            ))}
          </div>
          {content.map(({ heading3, desc3 }, index) => (
            <div className="newsDetail_l" key={index}>
              <h2 className="newsDetail_heading">{heading3}</h2>
              <p className="newsDetail_desc">{desc3}</p>
            </div>
          ))}
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
    </>
  );
};

export default NewsDetail;
