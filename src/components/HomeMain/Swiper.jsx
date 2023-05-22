import side1 from "../../assets/images/demos/demo1/sliders/slide-1.jpg";
import side2 from "../../assets/images/demos/demo1/sliders/slide-2.jpg";
import side3 from "../../assets/images/demos/demo1/sliders/slide-3.jpg";
import shose from "../../assets/images/demos/demo1/sliders/shoes.png";
import men from "../../assets/images/demos/demo1/sliders/men.png";
import skate from "../../assets/images/demos/demo1/sliders/skate.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const SwiperShop = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="swiper-slide banner banner-fixed intro-slide intro-slide2"
            style={{
              backgroundImage: `url(${side2})`,
              backgroundColor: "#ebeef2",
            }}
          >
            <div className="container">
              <figure
                className="slide-image skrollable "
                data-animation-options="{
                      'name': 'fadeInUpShorter',
                      'duration': '1s'
                  }"
              >
                <img
                  src={men}
                  alt="Banner"
                  data-bottom-top="transform: translateX(10vh);"
                  data-top-bottom="transform: translateX(-10vh);"
                  width="480"
                  height="633"
                />
              </figure>
              <div className="banner-content d-inline-block y-50">
                <h5
                  className="banner-subtitle font-weight-normal text-default ls-50 "
                  data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '.2s'
                      }"
                >
                  Mountain-
                  <span className="text-secondary">Climbing</span>
                </h5>
                <h3
                  className="banner-title font-weight-bolder text-dark mb-0 ls-25 "
                  data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '.4s'
                      }"
                >
                  Hot & Packback
                </h3>
                <p
                  className="font-weight-normal text-default "
                  data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '.8s'
                      }"
                >
                  Only until the end of this week.
                </p>
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-outline btn-rounded btn-icon-right "
                  data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s',
                          'delay': '1s'
                      }"
                >
                  SHOP NOW<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide banner banner-fixed intro-slide intro-slide1"
            style={{
              backgroundImage: `url(${side1})`,
              backgroundColor: "#ebeef2",
            }}
          >
            <div className="container">
              <figure className="slide-image skrollable ">
                <img
                  src={shose}
                  alt="Banner"
                  data-bottom-top="transform: translateY(10vh);"
                  data-top-bottom="transform: translateY(-10vh);"
                  width="474"
                  height="397"
                />
              </figure>
              <div className="banner-content y-50 text-right">
                <h5
                  className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 "
                  data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.2s'
                  }"
                >
                  Custom{" "}
                  <span className="p-relative d-inline-block">Men’s</span>
                </h5>
                <h3
                  className="banner-title font-weight-bolder ls-25 lh-1 "
                  data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.4s'
                  }"
                >
                  RUNNING SHOES
                </h3>
                <p
                  className="font-weight-normal text-default "
                  data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.6s'
                  }"
                >
                  Sale up to{" "}
                  <span className="font-weight-bolder text-secondary">
                    30% OFF
                  </span>
                </p>

                <a
                  href="shop-list.html"
                  className="btn btn-dark btn-outline btn-rounded btn-icon-right "
                  data-animation-options="{
                      'name': 'fadeInRightShorter',
                      'duration': '1s',
                      'delay': '.8s'
                  }"
                >
                  SHOP NOW<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide banner banner-fixed intro-slide intro-slide3"
            style={{
              backgroundImage: `url(${side3})`,
              backgroundColor: "#f0f1f2",
            }}
          >
            <div className="container">
              <figure
                className="slide-image skrollable "
                data-animation-options="{
                      'name': 'fadeInDownShorter',
                      'duration': '1s'
                  }"
              >
                <img
                  src={skate}
                  alt="Banner"
                  data-bottom-top="transform: translateY(10vh);"
                  data-top-bottom="transform: translateY(-10vh);"
                  width="310"
                  height="444"
                />
              </figure>
              <div className="banner-content text-right y-50">
                <p
                  className="font-weight-normal text-default text-uppercase mb-0 "
                  data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.6s'
                      }"
                >
                  Top weekly Seller
                </p>
                <h5
                  className="banner-subtitle font-weight-normal text-default ls-25 "
                  data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.4s'
                      }"
                >
                  Trending Collection
                </h5>
                <h3
                  className="banner-title p-relative font-weight-bolder ls-50 "
                  data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.2s'
                      }"
                >
                  <span className="text-white mr-4">Roller</span>-skate
                </h3>
                <div
                  className="btn-group "
                  data-animation-options="{
                          'name': 'fadeInLeftShorter',
                          'duration': '1s',
                          'delay': '.8s'
                      }"
                >
                  <a
                    href="shop-list.html"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                  >
                    SHOP NOW<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperShop;
