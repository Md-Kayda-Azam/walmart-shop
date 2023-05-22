import banner from "../../assets/images/products/video-banner-610x300.jpg";
const Detail = () => {
  return (
    <>
      {" "}
      <div className="tab-pane active" id="product-tab-description">
        <div className="row mb-4">
          <div className="col-md-6 mb-5">
            <h4 className="title tab-pane-title font-weight-bold mb-2">
              Detail
            </h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt arcu cursus vitae congue mauris.
              Sagittis id consectetur purus ut. Tellus rutrum tellus pelle Vel
              pretium lectus quam id leo in vitae turpis massa.
            </p>
            <ul className="list-type-check">
              <li>
                Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                elit.
              </li>
              <li>Vivamus finibus vel mauris ut vehicula.</li>
              <li>
                Nullam a magna porttitor, dictum risus nec, faucibus sapien.
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-5">
            <div className="banner banner-video product-video br-xs">
              <figure className="banner-media">
                <a href="#">
                  <img
                    src={banner}
                    alt="banner"
                    width="610"
                    height="300"
                    style={{ backgroundColor: "#bebebe" }}
                  />
                </a>
                <a
                  className="btn-play-video btn-iframe"
                  href="assets/video/memory-of-a-woman.mp4"
                ></a>
              </figure>
            </div>
          </div>
        </div>
        <div className="row cols-md-3">
          <div className="mb-3">
            <h5 className="sub-title font-weight-bold">
              <span className="mr-3">1.</span>Free Shipping &amp; Return
            </h5>
            <p className="detail pl-5">
              We offer free shipping for products on orders above 50$ and offer
              free delivery for all orders in US.
            </p>
          </div>
          <div className="mb-3">
            <h5 className="sub-title font-weight-bold">
              <span>2.</span>Free and Easy Returns
            </h5>
            <p className="detail pl-5">
              We guarantee our products and you could get back all of your money
              anytime you want in 30 days.
            </p>
          </div>
          <div className="mb-3">
            <h5 className="sub-title font-weight-bold">
              <span>3.</span>Special Financing
            </h5>
            <p className="detail pl-5">
              Get 20%-50% off items over 50$ for a month or over 250$ for a year
              with our special credit card.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
