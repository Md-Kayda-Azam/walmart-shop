import { useState } from "react";
import category2_1 from "../../assets/images/demos/demo1/categories/2-1.jpg";
import category2_2 from "../../assets/images/demos/demo1/categories/2-2.jpg";
import category2_3 from "../../assets/images/demos/demo1/categories/2-3.jpg";
import category2_4 from "../../assets/images/demos/demo1/categories/2-4.jpg";
import category2_5 from "../../assets/images/demos/demo1/categories/2-5.jpg";
import category2_6 from "../../assets/images/demos/demo1/categories/2-6.jpg";
const TopCategories = () => {
  const [vale, setVale] = useState({
    fas: false,
    fur: false,
    sho: false,
    spo: false,
    gam: false,
    com: false,
  });

  return (
    <>
      <section className="category-section top-category bg-grey pt-10 pb-10 ">
        <div className="container pb-2">
          <h2 className="title justify-content-center pt-1 ls-normal mb-5">
            Top Categories Of The Month
          </h2>
          <div className="swiper">
            <div className="swiper-container swiper-theme pg-show">
              <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
                <div
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                  onMouseOver={() =>
                    setVale({
                      fas: true,
                    })
                  }
                  onMouseLeave={() =>
                    setVale({
                      fas: false,
                    })
                  }
                >
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img
                      src={category2_1}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div
                    className="category-conten"
                    style={{ transform: "translate(0px, 0px)" }}
                  >
                    {!vale.fas && <h4 className="category-name">Fashion</h4>}
                    {vale.fas && (
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-primary btn-link btn-underline"
                        style={{ transform: "translate(59px, 0px)" }}
                      >
                        Shop Now
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                  onMouseOver={() =>
                    setVale({
                      fur: true,
                    })
                  }
                  onMouseLeave={() =>
                    setVale({
                      fur: false,
                    })
                  }
                >
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img
                      src={category2_2}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div className="category-conten">
                    {!vale.fur && <h4 className="category-name">Furniture</h4>}
                    {vale.fur && (
                      <a
                        href="shop-banner-sidebar.html"
                        style={{ transform: "translate(59px, 0px)" }}
                        className="btn btn-primary btn-link btn-underline"
                      >
                        Shop Now
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                  onMouseOver={() =>
                    setVale({
                      sho: true,
                    })
                  }
                  onMouseLeave={() =>
                    setVale({
                      sho: false,
                    })
                  }
                >
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img
                      src={category2_3}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div className="category-conten">
                    {!vale.sho && <h4 className="category-name">Shoes</h4>}
                    {vale.sho && (
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-primary btn-link btn-underline"
                        style={{ transform: "translate(59px, 0px)" }}
                      >
                        Shop Now
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                  onMouseOver={() =>
                    setVale({
                      spo: true,
                    })
                  }
                  onMouseLeave={() =>
                    setVale({
                      spo: false,
                    })
                  }
                >
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img
                      src={category2_4}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div className="category-conten">
                    {!vale.spo && <h4 className="category-name">Sports</h4>}
                    {vale.spo && (
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-primary btn-link btn-underline"
                        style={{ transform: "translate(59px, 0px)" }}
                      >
                        Shop Now
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                  onMouseOver={() =>
                    setVale({
                      gam: true,
                    })
                  }
                  onMouseLeave={() =>
                    setVale({
                      gam: false,
                    })
                  }
                >
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img
                      src={category2_5}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div className="category-conten">
                    {!vale.gam && <h4 className="category-name">Games</h4>}
                    {vale.gam && (
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-primary btn-link btn-underline"
                        style={{ transform: "translate(59px, 0px)" }}
                      >
                        Shop Now
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs"
                  onMouseOver={() =>
                    setVale({
                      com: true,
                    })
                  }
                  onMouseLeave={() =>
                    setVale({
                      com: false,
                    })
                  }
                >
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img
                      src={category2_6}
                      alt="Category"
                      width="130"
                      height="130"
                    />
                  </a>
                  <div className="category-conten">
                    {!vale.com && <h4 className="category-name">Computers</h4>}
                    {vale.com && (
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-primary btn-link btn-underline"
                        style={{ transform: "translate(59px, 0px)" }}
                      >
                        Shop Now
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
