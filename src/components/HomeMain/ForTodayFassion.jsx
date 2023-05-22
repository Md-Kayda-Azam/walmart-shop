import banner from "../../assets/images/demos/demo1/banners/4.jpg";
const ForTodayFassion = () => {
  return (
    <>
      <div
        className="banner banner-fashion  br-sm mb-9"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundColor: "#383839",
        }}
      >
        <div className="banner-content align-items-center">
          <div className="content-left d-flex align-items-center mb-3">
            <div className="banner-price-info font-weight-bolder text-secondary text-uppercase lh-1 ls-25">
              25
              <sup className="font-weight-bold">%</sup>
              <sub className="font-weight-bold ls-25">Off</sub>
            </div>
            <hr className="banner-divider bg-white mt-0 mb-0 mr-8" />
          </div>
          <div className="content-right d-flex align-items-center flex-1 flex-wrap">
            <div className="banner-info mb-0 mr-auto pr-4 mb-3">
              <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
                For Todays Fashion
              </h3>
              <p className="text-white mb-0">
                Use code
                <span className="text-dark bg-white font-weight-bold ls-50 pl-1 pr-1 d-inline-block">
                  Black
                  <strong>12345</strong>
                </span>
                to get best offer.
              </p>
            </div>
            <a
              href="shop-banner-sidebar.html"
              className="btn btn-white btn-outline btn-rounded btn-icon-right mb-3"
            >
              Shop Now<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForTodayFassion;
