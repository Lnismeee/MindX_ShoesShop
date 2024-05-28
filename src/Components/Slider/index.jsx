import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
const fadeImages = [
    {
        url: "https://bizweb.dktcdn.net/thumb/1024x1024/100/488/521/themes/913255/assets/home_main_slider_item_image_1.jpg?1695187373377",
    },
    {
        url: "https://bizweb.dktcdn.net/thumb/1024x1024/100/488/521/themes/913255/assets/home_main_slider_item_image_2.jpg?1695187373377",
    },
    {
        url: "https://bizweb.dktcdn.net/thumb/1024x1024/100/488/521/themes/913255/assets/home_main_slider_item_image_3.jpg?1695187373377",
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <img src={fadeImage.url} />
                    </div>
                ))}
            </Fade>
        </div>
    );
};
export default Slideshow;
