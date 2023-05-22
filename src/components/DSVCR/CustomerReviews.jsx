import { NavLink, Outlet } from "react-router-dom";

const CustomerReviews = () => {
  return (
    <>
      <div className="tab-pane" id="product-tab-reviews">
        <div className="row mb-4">
          <div className="col-xl-4 col-lg-5 mb-4">
            <div className="ratings-wrapper">
              <div className="avg-rating-container">
                <h4 className="avg-mark font-weight-bolder ls-50">3.3</h4>
                <div className="avg-rating">
                  <p className="text-dark mb-1">Average Rating</p>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="#" className="rating-reviews">
                      (3 Reviews)
                    </a>
                  </div>
                </div>
              </div>
              <div className="ratings-value d-flex align-items-center text-dark ls-25">
                <span className="text-dark font-weight-bold">66.7%</span>
                Recommended<span className="count">(2 of 3)</span>
              </div>
              <div className="ratings-list">
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "100%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <div className="progress-bar progress-bar-sm ">
                    <span></span>
                  </div>
                  <div className="progress-value">
                    <mark>70%</mark>
                  </div>
                </div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "80%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <div className="progress-bar progress-bar-sm ">
                    <span></span>
                  </div>
                  <div className="progress-value">
                    <mark>30%</mark>
                  </div>
                </div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "60%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <div className="progress-bar progress-bar-sm ">
                    <span></span>
                  </div>
                  <div className="progress-value">
                    <mark>40%</mark>
                  </div>
                </div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "40%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <div className="progress-bar progress-bar-sm ">
                    <span></span>
                  </div>
                  <div className="progress-value">
                    <mark>0%</mark>
                  </div>
                </div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "20%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <div className="progress-bar progress-bar-sm ">
                    <span></span>
                  </div>
                  <div className="progress-value">
                    <mark>0%</mark>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 mb-4">
            <div className="review-form-wrapper">
              <h3 className="title tab-pane-title font-weight-bold mb-1">
                Submit Your Review
              </h3>
              <p className="mb-3">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form action="#" method="POST" className="review-form">
                <div className="rating-form">
                  <label htmlFor="rating">Your Rating Of This Product :</label>
                  <span className="rating-stars">
                    <a className="star-1" href="#">
                      1
                    </a>
                    <a className="star-2" href="#">
                      2
                    </a>
                    <a className="star-3" href="#">
                      3
                    </a>
                    <a className="star-4" href="#">
                      4
                    </a>
                    <a className="star-5" href="#">
                      5
                    </a>
                  </span>
                  <select
                    name="rating"
                    id="rating"
                    required=""
                    style={{ display: "none" }}
                  >
                    <option value="">Rate…</option>
                    <option value="5">Perfect</option>
                    <option value="4">Good</option>
                    <option value="3">Average</option>
                    <option value="2">Not that bad</option>
                    <option value="1">Very poor</option>
                  </select>
                </div>
                <textarea
                  cols="30"
                  rows="6"
                  placeholder="Write Your Review Here..."
                  className="form-control"
                  id="review"
                ></textarea>
                <div className="row gutter-md">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      id="author"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      id="email_1"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="save-checkbox"
                  />
                  <label htmlFor="save-checkbox">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                Show All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="helpful-positive" className="nav-link">
                Most Helpful Positive
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="helpful-negative" className="nav-link">
                Most Helpful Negative
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="highest-rating" className="nav-link">
                Highest Rating
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="lowest-rating" className="nav-link">
                Lowest Rating
              </NavLink>
            </li>
          </ul>
          <Outlet />
          <div className="tab-content"></div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
