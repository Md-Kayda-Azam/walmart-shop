import banner from "../../assets/images/demos/demo1/banners/5.jpg";
import homeSafa from "../../assets/images/demos/demo1/products/6-1.jpg";
import electronicRiceCooker from "../../assets/images/demos/demo1/products/6-5.jpg";
import kitchenTable1 from "../../assets/images/demos/demo1/products/6-2-1.jpg";
import kitchenTable2 from "../../assets/images/demos/demo1/products/6-2-2.jpg";
import kitchenCooker from "../../assets/images/demos/demo1/products/6-6.jpg";
import tablelamp1 from "../../assets/images/demos/demo1/products/6-3-1.jpg";
import tablelamp2 from "../../assets/images/demos/demo1/products/6-3-2.jpg";
import electricPan from "../../assets/images/demos/demo1/products/6-7.jpg";
import latestChair from "../../assets/images/demos/demo1/products/6-4.jpg";
import autoMaticCrusher1 from "../../assets/images/demos/demo1/products/6-8-1.jpg";
import autoMaticCrusher2 from "../../assets/images/demos/demo1/products/6-8-2.jpg";
const HomeGardenKitchen = () => {
  return (
    <>
      {" "}
      <div className="product-wrapper-1  mb-7">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">Home Garden & Kitchen</h2>
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
                backgroundColor: " #EAEFF3",
              }}
            >
              <div className="banner-content content-top">
                <h5 className="banner-subtitle font-weight-normal mb-2">
                  Deals And Promotions
                </h5>
                <hr className="banner-divider bg-dark mb-2" />
                <h3 className="banner-title font-weight-bolder text-uppercase ls-25">
                  Trending <br />{" "}
                  <span className="font-weight-normal text-capitalize">
                    House Utensil
                  </span>
                </h3>
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-outline btn-rounded btn-sm"
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
                          src={homeSafa}
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
                        <a href="product-default.html">Home Sofa</a>
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
                        <ins className="new-price">$75.99</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={electronicRiceCooker}
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
                        <a href="product-default.html">Electric Rice-Cooker</a>
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
                        <ins className="new-price">$215.00</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={kitchenTable1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={kitchenTable2}
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
                          21% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Kitchen Table</a>
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
                        <ins className="new-price">$75.50</ins>
                        <del className="old-price">$95.68</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={kitchenCooker}
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
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-price">
                        <ins className="new-price">$150.60</ins>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={tablelamp1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={tablelamp2}
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
                        <a href="product-default.html">Table Lamp</a>
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
                        <ins className="new-price">$45.60</ins>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={electricPan}
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
                          12% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Electric Frying Pan</a>
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
                        <ins className="new-price">$137.35</ins>
                        <del className="old-price">$155.65</del>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide product-col">
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={latestChair}
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
                          18% Off
                        </label>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h4 className="product-name">
                        <a href="product-default.html">Latest Chair</a>
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
                        <ins className="new-price">$70.00</ins>
                        <del className="old-price">$85.00</del>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={autoMaticCrusher1}
                          alt="Product"
                          width="216"
                          height="243"
                        />
                        <img
                          src={autoMaticCrusher2}
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
                        <a href="product-default.html">Automatic Crusher</a>
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
                        <ins className="new-price">$220.25</ins>
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

export default HomeGardenKitchen;
