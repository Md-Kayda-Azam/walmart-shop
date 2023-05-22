import blog1 from "../../assets/images/demos/demo1/blogs/1.jpg";
import blog2 from "../../assets/images/demos/demo1/blogs/2.jpg";
import blog3 from "../../assets/images/demos/demo1/blogs/3.jpg";
import blog4 from "../../assets/images/demos/demo1/blogs/4.jpg";
const FromOurBlog = () => {
  return (
    <>
      {" "}
      <div className="post-wrapper  mb-4">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">From Our Blog</h2>
          <a
            href="blog-listing.html"
            className="font-weight-bold font-size-normal"
          >
            View All Articles
          </a>
        </div>
        <div className="swiper">
          <div
            className="swiper-container swiper-theme"
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
                  'slidesPerView': 4
              }
          }
      }"
          >
            <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src={blog1}
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#4b6e91" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      Aliquam tincidunt mauris eurisus
                    </a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src={blog2}
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#cec9cf" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">Cras ornare tristique elit</a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src={blog3}
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#c9c7bb" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      Vivamus vestibulum ntulla nec ante
                    </a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide post text-center overlay-zoom">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src={blog4}
                      alt="Post"
                      width="280"
                      height="180"
                      style={{ backgroundColor: "#d8dce0" }}
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-meta">
                    by{" "}
                    <a href="#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="#" className="post-date mr-0">
                      03.05.2021
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                  </h4>
                  <a
                    href="post-single.html"
                    className="btn btn-link btn-dark btn-underline"
                  >
                    Read More<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FromOurBlog;
