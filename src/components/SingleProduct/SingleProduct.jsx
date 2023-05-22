import productNav from "../../assets/images/products/product-nav-prev.jpg";
import productNav1 from "../../assets/images/products/product-nav-next.jpg";
import productNav2 from "../../assets/images/products/default/1-800x900.jpg";
import productNav3 from "../../assets/images/products/default/2-800x900.jpg";
import productDefault3 from "../../assets/images/products/default/3-800x900.jpg";
import sku from "../../assets/images/products/brand/brand-1.jpg";
import banner3 from "../../assets/images/shop/banner3.jpg";
import shop13 from "../../assets/images/shop/13.jpg";
import shop14 from "../../assets/images/shop/14.jpg";
import shop15 from "../../assets/images/shop/15.jpg";
import shop16 from "../../assets/images/shop/16.jpg";
import bought1 from "../../assets/images/products/default/bought-1.jpg";
import bought2 from "../../assets/images/products/default/bought-2.jpg";
import bought3 from "../../assets/images/products/default/bought-3.jpg";

import productDefault1_1 from "../../assets/images/products/default/1-1.jpg";
import productDefault1_2 from "../../assets/images/products/default/1-2.jpg";
import productDefault_2 from "../../assets/images/products/default/2.jpg";
import productDefault_3 from "../../assets/images/products/default/3.jpg";
import productDefault4_1 from "../../assets/images/products/default/4-1.jpg";
import productDefault4_2 from "../../assets/images/products/default/4-2.jpg";
import productDefault5 from "../../assets/images/products/default/5.jpg";
import productDefault6 from "../../assets/images/products/default/6.jpg";
import productDefault7_1 from "../../assets/images/products/default/7-1.jpg";
import productDefault7_2 from "../../assets/images/products/default/7-2.jpg";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { NavLink, Outlet } from "react-router-dom";
const SingleProduct = () => {
  return (
    <>
      <Header />
      <main className="main mb-10 pb-1">
        <nav className="breadcrumb-nav container">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>Products</li>
          </ul>
          <ul className="product-nav list-style-none">
            <li className="product-nav-prev">
              <a href="#">
                <i className="w-icon-angle-left"></i>
              </a>
              <span className="product-nav-popup">
                <img src={productNav} alt="Product" width="110" height="110" />
                <span className="product-name">Soft Sound Maker</span>
              </span>
            </li>
            <li className="product-nav-next">
              <a href="#">
                <i className="w-icon-angle-right"></i>
              </a>
              <span className="product-nav-popup">
                <img src={productNav1} alt="Product" width="110" height="110" />
                <span className="product-name">Fabulous Sound Speaker</span>
              </span>
            </li>
          </ul>
        </nav>

        <div className="page-content">
          <div className="container">
            <div className="row gutter-lg">
              <div className="main-content">
                <div className="product product-single row">
                  <div className="col-md-6 mb-6">
                    <div className="product-gallery product-gallery-sticky">
                      <div
                        className="swiper-container product-single-swiper swiper-theme nav-inner"
                        data-swiper-options="{
                                  'navigation': {
                                      'nextEl': '.swiper-button-next',
                                      'prevEl': '.swiper-button-prev'
                                  }
                              }"
                      >
                        <div className="swiper-wrapper row cols-1 gutter-no">
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={productNav2}
                                data-zoom-image={productNav2}
                                alt="Electronics Black Wrist Watch"
                                width="800"
                                height="900"
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={productNav3}
                                data-zoom-image={productNav3}
                                alt="Electronics Black Wrist Watch"
                                width="488"
                                height="549"
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={productDefault3}
                                data-zoom-image={productDefault3}
                                alt="Electronics Black Wrist Watch"
                                width="800"
                                height="900"
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src="assets/images/products/default/4-800x900.jpg"
                                data-zoom-image="assets/images/products/default/4-800x900.jpg"
                                alt="Electronics Black Wrist Watch"
                                width="800"
                                height="900"
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src="assets/images/products/default/5-800x900.jpg"
                                data-zoom-image="assets/images/products/default/5-800x900.jpg"
                                alt="Electronics Black Wrist Watch"
                                width="800"
                                height="900"
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src="assets/images/products/default/6-800x900.jpg"
                                data-zoom-image="assets/images/products/default/6-800x900.jpg"
                                alt="Electronics Black Wrist Watch"
                                width="800"
                                height="900"
                              />
                            </figure>
                          </div>
                        </div>
                        <button className="swiper-button-next"></button>
                        <button className="swiper-button-prev"></button>
                        <a
                          href="#"
                          className="product-gallery-btn product-image-full"
                        >
                          <i className="w-icon-zoom"></i>
                        </a>
                      </div>
                      <div
                        className="product-thumbs-wrap swiper-container"
                        data-swiper-options="{
                                  'navigation': {
                                      'nextEl': '.swiper-button-next',
                                      'prevEl': '.swiper-button-prev'
                                  }
                              }"
                      >
                        <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                          <div className="product-thumb swiper-slide">
                            <img
                              src={productNav}
                              alt="Product Thumb"
                              width="800"
                              height="900"
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src={productNav1}
                              alt="Product Thumb"
                              width="800"
                              height="900"
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src={productNav2}
                              alt="Product Thumb"
                              width="800"
                              height="900"
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src={productNav3}
                              alt="Product Thumb"
                              width="800"
                              height="900"
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src="assets/images/products/default/5-800x900.jpg"
                              alt="Product Thumb"
                              width="800"
                              height="900"
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src="assets/images/products/default/6-800x900.jpg"
                              alt="Product Thumb"
                              width="800"
                              height="900"
                            />
                          </div>
                        </div>
                        <button className="swiper-button-next"></button>
                        <button className="swiper-button-prev"></button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 mb-md-6">
                    <div
                      className="product-details"
                      data-sticky-options="{'minWidth': 767}"
                    >
                      <h1 className="product-title">
                        Electronics Black Wrist Watch
                      </h1>
                      <div className="product-bm-wrapper">
                        <figure className="brand">
                          <img src={sku} alt="Brand" width="102" height="48" />
                        </figure>
                        <div className="product-meta">
                          <div className="product-categories">
                            Category:
                            <span className="product-category">
                              <a href="#">Electronics</a>
                            </span>
                          </div>
                          <div className="product-sku">
                            SKU: <span>MS46891340</span>
                          </div>
                        </div>
                      </div>

                      <hr className="product-divider" />

                      <div className="product-price">
                        <ins className="new-price">$40.00</ins>
                      </div>

                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="#product-tab-reviews"
                          className="rating-reviews scroll-to"
                        >
                          (3 Reviews)
                        </a>
                      </div>

                      <div className="product-short-desc">
                        <ul className="list-type-check list-style-none">
                          <li>
                            Ultrices eros in cursus turpis massa cursus mattis.
                          </li>
                          <li>
                            Volutpat ac tincidunt vitae semper quis lectus.
                          </li>
                          <li>
                            Aliquam id diam maecenas ultricies mi eget mauris.
                          </li>
                        </ul>
                      </div>

                      <hr className="product-divider" />

                      <div className="product-form product-variation-form product-color-swatch">
                        <label>Color:</label>
                        <div className="d-flex align-items-center product-variations">
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#ffcc01" }}
                          ></a>
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#ca6d00" }}
                          ></a>
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#1c93cb" }}
                          ></a>
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#ccc" }}
                          ></a>
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#333" }}
                          ></a>
                        </div>
                      </div>
                      <div className="product-form product-variation-form product-size-swatch">
                        <label className="mb-1">Size:</label>
                        <div className="flex-wrap d-flex align-items-center product-variations">
                          <a href="#" className="size">
                            Small
                          </a>
                          <a href="#" className="size">
                            Medium
                          </a>
                          <a href="#" className="size">
                            Large
                          </a>
                          <a href="#" className="size">
                            Extra Large
                          </a>
                        </div>
                        <a href="#" className="product-variation-clean">
                          Clean All
                        </a>
                      </div>

                      <div className="product-variation-price">
                        <span></span>
                      </div>

                      <div className="fix-bottom product-sticky-content sticky-content">
                        <div className="product-form container">
                          <div className="product-qty-form">
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
                      </div>

                      <div className="social-links-wrapper">
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
                          >
                            <span></span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                          >
                            <span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frequently-bought-together mt-5">
                  <h2 className="title title-underline">
                    Frequently Bought Together
                  </h2>
                  <div className="bought-together-products row mt-8 pb-4">
                    <div className="product product-wrap text-center">
                      <figure className="product-media">
                        <img
                          src={bought1}
                          alt="Product"
                          width="138"
                          height="138"
                        />
                        <div className="product-checkbox">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="product_check1"
                            name="product_check1"
                          />
                          <label></label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Electronics Black Wrist Watch</a>
                        </h4>
                        <div className="product-price">$40.00</div>
                      </div>
                    </div>
                    <div className="product product-wrap text-center">
                      <figure className="product-media">
                        <img
                          src={bought2}
                          alt="Product"
                          width="138"
                          height="138"
                        />
                        <div className="product-checkbox">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="product_check2"
                            name="product_check2"
                          />
                          <label></label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">Apple Laptop</a>
                        </h4>
                        <div className="product-price">$1,800.00</div>
                      </div>
                    </div>
                    <div className="product product-wrap text-center">
                      <figure className="product-media">
                        <img
                          src={bought3}
                          alt="Product"
                          width="138"
                          height="138"
                        />
                        <div className="product-checkbox">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="product_check3"
                            name="product_check3"
                          />
                          <label></label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="#">White Lenovo Headphone</a>
                        </h4>
                        <div className="product-price">$34.00</div>
                      </div>
                    </div>
                    <div className="product-button">
                      <div className="bought-price font-weight-bolder text-primary ls-50">
                        $1,874.00
                      </div>
                      <div className="bought-count">For 3 items</div>
                      <a href="cart.html" className="btn btn-dark btn-rounded">
                        Add All To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <NavLink to="" className="nav-link active">
                        Description
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="spacification" className="nav-link">
                        Specification
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="vendor-info" className="nav-link">
                        Vendor Info
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="customar-reviews" className="nav-link">
                        Customer Reviews (3)
                      </NavLink>
                    </li>
                  </ul>
                  <Outlet />
                  <div className="tab-content"></div>
                </div>
                <section className="vendor-product-section">
                  <div className="title-link-wrapper mb-4">
                    <h4 className="title text-left">
                      More Products From This Vendor
                    </h4>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                    >
                      More Products<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                          'spaceBetween': 20,
                          'slidesPerView': 2,
                          'breakpoints': {
                              '576': {
                                  'slidesPerView': 3
                              },
                              '768': {
                                  'slidesPerView': 4
                              },
                              '992': {
                                  'slidesPerView': 3
                              }
                          }
                      }"
                  >
                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault1_1}
                              alt="Product"
                              width="300"
                              height="338"
                            />
                            <img
                              src={productDefault1_2}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Accessories</a>
                          </div>
                          <h4 className="product-name">
                            <a href="product-default.html">Sticky Pencil</a>
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
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$20.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault_2}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Electronics</a>
                          </div>
                          <h4 className="product-name">
                            <a href="product-default.html">
                              Mini Multi-Functional Cooker
                            </a>
                          </h4>
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
                            <div className="product-price">
                              <ins className="new-price">$480.00</ins>
                              <del className="old-price">$534.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault_3}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Sports</a>
                          </div>
                          <h4 className="product-name">
                            <a href="product-default.html">Skate Pan</a>
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
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              <ins className="new-price">$278.00</ins>
                              <del className="old-price">$310.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault4_1}
                              alt="Product"
                              width="300"
                              height="338"
                            />
                            <img
                              src={productDefault4_2}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <div className="product-cat">
                            <a href="shop-banner-sidebar.html">Accessories</a>
                          </div>
                          <h4 className="product-name">
                            <a href="product-default.html">Clip Attachment</a>
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
                          <div className="product-pa-wrapper">
                            <div className="product-price">$40.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="related-product-section">
                  <div className="title-link-wrapper mb-4">
                    <h4 className="title">Related Products</h4>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                    >
                      More Products<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                          'spaceBetween': 20,
                          'slidesPerView': 2,
                          'breakpoints': {
                              '576': {
                                  'slidesPerView': 3
                              },
                              '768': {
                                  'slidesPerView': 4
                              },
                              '992': {
                                  'slidesPerView': 3
                              }
                          }
                      }"
                  >
                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault5}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Drone</a>
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
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$632.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault6}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Official Camera</a>
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
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              <ins className="new-price">$263.00</ins>
                              <del className="old-price">$300.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src={productDefault7_1}
                              alt="Product"
                              width="300"
                              height="338"
                            />
                            <img
                              src={productDefault7_2}
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Phone Charge Pad</a>
                          </h4>
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
                              (8 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$23.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/products/default/8.jpg"
                              alt="Product"
                              width="300"
                              height="338"
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
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            ></a>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">
                              Fashionalble Pencil
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
                          <div className="product-pa-wrapper">
                            <div className="product-price">$50.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                <div className="sidebar-overlay"></div>
                <a className="sidebar-close" href="#">
                  <i className="close-icon"></i>
                </a>
                <a href="#" className="sidebar-toggle d-flex d-lg-none">
                  <i className="fas fa-chevron-left"></i>
                </a>
                <div className="sidebar-content scrollable">
                  <div className="sticky-sidebar">
                    <div className="widget widget-icon-box mb-6">
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-truck"></i>
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">
                            Free Shipping & Returns
                          </h4>
                          <p>For all orders over $99</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-bag"></i>
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Secure Payment</h4>
                          <p>We ensure secure payment</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-money"></i>
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">
                            Money Back Guarantee
                          </h4>
                          <p>Any back within 30 days</p>
                        </div>
                      </div>
                    </div>

                    <div className="widget widget-banner mb-9">
                      <div className="banner banner-fixed br-sm">
                        <figure>
                          <img
                            src={banner3}
                            alt="Banner"
                            width="266"
                            height="220"
                            style={{ backgroundColor: "#1D2D44" }}
                          />
                        </figure>
                        <div className="banner-content">
                          <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                            40<sup className="font-weight-bold">%</sup>
                            <sub className="font-weight-bold text-uppercase ls-25">
                              Off
                            </sub>
                          </div>
                          <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                            Ultimate Sale
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="widget widget-products">
                      <div className="title-link-wrapper mb-2">
                        <h4 className="title title-link font-weight-bold">
                          More Products
                        </h4>
                      </div>

                      <div className="swiper nav-top">
                        <div className="swiper-container swiper-theme nav-top">
                          <div className="swiper-wrapper">
                            <div className="widget-col swiper-slide">
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      src={shop13}
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">Smart Watch</a>
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
                                    $80.00 - $90.00
                                  </div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      src={shop14}
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">Sky Medical Facility</a>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <div className="product-price">$58.00</div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      src={shop15}
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">Black Stunt Motor</a>
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
                                  <div className="product-price">$374.00</div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-col swiper-slide">
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      src={shop16}
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">Skate Pan</a>
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
                                  <div className="product-price">$278.00</div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      src="assets/images/shop/17.jpg"
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">Modern Cooker</a>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <div className="product-price">$324.00</div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <a href="#">
                                    <img
                                      src="assets/images/shop/18.jpg"
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </a>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">CT Machine</a>
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
                                  <div className="product-price">$236.00</div>
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
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleProduct;
