// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";
import Card from "../Card/Card";
import data from "../../Data/data.json";
const Swiper1 = () => {
    return (
        <div className="flashSale">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="s-list"
            >
                <SwiperSlide className="s-item">
                    <Card data={data[0]} />
                </SwiperSlide>
                <SwiperSlide className="s-item">
                    <Card data={data[4]} />
                </SwiperSlide>
                <SwiperSlide className="s-item">
                    <Card data={data[7]} />
                </SwiperSlide>
                <SwiperSlide className="s-item">
                    <Card data={data[1]} />
                </SwiperSlide>
                <SwiperSlide className="s-item">
                    <Card data={data[2]} />
                </SwiperSlide>
                <SwiperSlide className="s-item">
                    <Card data={data[3]} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swiper1;
