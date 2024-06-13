import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import { NavLink } from "react-router-dom";
const fadeImages = [
  {
    url: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/slider_lg_1.jpg?1713464283843",
    desc: "CONVERSE Bộ sưu tập mới",
    desc2: " Sale tất cả sản phẩm",
    position: "left",
  },
  {
    url: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/slider_lg_2.jpg?1713464283843",
    desc: "CONVERSE ",
    desc2: "Mùa hè năng động",
    position: "center",
  },
  {
    url: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/slider_lg_3.jpg?1713464283843",
    desc: "CONVERSE ",
    desc2: "Bộ sưu tập mới cho mùa hè này",
    position: "right",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="each-fade">
            <img src={fadeImage.url} alt={`slide-${index}`} />
            <h2 className={`slide_heading ${fadeImage.position}`}>
              {fadeImage.desc}
              <br />
              {fadeImage.desc2}
              <br />
              <button className="btn_slider">
                <NavLink to="/products">Mua ngay</NavLink>
              </button>
            </h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
