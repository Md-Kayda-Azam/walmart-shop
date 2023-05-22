import agents3 from "../../assets/images/agents/3-100x100.png";

const MostHN = () => {
  return (
    <>
      <div className="tab-pane" id="helpful-negative">
        <ul className="comments list-style-none">
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

export default MostHN;
