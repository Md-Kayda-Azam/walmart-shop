import banner from "../../assets/images/products/vendor-banner.jpg";
import logo from "../../assets/images/products/vendor-logo.jpg";
const VendorInfo = () => {
  return (
    <>
      <div className="tab-pane" id="product-tab-vendor">
        <div className="row mb-3">
          <div className="col-md-6 mb-4">
            <figure className="vendor-banner br-sm">
              <img
                src={banner}
                alt="Vendor Banner"
                width="610"
                height="295"
                style={{ backgroundColor: "#353B55" }}
              />
            </figure>
          </div>
          <div className="col-md-6 pl-2 pl-md-6 mb-4">
            <div className="vendor-user">
              <figure className="vendor-logo mr-4">
                <a href="#">
                  <img src={logo} alt="Vendor Logo" width="80" height="80" />
                </a>
              </figure>
              <div>
                <div className="vendor-name">
                  <a href="#">Jone Doe</a>
                </div>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: "90%" }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="#" className="rating-reviews">
                    (32 Reviews)
                  </a>
                </div>
              </div>
            </div>
            <ul className="vendor-info list-style-none">
              <li className="store-name">
                <label>Store Name:</label>
                <span className="detail">OAIO Store</span>
              </li>
              <li className="store-address">
                <label>Address:</label>
                <span className="detail">
                  Steven Street, El Carjon, CA 92020, United States (US)
                </span>
              </li>
              <li className="store-phone">
                <label>Phone:</label>
                <a href="#tel:">1234567890</a>
              </li>
            </ul>
            <a
              href="vendor-dokan-store.html"
              className="btn btn-dark btn-link btn-underline btn-icon-right"
            >
              Visit Store
              <i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <p className="mb-5">
          <strong className="text-dark">L</strong>orem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu
          scelerisque felis. Vel pretium lectus quam id leo in vitae turpis
          massa. Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt
          eget. Aliquam id diam maecenas ultricies mi eget mauris. Volutpat ac
          tincidunt vitae semper quis lectus. Vestibulum mattis ullamcorper
          velit sed. A arcu cursus vitae congue mauris.
        </p>
        <p className="mb-2">
          <strong className="text-dark">A</strong> arcu cursus vitae congue
          mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla. Diam in arcu cursus
          euismod quis. Eget sit amet tellus cras adipiscing enim eu. In
          fermentum et sollicitudin ac orci phasellus. A condimentum vitae
          sapien pellentesque habitant morbi tristique senectus et. In dictum
          non consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem
          fringilla.
        </p>
      </div>
    </>
  );
};

export default VendorInfo;
