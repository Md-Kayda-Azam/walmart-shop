import banners from "../../assets/images/demos/demo1/banners/2.jpg";
import clothingMen from "../../assets/images/demos/demo1/products/4-1.jpg";
import bestTbag1 from "../../assets/images/demos/demo1/products/4-5-1.jpg";
import bestTbag2 from "../../assets/images/demos/demo1/products/4-5-2.jpg";
import womenBag1 from "../../assets/images/demos/demo1/products/4-2-1.jpg";
import womenBag2 from "../../assets/images/demos/demo1/products/4-2-2.jpg";
import grayShose1 from "../../assets/images/demos/demo1/products/4-6.jpg";
import skati from "../../assets/images/demos/demo1/products/4-3.jpg";
import watch from "../../assets/images/demos/demo1/products/4-7.jpg";
import womenWear1 from "../../assets/images/demos/demo1/products/4-4-1.jpg";
import womenWear2 from "../../assets/images/demos/demo1/products/4-4-2.jpg";
import hat from "../../assets/images/demos/demo1/products/4-8.jpg";
const ClothingApparel = () => {
  return (
    <>
      <div className="product-wrapper-1 mb-5">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Clothing & Apparel</h2>
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
                backgroundImage: `url(${banners})`,
                backgroundColor: "#ebeced",
              }}
            >
              <div className="banner-content content-top">
                <h5 className="banner-subtitle font-weight-normal mb-2">
                  Weekend Sale
                </h5>
                <hr className="banner-divider bg-dark mb-2" />
                <h3 className="banner-title font-weight-bolder ls-25 text-uppercase">
                  New Arrivals
                  <br />
                  <span className="font-weight-normal text-capitalize">
                    Collection
                  </span>
                </h3>
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-outline btn-rounded btn-sm"
                >
                  shop Now
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
                      <a href="#">
                        <img
                          src={clothingMen}
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
                        <a href="product-default.html">Men’s Clothing</a>
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
                        <ins className="new-price">$23.99</ins>
                        <del className="old-price">$25.68</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={bestTbag1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={bestTbag2}
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
                        <a href="product-default.html">Best Travel Bag</a>
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
                        <ins className="new-price">$25.68</ins>
                        <del className="old-price">$28.99</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={womenBag1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={womenBag2}
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
                        <a href="product-default.html">
                          Women’s Fashion Handbag
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
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$25.68</ins>
                        <del className="old-price">$25.89</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={grayShose1}
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
                        <a href="product-default.html">Gray Leather Shoes</a>
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
                        <ins className="new-price">$26.88</ins>
                        <del className="old-price">$27.89</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={skati}
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
                        <a href="product-default.html">Black Winter Skating</a>
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
                        <ins className="new-price">$40.86</ins>
                        <del className="old-price">$45.89</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={watch}
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
                        <a href="product-default.html">
                          Mens Black Wrist Watch
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
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$135.60</ins>
                        <del className="old-price">$155.70</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src={womenWear1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={womenWear2}
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
                        <a href="product-default.html">Sport Womens Wear</a>
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
                        <ins className="new-price">$220.20</ins>
                        <del className="old-price">$300.62</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="#">
                        <img src={hat} alt="Product" width="216" height="243" />
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
                        <a href="product-default.html">Women’s Hiking Hat</a>
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
                        <span className="price">$53.00</span>
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

export default ClothingApparel;
