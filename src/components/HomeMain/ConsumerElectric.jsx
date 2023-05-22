import banner from "../../assets/images/demos/demo1/banners/3.jpg";
import professionalcamera1 from "../../assets/images/demos/demo1/products/5-1-1.jpg";
import professionalcamera2 from "../../assets/images/demos/demo1/products/5-1-2.jpg";
import latestSpeaker from "../../assets/images/demos/demo1/products/latestSpeaker.jpg";
import washMashine1 from "../../assets/images/demos/demo1/products/5-2-1.jpg";
import washMashine2 from "../../assets/images/demos/demo1/products/5-2-2.jpg";
import securityGuard from "../../assets/images/demos/demo1/products/5-6.jpg";
import HDtelevision from "../../assets/images/demos/demo1/products/5-3.jpg";
import usb from "../../assets/images/demos/demo1/products/5-7.jpg";
import DataTransdertool from "../../assets/images/demos/demo1/products/5-4.jpg";
import iphone from "../../assets/images/demos/demo1/products/5-8.jpg";
const ConsumerElectric = () => {
  return (
    <>
      <div className="product-wrapper-1  mb-8">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Consumer Electric</h2>
          <a
            href="shop-boxed-banner.html"
            className="font-size-normal font-weight-bold ls-25 mb-0"
          >
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-4 mb-4">
            <div
              className="banner h-100 br-sm"
              style={{
                backgroundImage: `url(${banner})`,
                backgroundColor: "#252525",
              }}
            >
              <div className="banner-content content-top">
                <h5 className="banner-subtitle text-white font-weight-normal mb-2">
                  New Collection
                </h5>
                <hr className="banner-divider bg-white mb-2" />
                <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
                  Top Camera <br />{" "}
                  <span className="font-weight-normal text-capitalize">
                    Mirrorless
                  </span>
                </h3>
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-white btn-outline btn-rounded btn-sm"
                >
                  shop now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-sm-8">
            <div
              className="swiper-container swiper-theme"
              data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 2,
              'breakpoints': {
                  '992': {
                      'slidesPerView': 3
                  },
                  '1200': {
                      'slidesPerView': 4
                  }
              }
          }"
            >
              <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={professionalcamera1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={professionalcamera2}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          6% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Professional Pixel Camera
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$215.68</ins>
                        <del className="old-price">$230.45</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={latestSpeaker}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Latest Speaker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$250.68</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={washMashine1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={washMashine2}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Wash Machine</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$215.68</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={securityGuard}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Security Guard</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$320.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={HDtelevision}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          10% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">HD Television</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$450.68</ins>
                        <del className="old-price">$500.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img src={usb} alt="Product" width="216" height="243" />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          10% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">USB Receipt</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$26.89</ins>
                        <del className="old-price">$29.79</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={DataTransdertool}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Data Transformer Tool</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (6 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$64.47</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={iphone}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                          title="Add to cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-quickview w-icon-search"
                          title="Quickview"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare w-icon-compare"
                          title="Add to Compare"
                        ></a>
                      </div>
                      <div className="product-label-group">
                        <label className="product-label label-discount">
                          7% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Multi Functional Apple iPhone
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$136.26</ins>
                        <del className="old-price">$145.90</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumerElectric;
