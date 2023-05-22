import productItem1 from "../../assets/images/demos/demo1/products/1-1-600x675.jpg";
import productItem2 from "../../assets/images/demos/demo1/products/1-2-600x675.jpg";
import productItem3 from "../../assets/images/demos/demo1/products/1-3-600x675.jpg";
import productItem4 from "../../assets/images/demos/demo1/products/1-4-600x675.jpg";
import zoomImage1 from "../../assets/images/demos/demo1/products/1-1-800x900.jpg";
import zoomImage2 from "../../assets/images/demos/demo1/products/1-2-800x900.jpg";
import kitchenCooker from "../../assets/images/demos/demo1/products/2-1.jpg";
import camera from "../../assets/images/demos/demo1/products/2-2.jpg";
import sport from "../../assets/images/demos/demo1/products/2-3.jpg";
const DealsHotTopSellerBest20 = () => {
  return (
    <>
      {" "}
      <div className="row deals-wrapper  mb-8">
        <div className="col-lg-9 mb-4">
          <div className="single-product h-100 br-sm">
            <h4 className="title-sm title-underline font-weight-bolder ls-normal">
              Deals Hot of The Day
            </h4>
            <div className="swiper">
              <div
                className="swiper-container swiper-theme nav-top swiper-nav-lg"
                data-swiper-options="{
                  'spaceBetween': 20,
                  'slidesPerView': 1
              }"
              >
                <div className="swiper-wrapper row cols-1 gutter-no">
                  <div className="swiper-slide">
                    <div className="product product-single row">
                      <div className="col-md-6">
                        <div className="product-gallery product-gallery-sticky product-gallery-vertical">
                          <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                            <div className="swiper-wrapper row cols-1 gutter-no">
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src={productItem1}
                                    data-zoom-image={zoomImage1}
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src={productItem2}
                                    data-zoom-image={zoomImage2}
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src={productItem3}
                                    data-zoom-image="assets/images/demos/demo1/products/1-3-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src={productItem4}
                                    data-zoom-image="assets/images/demos/demo1/products/1-4-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                            </div>
                            <button className="swiper-button-next"></button>
                            <button className="swiper-button-prev"></button>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                25% Off
                              </label>
                            </div>
                          </div>
                          <div
                            className="product-thumbs-wrap swiper-container"
                            data-swiper-options="{
                                          'direction': 'vertical',
                                          'breakpoints': {
                                              '0': {
                                                  'direction': 'horizontal',
                                                  'slidesPerView': 4
                                              },
                                              '992': {
                                                  'direction': 'vertical',
                                                  'slidesPerView': 'auto'
                                              }
                                          }
                                      }"
                          >
                            <div className="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                              <div className="product-thumb swiper-slide">
                                <img
                                  src={productItem1}
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                              <div className="product-thumb swiper-slide">
                                <img
                                  src={productItem2}
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                              <div className="product-thumb swiper-slide">
                                <img
                                  src={productItem3}
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                              <div className="product-thumb swiper-slide">
                                <img
                                  src={productItem4}
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-details scrollable">
                          <h2 className="product-title mb-1">
                            <a href="product-default.html">
                              Coat Pool Comfort Jacket
                            </a>
                          </h2>

                          <hr className="product-divider" />

                          <div className="product-price">
                            <ins className="new-price ls-50">
                              $150.00 - $180.00
                            </ins>
                          </div>

                          <div className="product-countdown-container flex-wrap">
                            <label className="mr-2 text-default">
                              Offer Ends In:
                            </label>
                            <div
                              className="product-countdown countdown-compact"
                              data-until="2022, 12, 31"
                              data-compact="true"
                            >
                              629 days, 11: 59: 52
                            </div>
                          </div>

                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "80%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="#" className="rating-reviews">
                              (3 Reviews)
                            </a>
                          </div>

                          <div className="product-form product-variation-form product-size-swatch mb-3">
                            <label className="mb-1">Size:</label>
                            <div className="flex-wrap d-flex align-items-center product-variations">
                              <a href="#" className="size">
                                Extra Large
                              </a>
                              <a href="#" className="size">
                                Large
                              </a>
                              <a href="#" className="size">
                                Medium
                              </a>
                              <a href="#" className="size">
                                Small
                              </a>
                            </div>
                            <a href="#" className="product-variation-clean">
                              Clean All
                            </a>
                          </div>

                          <div className="product-variation-price">
                            <span></span>
                          </div>

                          <div className="product-form pt-4">
                            <div className="product-qty-form mb-2 mr-2">
                              <div className="input-group">
                                <input
                                  className="quantity form-control"
                                  type="number"
                                  min="1"
                                  max="10000000"
                                />
                                <button className="quantity-plus w-icon-plus"></button>
                                <button className="quantity-minus w-icon-minus"></button>
                              </div>
                            </div>
                            <button className="btn btn-primary btn-cart">
                              <i className="w-icon-cart"></i>
                              <span>Add to Cart</span>
                            </button>
                          </div>

                          <div className="social-links-wrapper mt-1">
                            <div className="social-links">
                              <div className="social-icons social-no-color border-thin">
                                <a
                                  href="#"
                                  className="social-icon social-facebook w-icon-facebook"
                                ></a>
                                <a
                                  href="#"
                                  className="social-icon social-twitter w-icon-twitter"
                                ></a>
                                <a
                                  href="#"
                                  className="social-icon social-pinterest w-icon-pinterest"
                                ></a>
                              </div>
                            </div>
                            <span className="divider d-xs-show"></span>
                            <div className="product-link-wrapper d-flex">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product product-single row">
                      <div className="col-md-6">
                        <div className="product-gallery product-gallery-sticky product-gallery-vertical">
                          <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                            <div className="swiper-wrapper row cols-1 gutter-no">
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src="assets/images/demos/demo1/products/2-1-600x675.jpg"
                                    data-zoom-image="assets/images/demos/demo1/products/2-1-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src="assets/images/demos/demo1/products/2-2-600x675.jpg"
                                    data-zoom-image="assets/images/demos/demo1/products/2-2-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src="assets/images/demos/demo1/products/2-3-600x675.jpg"
                                    data-zoom-image="assets/images/demos/demo1/products/2-3-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                              <div className="swiper-slide">
                                <figure className="product-image">
                                  <img
                                    src="assets/images/demos/demo1/products/2-4-600x675.jpg"
                                    data-zoom-image="assets/images/demos/demo1/products/2-4-800x900.jpg"
                                    alt="Product Image"
                                    width="800"
                                    height="900"
                                  />
                                </figure>
                              </div>
                            </div>
                            <button className="swiper-button-next"></button>
                            <button className="swiper-button-prev"></button>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                25% Off
                              </label>
                            </div>
                          </div>
                          <div
                            className="product-thumbs-wrap swiper-container"
                            data-swiper-options="{
                                          'breakpoints': {
                                              '992': {
                                                  'direction': 'vertical',
                                                  'slidesPerView': 'auto'
                                              }
                                          }
                                      }"
                          >
                            <div className="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                              <div className="product-thumb swiper-slide">
                                <img
                                  src="assets/images/demos/demo1/products/2-1-600x675.jpg"
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                              <div className="product-thumb swiper-slide">
                                <img
                                  src="assets/images/demos/demo1/products/2-2-600x675.jpg"
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                              <div className="product-thumb swiper-slide">
                                <img
                                  src="assets/images/demos/demo1/products/2-3-600x675.jpg"
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                              <div className="product-thumb swiper-slide">
                                <img
                                  src="assets/images/demos/demo1/products/2-4-600x675.jpg"
                                  alt="Product thumb"
                                  width="60"
                                  height="68"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-details scrollable">
                          <h2 className="product-title mb-1">
                            <a href="product-default.html">
                              Coat Pool Comfort Jacket
                            </a>
                          </h2>

                          <hr className="product-divider" />

                          <div className="product-price">
                            <ins className="new-price ls-50">
                              $150.00 - $180.00
                            </ins>
                          </div>

                          <div className="product-countdown-container flex-wrap">
                            <label className="mr-2 text-default">
                              Offer Ends In:
                            </label>
                            <div
                              className="product-countdown countdown-compact"
                              data-until="2022, 12, 31"
                              data-compact="true"
                            >
                              629 days, 11: 59: 52
                            </div>
                          </div>

                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "80%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="#" className="rating-reviews">
                              (3 Reviews)
                            </a>
                          </div>

                          <div className="product-form product-variation-form product-size-swatch mb-3">
                            <label className="mb-1">Size:</label>
                            <div className="flex-wrap d-flex align-items-center product-variations">
                              <a href="#" className="size">
                                Extra Large
                              </a>
                              <a href="#" className="size">
                                Large
                              </a>
                              <a href="#" className="size">
                                Medium
                              </a>
                              <a href="#" className="size">
                                Small
                              </a>
                            </div>
                            <a href="#" className="product-variation-clean">
                              Clean All
                            </a>
                          </div>

                          <div className="product-variation-price">
                            <span></span>
                          </div>

                          <div className="product-form pt-4">
                            <div className="product-qty-form mb-2 mr-2">
                              <div className="input-group">
                                <input
                                  className="quantity form-control"
                                  type="number"
                                  min="1"
                                  max="10000000"
                                />
                                <button className="quantity-plus w-icon-plus"></button>
                                <button className="quantity-minus w-icon-minus"></button>
                              </div>
                            </div>
                            <button className="btn btn-primary btn-cart">
                              <i className="w-icon-cart"></i>
                              <span>Add to Cart</span>
                            </button>
                          </div>

                          <div className="social-links-wrapper mt-1">
                            <div className="social-links">
                              <div className="social-icons social-no-color border-thin">
                                <a
                                  href="#"
                                  className="social-icon social-facebook w-icon-facebook"
                                ></a>
                                <a
                                  href="#"
                                  className="social-icon social-twitter w-icon-twitter"
                                ></a>
                                <a
                                  href="#"
                                  className="social-icon social-pinterest fab fa-pinterest-p"
                                ></a>
                                <a
                                  href="#"
                                  className="social-icon social-whatsapp fab fa-whatsapp"
                                ></a>
                                <a
                                  href="#"
                                  className="social-icon social-youtube fab fa-linkedin-in"
                                ></a>
                              </div>
                            </div>
                            <span className="divider d-xs-show"></span>
                            <div className="product-link-wrapper d-flex">
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="swiper-button-prev"></button>
                <button className="swiper-button-next"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="widget widget-products widget-products-bordered h-100">
            <div className="widget-body br-sm h-100">
              <h4 className="title-sm title-underline font-weight-bolder ls-normal mb-2">
                Top 20 Best Seller
              </h4>
              <div className="swiper">
                <div
                  className="swiper-container swiper-theme nav-top"
                  data-swiper-options="{
                      'slidesPerView': 1,
                      'spaceBetween': 20,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 1
                          }
                      }
                  }"
                >
                  <div className="swiper-wrapper row cols-lg-1 cols-md-3">
                    <div className="swiper-slide product-widget-wrap">
                      <div className="product product-widget bb-no">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={kitchenCooker}
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Kitchen Cooker</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "60%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$150.60</ins>
                          </div>
                        </div>
                      </div>
                      <div className="product product-widget bb-no">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={camera}
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
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
                                style={{ width: "60%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$215.68</ins>
                            <del className="old-price">$230.45</del>
                          </div>
                        </div>
                      </div>
                      <div className="product product-widget">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={sport}
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              Sport Women’s Wear
                            </a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "60%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$220.20</ins>
                            <del className="old-price">$300.62</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-widget-wrap">
                      <div className="product product-widget bb-no">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo1/products/2-4.jpg"
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
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
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$250.68</ins>
                          </div>
                        </div>
                      </div>
                      <div className="product product-widget bb-no">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo1/products/2-5.jpg"
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              Men is Black Wrist Watch
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
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$135.60</ins>
                            <del className="old-price">$155.70</del>
                          </div>
                        </div>
                      </div>
                      <div className="product product-widget">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo1/products/2-6.jpg"
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
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
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$215.68</ins>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-widget-wrap">
                      <div className="product product-widget bb-no">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo1/products/2-7.jpg"
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Security Guard</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$320.00</ins>
                          </div>
                        </div>
                      </div>
                      <div className="product product-widget bb-no">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo1/products/2-8.jpg"
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              Apple Super Notecom
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
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$243.30</ins>
                            <del className="old-price">$253.50</del>
                          </div>
                        </div>
                      </div>
                      <div className="product product-widget">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/demos/demo1/products/2-9.jpg"
                              alt="Product"
                              width="105"
                              height="118"
                            />
                          </a>
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
                          </div>
                          <div className="product-price">
                            <ins className="new-price">$450.68</ins>
                            <del className="old-price">$500.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="swiper-button-next"></button>
                  <button className="swiper-button-prev"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsHotTopSellerBest20;
