import banner1 from "../../assets/images/demos/demo1/categories/1-1.jpg";
import banner2 from "../../assets/images/demos/demo1/categories/1-2.jpg";
const GetUpToPErsentNewArrivals = () => {
  return (
    <>
      <div className="row category-banner-wrapper pt-6 pb-8">
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed br-xs">
            <figure>
              <img
                src={banner1}
                alt="Category Banner"
                width="610"
                height="160"
                style={{ backgroundColor: "#ecedec" }}
              />
            </figure>
            <div className="banner-content y-50 mt-0">
              <h5 className="banner-subtitle font-weight-normal text-dark">
                Get up to{" "}
                <span className="text-secondary font-weight-bolder text-uppercase ls-25">
                  20% Off
                </span>
              </h5>
              <h3 className="banner-title text-uppercase">
                Sports Outfits
                <br />
                <span className="font-weight-normal text-capitalize">
                  Collection
                </span>
              </h3>
              <div className="banner-price-info font-weight-normal">
                Starting at{" "}
                <span className="text-secondary font-weight-bolder">
                  $170.00
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed br-xs">
            <figure>
              <img
                src={banner2}
                alt="Category Banner"
                width="610"
                height="160"
                style={{ backgroundColor: "#636363" }}
              />
            </figure>
            <div className="banner-content y-50 mt-0">
              <h5 className="banner-subtitle font-weight-normal text-capitalize">
                New Arrivals
              </h5>
              <h3 className="banner-title text-white text-uppercase">
                Accessories
                <br />
                <span className="font-weight-normal text-capitalize">
                  Collection
                </span>
              </h3>
              <div className="banner-price-info text-white font-weight-normal text-capitalize">
                Only From
                <span className="text-secondary font-weight-bolder">
                  $90.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetUpToPErsentNewArrivals;
