import agents1 from "../../assets/images/agents/1-100x100.png";
import agents2 from "../../assets/images/agents/2-100x100.png";
import agents3 from "../../assets/images/agents/3-100x100.png";
import reviewImage1 from "../../assets/images/products/default/review-img-1.jpg";
import reviewImage2 from "../../assets/images/products/default/review-img-2.jpg";
import reviewImage3 from "../../assets/images/products/default/review-img-3.jpg";
const ShowAll = () => {
  return (
    <>
      <div className="tab-pane active" id="show-all">
        <ul className="comments list-style-none">
          <li className="comment">
            <div className="comment-body">
              <figure className="comment-avatar">
                <img
                  src={agents1}
                  alt="Commenter Avatar"
                  width="90"
                  height="90"
                />
              </figure>
              <div className="comment-content">
                <h4 className="comment-author">
                  <a href="#">John Doe</a>
                  <span className="comment-date">
                    March 22, 2021 at 1:54 pm
                  </span>
                </h4>
                <div className="ratings-container comment-rating">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "60%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <p>
                  pellentesque habitant morbi tristique senectus et. In dictum
                  non consectetur a erat. Nunc ultrices eros in cursus turpis
                  massa tincidunt ante in nibh mauris cursus mattis. Cras ornare
                  arcu dui vivamus arcu felis bibendum ut tristique.
                </p>
                <div className="comment-action">
                  <a
                    href="#"
                    className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                  >
                    <i className="far fa-thumbs-up"></i>
                    Helpful (1)
                  </a>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                  >
                    <i className="far fa-thumbs-down"></i>
                    Unhelpful (0)
                  </a>
                  <div className="review-image">
                    <a href="#">
                      <figure>
                        <img
                          src={reviewImage1}
                          width="60"
                          height="60"
                          alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                          data-zoom-image="assets/images/products/default/review-img-1-800x900.jpg"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="comment">
            <div className="comment-body">
              <figure className="comment-avatar">
                <img
                  src={agents2}
                  alt="Commenter Avatar"
                  width="90"
                  height="90"
                />
              </figure>
              <div className="comment-content">
                <h4 className="comment-author">
                  <a href="#">John Doe</a>
                  <span className="comment-date">
                    March 22, 2021 at 1:52 pm
                  </span>
                </h4>
                <div className="ratings-container comment-rating">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "80%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <p>
                  Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                  Ultrices eros in cursus turpis massa tincidunt ante in nibh
                  mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis
                  bibendum ut tristique.
                </p>
                <div className="comment-action">
                  <a
                    href="#"
                    className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                  >
                    <i className="far fa-thumbs-up"></i>
                    Helpful (1)
                  </a>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                  >
                    <i className="far fa-thumbs-down"></i>
                    Unhelpful (0)
                  </a>
                  <div className="review-image">
                    <a href="#">
                      <figure>
                        <img
                          src={reviewImage2}
                          width="60"
                          height="60"
                          alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                          data-zoom-image="assets/images/products/default/review-img-2.jpg"
                        />
                      </figure>
                    </a>
                    <a href="#">
                      <figure>
                        <img
                          src={reviewImage3}
                          width="60"
                          height="60"
                          alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                          data-zoom-image="assets/images/products/default/review-img-3.jpg"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="comment">
            <div className="comment-body">
              <figure className="comment-avatar">
                <img
                  src={agents3}
                  alt="Commenter Avatar"
                  width="90"
                  height="90"
                />
              </figure>
              <div className="comment-content">
                <h4 className="comment-author">
                  <a href="#">John Doe</a>
                  <span className="comment-date">
                    March 22, 2021 at 1:21 pm
                  </span>
                </h4>
                <div className="ratings-container comment-rating">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "60%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                </div>
                <p>
                  In fermentum et sollicitudin ac orci phasellus. A condimentum
                  vitae sapien pellentesque habitant morbi tristique senectus
                  et. In dictum non consectetur a erat. Nunc scelerisque viverra
                  mauris in aliquam sem fringilla.
                </p>
                <div className="comment-action">
                  <a
                    href="#"
                    className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                  >
                    <i className="far fa-thumbs-up"></i>
                    Helpful (0)
                  </a>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                  >
                    <i className="far fa-thumbs-down"></i>
                    Unhelpful (1)
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShowAll;
