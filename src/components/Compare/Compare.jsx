import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import product1 from "../../assets/images/products/elements/1.jpg";
import product2 from "../../assets/images/products/elements/2.jpg";
import product3 from "../../assets/images/products/elements/3.jpg";
import product4 from "../../assets/images/products/elements/4-1.jpg";

const Compare = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title">Compare</h1>
          </div>
        </div>

        <nav className="breadcrumb-nav mb-2">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>Compare</li>
            </ul>
          </div>
        </nav>

        <div className="page-content mb-10 pb-2">
          <div className="container">
            <div className="compare-table">
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-products">
                <div className="compare-col compare-field">Product</div>
                <div className="compare-col compare-product">
                  <a href="#" className="btn remove-product">
                    <i className="w-icon-times-solid"></i>
                  </a>
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={product1}
                          alt="Product"
                          width="228"
                          height="257"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h3 className="product-name">
                        <a href="product-default.html">
                          Electronics Black Wrist Watch
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="compare-col compare-product">
                  <a href="#" className="btn remove-product">
                    <i className="w-icon-times-solid"></i>
                  </a>
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={product2}
                          alt="Product"
                          width="228"
                          height="257"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h3 className="product-name">
                        <a href="product-default.html">Summer Sport Shoes</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="compare-col compare-product">
                  <a href="#" className="btn remove-product">
                    <i className="w-icon-times-solid"></i>
                  </a>
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={product3}
                          alt="Product"
                          width="228"
                          height="257"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h3 className="product-name">
                        <a href="product-default.html">Charming Design Watch</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="compare-col compare-product">
                  <a href="#" className="btn remove-product">
                    <i className="w-icon-times-solid"></i>
                  </a>
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={product4}
                          alt="Product"
                          width="228"
                          height="257"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-cart w-icon-cart"
                        ></a>
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        ></a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <h3 className="product-name">
                        <a href="product-default.html">
                          Populated Gaming Mouse
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-price">
                <div className="compare-col compare-field">Price</div>
                <div className="compare-col compare-value">
                  <div className="product-price">
                    <span className="new-price">$40.00</span>
                  </div>
                </div>
                <div className="compare-col compare-value">
                  <div className="product-price">
                    <span className="new-price">$86.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                </div>
                <div className="compare-col compare-value">
                  <div className="product-price">
                    <span className="new-price">$30.00</span>
                  </div>
                </div>
                <div className="compare-col compare-value">
                  <div className="product-price">
                    <span className="new-price">$236.00</span>
                  </div>
                </div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-availability">
                <div className="compare-col compare-field">Availability</div>
                <div className="compare-col compare-value">In stock</div>
                <div className="compare-col compare-value">In stock</div>
                <div className="compare-col compare-value">In stock</div>
                <div className="compare-col compare-value">In stock</div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-description">
                <div className="compare-col compare-field">description</div>
                <div className="compare-col compare-value">
                  <ul className="list-style-none list-type-check">
                    <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                    <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                    <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                  </ul>
                </div>
                <div className="compare-col compare-value">
                  <ul className="list-style-none list-type-check">
                    <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                    <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                    <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                  </ul>
                </div>
                <div className="compare-col compare-value">
                  <ul className="list-style-none list-type-check">
                    <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                    <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                    <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                  </ul>
                </div>
                <div className="compare-col compare-value">
                  <ul className="list-style-none list-type-check">
                    <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                    <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                    <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                  </ul>
                </div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-reviews">
                <div className="compare-col compare-field">
                  Ratings &amp; Reviews
                </div>
                <div className="compare-col compare-rating">
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      (3 Reviews)
                    </a>
                  </div>
                </div>
                <div className="compare-col compare-rating">
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span
                        className="ratings"
                        style={{ width: "100%" }}
                      ></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      (5 Reviews)
                    </a>
                  </div>
                </div>
                <div className="compare-col compare-rating">
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      (8 Reviews)
                    </a>
                  </div>
                </div>
                <div className="compare-col compare-rating">
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "80%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      (3 Reviews)
                    </a>
                  </div>
                </div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-category">
                <div className="compare-col compare-field">Category</div>
                <div className="compare-col compare-value">Watches</div>
                <div className="compare-col compare-value">Shoes</div>
                <div className="compare-col compare-value">Watches</div>
                <div className="compare-col compare-value">Electronics</div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-meta">
                <div className="compare-col compare-field">SKU</div>
                <div className="compare-col compare-value">MS46891344</div>
                <div className="compare-col compare-value">MS46891389</div>
                <div className="compare-col compare-value">MS46891349</div>
                <div className="compare-col compare-value">MS4689158</div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-color">
                <div className="compare-col compare-field">Color</div>
                <div className="compare-col compare-value">
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#ff0000" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#00ff00" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#0000ff" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#ECEC23" }}
                    title="Red"
                  ></span>
                </div>
                <div className="compare-col compare-value">
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#000000" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#C0C0C0" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#808080" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#0080C0" }}
                    title="Red"
                  ></span>
                </div>
                <div className="compare-col compare-value">
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#000000" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#95E8E8" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#FA0AF3" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#0A4BFA" }}
                    title="Red"
                  ></span>
                </div>
                <div className="compare-col compare-value">
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#000000" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#0000A0" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#42FDF9" }}
                    title="Red"
                  ></span>
                  <span
                    className="swatch"
                    style={{ backgroundColor: "#9BA3A4" }}
                    title="Red"
                  ></span>
                </div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-size">
                <div className="compare-col compare-field">Size</div>
                <div className="compare-col compare-value">Medium, Small</div>
                <div className="compare-col compare-value">Large, Medium</div>
                <div className="compare-col compare-value">Small</div>
                <div className="compare-col compare-value">Medium</div>
              </div>
              <div className="compare-row cols-xl-5 cols-lg-4 cols-md-3 cols-2 compare-brand">
                <div className="compare-col compare-field">Brand</div>
                <div className="compare-col compare-value">Apple</div>
                <div className="compare-col compare-value">New Balance</div>
                <div className="compare-col compare-value">Node Js</div>
                <div className="compare-col compare-value">Green Grass</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Compare;
