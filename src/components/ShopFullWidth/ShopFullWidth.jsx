import banner from "../../assets/images/shop/banner2.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import shop1 from "../../assets/images/shop/1.jpg";
import shop2_1 from "../../assets/images/shop/2-1.jpg";
import shop2_2 from "../../assets/images/shop/2-2.jpg";
import shop3 from "../../assets/images/shop/3.jpg";
import shop4 from "../../assets/images/shop/4.jpg";
import shop5 from "../../assets/images/shop/5.jpg";
import shop6 from "../../assets/images/shop/6.jpg";
import shop7_1 from "../../assets/images/shop/7-1.jpg";
import shop7_2 from "../../assets/images/shop/7-2.jpg";
import shop8 from "../../assets/images/shop/8.jpg";
import shop9 from "../../assets/images/shop/9.jpg";
import shop10 from "../../assets/images/shop/10.jpg";
import shop11_1 from "../../assets/images/shop/11-1.jpg";
import shop11_2 from "../../assets/images/shop/11-2.jpg";
import shop12 from "../../assets/images/shop/12.jpg";
const ShopFullWidth = () => {
  return (
    <>
      <Header />
      <main className="main">
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="shop-banner-sidebar.html">Shop</a>
              </li>
              <li>Fullwidth</li>
            </ul>
          </div>
        </nav>

        <div className="page-content mb-10">
          <div
            className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundColor: "#FFC74E",
            }}
          >
            <div className="container banner-content">
              <h4 className="banner-subtitle font-weight-bold">
                Accessories Collection
              </h4>
              <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">
                Smart Watches
              </h3>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-rounded btn-icon-right"
              >
                Discover Now<i className="w-icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="container-fluid">
            <div className="shop-content">
              <div className="main-content">
                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <a
                      href="#"
                      className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                        btn-icon-left"
                    >
                      <i className="w-icon-category"></i>
                      <span>Filters</span>
                    </a>
                    <div className="toolbox-item toolbox-sort select-box text-dark">
                      <label>Sort By :</label>
                      <select name="orderby" className="form-control">
                        <option value="default" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price-low">
                          Sort by pric: low to high
                        </option>
                        <option value="price-high">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="toolbox-right">
                    <div className="toolbox-item toolbox-show select-box">
                      <select name="count" className="form-control">
                        <option value="9">Show 9</option>
                        <option value="12" selected="selected">
                          Show 12
                        </option>
                        <option value="24">Show 24</option>
                        <option value="36">Show 36</option>
                      </select>
                    </div>
                    <div className="toolbox-item toolbox-layout">
                      <a
                        href="shop-fullwidth-banner.html"
                        className="icon-mode-grid btn-layout active"
                      >
                        <i className="w-icon-grid"></i>
                      </a>
                      <a
                        href="shop-list.html"
                        className="icon-mode-list btn-layout"
                      >
                        <i className="w-icon-list"></i>
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="product-wrapper row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop1}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">3D Television</a>
                        </h3>
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
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$220.00 - $230.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop2_1}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <img
                            src={shop2_2}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-countdown-container">
                          <div
                            className="product-countdown countdown-compact"
                            data-until="2021, 9, 9"
                            data-format="DHMS"
                            data-compact="false"
                            data-labels-short="Days, Hours, Mins, Secs"
                          >
                            00:00:00:00
                          </div>
                        </div>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">
                            Alarm Clock With Lamp
                          </a>
                        </h3>
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
                            (10 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">$30.00</ins>
                            <del className="old-price">$60.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop3}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">Apple Laptop</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
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
                        <div className="product-pa-wrapper">
                          <div className="product-price">$1,000.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop4}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">
                            Attachable Charge Alarm
                          </a>
                        </h3>
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
                            (7 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$15.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop5}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">Best Travel Bag</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$83.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop6}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Sports</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">Black Stunt Motor</a>
                        </h3>
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
                            (12 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$374.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop7_1}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <img
                            src={shop7_2}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">Blue Sky Trunk</a>
                        </h3>
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
                        <div className="product-pa-wrapper">
                          <div className="product-price">$85.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop8}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Beauty</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">
                            Bodycare Smooth Powder
                          </a>
                        </h3>
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
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$25.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop9}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">Bright Green IPhone</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$950.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop10}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">
                            Cavin Fashion Suede Handbag
                          </a>
                        </h3>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$163.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop11_1}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <img
                            src={shop11_2}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Electronics</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">
                            Charming Design Watch
                          </a>
                        </h3>
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
                            (10 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">$30.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={shop12}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-horizontal">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Wishlist"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Compare"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quick View"
                          ></a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">Fashion</a>
                        </div>
                        <h3 className="product-name">
                          <a href="product-default.html">
                            classNameic Simple Backpack
                          </a>
                        </h3>
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
                        <div className="product-pa-wrapper">
                          <div className="product-price">$85.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul className="pagination">
                    <li className="prev disabled">
                      <a href="#" aria-label="Previous" aria-disabled="true">
                        <i className="w-icon-long-arrow-left"></i>Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        Next<i className="w-icon-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper">
                <div className="sidebar-overlay"></div>
                <a className="sidebar-close" href="#">
                  <i className="close-icon"></i>
                </a>

                <div className="sidebar-content scrollable">
                  <div className="filter-actions">
                    <label>Filter :</label>
                    <a href="#" className="btn btn-dark btn-link filter-clean">
                      Clean All
                    </a>
                  </div>
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>All Categories</span>
                    </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Babies</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                      <li>
                        <a href="#">Decoration</a>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Food</a>
                      </li>
                      <li>
                        <a href="#">Furniture</a>
                      </li>
                      <li>
                        <a href="#">Kitchen</a>
                      </li>
                      <li>
                        <a href="#">Medical</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Watches</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>Price</span>
                    </h3>
                    <div className="widget-body">
                      <ul className="filter-items search-ul">
                        <li>
                          <a href="#">$0.00 - $100.00</a>
                        </li>
                        <li>
                          <a href="#">$100.00 - $200.00</a>
                        </li>
                        <li>
                          <a href="#">$200.00 - $300.00</a>
                        </li>
                        <li>
                          <a href="#">$300.00 - $500.00</a>
                        </li>
                        <li>
                          <a href="#">$500.00+</a>
                        </li>
                      </ul>
                      <form className="price-range">
                        <input
                          type="number"
                          name="min_price"
                          className="min_price text-center"
                          placeholder="$min"
                        />
                        <span className="delimiter">-</span>
                        <input
                          type="number"
                          name="max_price"
                          className="max_price text-center"
                          placeholder="$max"
                        />
                        <a href="#" className="btn btn-primary btn-rounded">
                          Go
                        </a>
                      </form>
                    </div>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>Size</span>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">Extra Large</a>
                      </li>
                      <li>
                        <a href="#">Large</a>
                      </li>
                      <li>
                        <a href="#">Medium</a>
                      </li>
                      <li>
                        <a href="#">Small</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>Brand</span>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">Elegant Auto Group</a>
                      </li>
                      <li>
                        <a href="#">Green Grass</a>
                      </li>
                      <li>
                        <a href="#">Node Js</a>
                      </li>
                      <li>
                        <a href="#">NS8</a>
                      </li>
                      <li>
                        <a href="#">Red</a>
                      </li>
                      <li>
                        <a href="#">Skysuite Tech</a>
                      </li>
                      <li>
                        <a href="#">Sterling</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>Color</span>
                    </h3>
                    <ul className="widget-body filter-items item-check">
                      <li>
                        <a href="#">Black</a>
                      </li>
                      <li>
                        <a href="#">Blue</a>
                      </li>
                      <li>
                        <a href="#">Brown</a>
                      </li>
                      <li>
                        <a href="#">Green</a>
                      </li>
                      <li>
                        <a href="#">Grey</a>
                      </li>
                      <li>
                        <a href="#">Orange</a>
                      </li>
                      <li>
                        <a href="#">Yellow</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShopFullWidth;
