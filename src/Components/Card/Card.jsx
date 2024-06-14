import React from "react";
import "./index.css";
import "../../Data/data.json";
const Card = ({ data }) => {
  const { name, images, discount, cost, old_cost, hide } = data;
  const tran = (e) => {
    let a = String(e);
    let b = "";
    for (let i = a.length - 1; i >= 0; i--) {
      if ((a.length - 1 - i) % 3 == 0) b += ".";
      b += a[i];
    }
    //1000000
    b = b
      .split("")
      .reverse()
      .join("")
      .substring(0, b.length - 1);
    return b;
  };
  if (hide == true)
    // console.log(images?.img_2)
    return (
      <div className="card">
        <span>{discount}</span>
        <div className="icon">
          <a href="/">
            <i className="icon_item fa-regular fa-heart"></i>
          </a>
          <a href="/">
            <i className="icon_item item_hidden fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="/">
            <i className="icon_item item_hidden fa-solid fa-cart-shopping"></i>
          </a>
        </div>
        <div className="card_img">
          <img className="img1" src={images?.img_1} alt="" />
          <img
            className="img2"
            src={images?.img_2 == "" ? images?.img_1 : images?.img_2}
            alt="productPictrue"
          />
        </div>
        <div className="info1">
          <h2 className="name">{name}</h2>
          <div className="cost">
            <p>{tran(cost)} ₫</p>
            <del>{tran(old_cost)}₫</del>
          </div>
          <div className="star">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
    );
};

export default Card;
