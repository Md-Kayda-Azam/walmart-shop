import three1 from "../../assets/images/demos/demo1/products/3-1-1.jpg";
import three2 from "../../assets/images/demos/demo1/products/3-1-2.jpg";
import bag from "../../assets/images/demos/demo1/products/3-2.jpg";
import phone from "../../assets/images/demos/demo1/products/3-3.jpg";
import towel1 from "../../assets/images/demos/demo1/products/3-4-1.jpg";
import towel2 from "../../assets/images/demos/demo1/products/3-4-2.jpg";
import notecom from "../../assets/images/demos/demo1/products/3-5.jpg";
import comforter1 from "../../assets/images/demos/demo1/products/3-6-1.jpg";
import comforter2 from "../../assets/images/demos/demo1/products/3-6-2.jpg";
import music from "../../assets/images/demos/demo1/products/3-7.jpg";
import backpack1 from "../../assets/images/demos/demo1/products/3-8-1.jpg";
import backpack2 from "../../assets/images/demos/demo1/products/3-8-2.jpg";
import tool from "../../assets/images/demos/demo1/products/3-9.jpg";
import hairdye from "../../assets/images/demos/demo1/products/3-10.jpg";
const PopularDepartment = () => {
  return (
    <>
      <div className="container">
        <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1 ">
          Popular Departments
        </h2>
        <div className="tab tab-nav-boxed tab-nav-outline ">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item mr-2 mb-2">
              <a
                className="nav-link active br-sm font-size-md ls-normal"
                href="#tab1-1"
              >
                New arrivals
              </a>
            </li>
            <li className="nav-item mr-2 mb-2">
              <a
                className="nav-link br-sm font-size-md ls-normal"
                href="#tab1-2"
              >
                Best seller
              </a>
            </li>
            <li className="nav-item mr-2 mb-2">
              <a
                className="nav-link br-sm font-size-md ls-normal"
                href="#tab1-3"
              >
                most popular
              </a>
            </li>
            <li className="nav-item mr-0 mb-2">
              <a
                className="nav-link br-sm font-size-md ls-normal"
                href="#tab1-4"
              >
                Featured
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content product-wrapper ">
          <div className="tab-pane active pt-4" id="tab1-1">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={three1}
                        alt="Product"
                        width="300"
                        height="338"
                      />
                      <img
                        src={three2}
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
                      <a href="product-default.html">Classic Hat</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "60%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (1 Reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$53.00</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src={bag} alt="Product" width="300" height="338" />
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
                      <a href="product-default.html">Women’s White Handbag</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (3 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$26.62</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src={phone} alt="Product" width="300" height="338" />
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
                        Multi Funtional Apple iPhone
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
                      <a href="product-default.html" className="rating-reviews">
                        (5 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">136.26</ins>
                      <del className="old-price">$145.90</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={towel1}
                        alt="Product"
                        width="300"
                        height="338"
                      />
                      <img
                        src={towel2}
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
                      <a href="product-default.html">Fashion Blue Towel</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (8 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$26.55 - $29.99</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={notecom}
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
                        4% Off
                      </label>
                    </div>
                  </figure>
                  <div className="product-details">
                    <h4 className="product-name">
                      <a href="product-default.html">Apple Super Notecom</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (4 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$243.30</ins>
                      <del className="old-price">$253.50</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={comforter1}
                        alt="Product"
                        width="300"
                        height="338"
                      />
                      <img
                        src={comforter2}
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
                      <a href="product-default.html">Women’s Comforter</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (10 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$32.00 - $33.26</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src={music} alt="Product" width="300" height="338" />
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
                      <a href="product-default.html">Multi-colorful Music</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "60%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (3 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$260.59 - $297.83</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={backpack1}
                        alt="Product"
                        width="300"
                        height="338"
                      />
                      <img
                        src={backpack2}
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
                      <a href="product-default.html">Comfortable Backpack</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (6 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <ins className="new-price">$45.90</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img src={tool} alt="Product" width="300" height="338" />
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
                          style={{ width: "60%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (3 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <span className="price">$64.47</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src={hairdye}
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
                      <a href="product-default.html">Women’s hairdye</a>
                    </h4>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "60%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (3 reviews)
                      </a>
                    </div>
                    <div className="product-price">
                      <span className="price">$173.84</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDepartment;
