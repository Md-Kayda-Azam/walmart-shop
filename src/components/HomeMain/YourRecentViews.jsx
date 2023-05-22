import product1 from "../../assets/images/demos/demo1/products/7-1.jpg";
import product2 from "../../assets/images/demos/demo1/products/7-2.jpg";
import product3 from "../../assets/images/demos/demo1/products/7-3.jpg";
import product4 from "../../assets/images/demos/demo1/products/7-4.jpg";
import product5 from "../../assets/images/demos/demo1/products/7-5.jpg";
import product6 from "../../assets/images/demos/demo1/products/7-6.jpg";
import product7 from "../../assets/images/demos/demo1/products/7-7.jpg";
import product8 from "../../assets/images/demos/demo1/products/7-8.jpg";
const YourRecentViews = () => {
  return (
    <>
      {" "}
      <h2 className="title title-underline mb-4 ls-normal">
        Your Recent Views
      </h2>
      <div
        className="swiper-container swiper-theme shadow-swiper pb-4 mb-8"
        data-swiper-options="{
      'spaceBetween': 20,
      'slidesPerView': 2,
      'breakpoints': {
          '576': {
              'slidesPerView': 3
          },
          '768': {
              'slidesPerView': 5
          },
          '992': {
              'slidesPerView': 6
          },
          '1200': {
              'slidesPerView': 8
          }
      }
  }"
      >
        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product1}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Womens Fashion Handbag</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product2}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Electric Frying Pan</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product3}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Black Winter Skating</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product4}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">HD Television</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product5}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Home Sofa</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product6}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">USB Receipt</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product7}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Electric Rice-Cooker</a>
              </h4>
            </div>
          </div>
          <div className="swiper-slide product-wrap mb-0">
            <div className="product text-center product-absolute">
              <figure className="product-media">
                <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                  <img
                    src={product8}
                    alt="Category image"
                    width="130"
                    height="146"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </figure>
              <h4 className="product-name">
                <a href="product-default.html">Table Lamp</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default YourRecentViews;
