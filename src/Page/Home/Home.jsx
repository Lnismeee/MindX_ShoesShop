import React from "react";
import Slideshow from "../../Components/Slider";
import Card from "../../Components/Card/Card";
import { NavLink } from "react-router-dom";
import "./style.css";
import data from "../../Data/data.json";
import card from "../../Data/newsData.json";
import galleryImages from "../../Data/gallery.json";
const Home = () => {
  const home2 = [
    {
      img: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_1.png?1713464283843",
      title: "Giao hàng nhành, miễn phí",
      desc: "Đơn hàng từ 900k hoặc đăng ký tài khoản được giao hàng miễn phí",
    },
    {
      img: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_2.png?1713464283843",
      title: "Trả hàng, bảo hành",
      desc: "Không thích? Trả lại hoặc đổi hàng của bạn miễn phí trong vòng 30 ngày.",
    },
    {
      img: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_3.png?1713464283843",
      title: "Thành viên",
      desc: "Ưu đã theo từng cấp bậc hạng thành viên. Sinh nhật quà tặng thành viên",
    },
    {
      img: "https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_4.png?1713464283843",
      title: "Chính hãng",
      desc: "Sản phẩm chính hãng. Được nhập khẩu 100% từ hãng.",
    },
  ];

  return (
    <>
      <div className="home1">
        <Slideshow></Slideshow>
      </div>
      <div className="home_container">
        <div className="home2">
          {home2.map((item, index) => {
            return (
              <div className="h2_container" key={index}>
                <div className="h2_img">
                  <img src={item.img} alt="" className="h2_url" />
                </div>
                <h3 className="h2_heading">{item.title}</h3>
                <p className="h2_desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="home3">
          <img
            src="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_fsale_image.png?1713464283843"
            alt=""
          />
          <div className="list">
            {data.slice(0, 4).map((item) => (
              <div className="card123" key={item._id}>
                <NavLink to={`/products/${item._id}`}>
                  <Card data={item} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div className="home4">
          <div className="home4_item">
            <img
              src="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_about_top.jpg?1713464283843"
              alt=""
              className="hf_img1"
            />
          </div>
          <div className="home4_item">
            <div className="h4_content">
              <h3 className="h4_title">Phong cách của bạn</h3>
              <p className="h4_desc">
                Mở khóa phong cách và doanh số bán hàng độc quyền, giảm sản phẩm
                và những lần hợp tác mới nhất của chúng tôi với cộng đồng
                Converse - tất cả đều được gửi thẳng đến hộp thư đến của bạn.
              </p>
            </div>
          </div>
          <div className="home4_item">
            <div className="h4_content">
              <h3 className="h4_title">CONVERSE</h3>
              <p className="h4_desc">
                Chuck Taylor Classic là dòng giày truyền thống của Converse được
                giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay
                dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên
                thế giới.
              </p>
            </div>
          </div>

          <div className="home4_item">
            <img
              src="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_about_bot.jpg?1713464283843"
              alt=""
              className="hf_img2"
            />
          </div>
        </div>
        <div className="home_video">
          <h2 className="home_video_heading">Lý do nên mua Converse</h2>
          <div className="video_container">
            <iframe
              className="responsive_video"
              src="https://www.youtube.com/embed/U6e1OXRa8VU?start=146"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Lý do nên mua Converse"
            ></iframe>
          </div>
        </div>
        <div className="home5">
          <h2 className="home5_heading">Bộ sưu tập</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://drake.vn/image/catalog/H%C3%ACnh%20content/converse%201970s%20m%C3%A0u%20be/converse-1970s-m%C3%A0u-be-03.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/A06029C_H_08X1.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://drake.vn/image/catalog/H%C3%ACnh%20content/converse%201970s%20m%C3%A0u%20be/converse-1970s-m%C3%A0u-be-01.jpg"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://drake.vn/image/catalog/H%C3%ACnh%20content/converse%201970s%20m%C3%A0u%20be/converse-1970s-m%C3%A0u-be-09.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/Design-ohne-Titel-76.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://drake.vn/image/catalog/H%C3%ACnh%20content/converse%201970s%20m%C3%A0u%20be/converse-1970s-m%C3%A0u-be-08.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://www.converse.vn/media/wysiwyg/WOMEN_copy.jpghttps://www.converse.vn/media/wysiwyg/WOMEN_copy.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://www.converse.vn/media/wysiwyg/WOMEN_copy.jpg"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://www.converse.vn/media/wysiwyg/MEN_copy.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://drake.vn/image/catalog/H%C3%ACnh%20content/converse%201970s%20m%C3%A0u%20be/converse-1970s-m%C3%A0u-be-04.jpg"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://www.converse.vn/media/wysiwyg/UNISEX_2.jpg"
                  alt="gallery-photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home__footer">
          <h2 className="home__footer--heading">Kiến thức mua hàng</h2>
          <div className="home__footer1">
            {card.slice(0, 3).map((item) => (
              <div key={item.id} className="home__footer--card">
                <img src={item.img} alt="" className="home__footer--img" />

                <div className="home__footer--desc">
                  <a href="/">
                    <h3>{item.title}</h3>
                  </a>
                  <p>{item.day}</p>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
