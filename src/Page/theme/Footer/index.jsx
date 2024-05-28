import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="footer__row">
          <div className="footer__column">
            <a href="#!">
              <img
                src="https://bizweb.dktcdn.net/thumb/medium/100/493/370/themes/940719/assets/shop_logo_image.png?1713464283843"
                alt=""
              />
            </a>
            <div className="column1">
              <i className="fa-solid fa-location-dot footer__icon"></i>
              <p className="footer__desc">
                188 Trường Chinh, P.Khương Thượng, Q.Đống Đa, Hà Nội
              </p>
            </div>
            <div className="column1">
              <i className="fa-solid fa-phone footer__icon"></i>
              <p className="footer__desc">1900868623</p>
            </div>
            <div className="column1">
              <i className="fa-regular fa-envelope footer__icon"></i>
              <p className="footer__desc">ShoesShop@gmail.com</p>
            </div>
            <div className="column1">
              <i className="fa-regular fa-clock footer__icon"></i>
              <p className="footer__desc">
                08:00 - 17:00 Thứ 2 - Thứ 6 <br />
                08:00 - 12:00 Thứ 7
              </p>
            </div>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Với chúng tôi</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="./introduction.html" className="footer__link">
                  Giới thiệu
                </a>
              </li>
              <li className="footer__item">
                <a href="./calendar.html" className="footer__link">
                  Chính sách đổi trả
                </a>
              </li>
              <li className="footer__item">
                <a href="./product.html" className="footer__link">
                  Chính sách bảo mật
                </a>
              </li>
              <li className="footer__item">
                <a href="./news.html" className="footer__link">
                  Điều khoản dịch vụ
                </a>
              </li>
            </ul>

            <h3 className="footer__heading">Tải về ứng dụng:</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  IOS
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Android
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Liên hệ:</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Tư vấn dịch vụ: 1800 6750
                </a>
              </li>

              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Hỗ trợ sử dụng: 1900 6750
                </a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Hỗ trợ vận chuyển: 1900 6719
                </a>
              </li>
            </ul>

            <h3 className="footer__heading">Trung tâm hỗ trợ:</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Theo dõi tại:</h3>
            <div className="footer__social">
              <a href="#!" className="footer__social-btn">
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.98981 11.9358V6.0302H5.76473L6 3.9517H3.98981L3.9928 2.91132C3.9928 2.3692 4.0477 2.07885 4.87783 2.07885H5.98755V0H4.21224C2.07977 0 1.32931 1.00825 1.32931 2.70405V3.95186H0V6.03055H1.32931V11.8521C1.84718 11.9489 2.38257 12 2.93075 12C3.28487 12 3.63863 11.9786 3.98981 11.9358Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#!" className="footer__social-btn">
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1.42062C15.405 1.66154 14.771 1.82123 14.11 1.89877C14.79 1.524 15.309 0.935077 15.553 0.225231C14.919 0.574154 14.219 0.820615 13.473 0.958154C12.871 0.366462 12.013 0 11.077 0C9.261 0 7.799 1.36062 7.799 3.02862C7.799 3.26862 7.821 3.49938 7.875 3.71908C5.148 3.59631 2.735 2.38985 1.114 0.552C0.831 1.00523 0.665 1.524 0.665 2.08246C0.665 3.13108 1.25 4.06062 2.122 4.59877C1.595 4.58954 1.078 4.44831 0.64 4.22585C0.64 4.23508 0.64 4.24708 0.64 4.25908C0.64 5.73046 1.777 6.95262 3.268 7.23415C3.001 7.30154 2.71 7.33385 2.408 7.33385C2.198 7.33385 1.986 7.32277 1.787 7.28215C2.212 8.48123 3.418 9.36277 4.852 9.39138C3.736 10.1972 2.319 10.6828 0.785 10.6828C0.516 10.6828 0.258 10.6717 0 10.6412C1.453 11.5062 3.175 12 5.032 12C11.068 12 14.368 7.38462 14.368 3.384C14.368 3.25015 14.363 3.12092 14.356 2.99262C15.007 2.56615 15.554 2.03354 16 1.42062Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#!" className="footer__social-btn">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.39394C0 0.989891 0.146401 0.656558 0.439189 0.393939C0.731978 0.131309 1.11262 0 1.58108 0C2.04119 0 2.41344 0.129285 2.69788 0.387879C2.99066 0.654545 3.13707 1.00201 3.13707 1.4303C3.13707 1.81818 2.99486 2.14141 2.71042 2.4C2.41764 2.66667 2.03282 2.8 1.55598 2.8H1.54344C1.08333 2.8 0.711072 2.66667 0.426641 2.4C0.142209 2.13333 0 1.79798 0 1.39394ZM0.163127 12V3.90303H2.94884V12H0.163127ZM4.49228 12H7.27799V7.47879C7.27799 7.19595 7.31146 6.97777 7.37838 6.82424C7.49549 6.54949 7.67326 6.31716 7.91168 6.12727C8.1501 5.93737 8.44916 5.84242 8.80888 5.84242C9.74582 5.84242 10.2143 6.45252 10.2143 7.67273V12H13V7.35758C13 6.16161 12.7072 5.25455 12.1216 4.63636C11.536 4.01818 10.7622 3.70909 9.80019 3.70909C8.72104 3.70909 7.88031 4.15758 7.27799 5.05455V5.07879H7.26544L7.27799 5.05455V3.90303H4.49228C4.509 4.16161 4.51737 4.96565 4.51737 6.31515C4.51737 7.66464 4.509 9.55959 4.49228 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <h3 className="footer__heading">Subscribe:</h3>

            <p className="footer__desc">Shoes Channel</p>

            <form className="footer-form" action="">
              <input
                className="footer-form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
              />
              <button
                className="home__action footer-form__submit"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            Bản quyền thuộc về các Đơn vị tổ chức:
          </p>
          <p className="footer__copyright-text">
            © 2023 - Bản quyền thuộc về F1GENZ TECHNOLOGY CO., LTD. Cung cấp bởi
            Sapo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
