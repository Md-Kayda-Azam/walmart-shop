import { useState } from "react";
import bannerLogo from "../../assets/images/menu/banner-2.jpg";
import bannerLogo3 from "../../assets/images/menu/banner-3.jpg";
import bannerLogo4 from "../../assets/images/menu/banner-4.jpg";
import bannerLogo5 from "../../assets/images/menu/banner-5.jpg";
import bannerLogo6 from "../../assets/images/menu/banner-6.jpg";
import { NavLink } from "react-router-dom";
const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="sticky-content-wrapper">
        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown ">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div
                  className="dropdown category-dropdown has-border"
                  data-visible="true"
                  onMouseOver={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <a
                    href="#"
                    className="category-toggle text-dark"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category"></i>
                    <span>Browse Categories</span>
                  </a>
                  {show && (
                    <div className="dropdown-box">
                      <ul className="menu vertical-menu category-menu">
                        <li className="has-submenu">
                          <a href="#">
                            <i className="w-icon-tshirt2"></i>Fashion
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">Women</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">New Arrivals</a>
                                </li>
                                <li>
                                  <a href="#">Best Sellers</a>
                                </li>
                                <li>
                                  <a href="#">Trending</a>
                                </li>
                                <li>
                                  <a href="#">Clothing</a>
                                </li>
                                <li>
                                  <a href="#">Shoes</a>
                                </li>
                                <li>
                                  <a href="#">Bags</a>
                                </li>
                                <li>
                                  <a href="#">Accessories</a>
                                </li>
                                <li>
                                  <a href="#">Jewlery & Watches</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Men</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">New Arrivals</a>
                                </li>
                                <li>
                                  <a href="#">Best Sellers</a>
                                </li>
                                <li>
                                  <a href="#">Trending</a>
                                </li>
                                <li>
                                  <a href="#">Clothing</a>
                                </li>
                                <li>
                                  <a href="#">Shoes</a>
                                </li>
                                <li>
                                  <a href="#">Bags</a>
                                </li>
                                <li>
                                  <a href="#">Accessories</a>
                                </li>
                                <li>
                                  <a href="#">Jewlery & Watches</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="banner-fixed menu-banner menu-banner2">
                                <figure>
                                  <img
                                    src={bannerLogo}
                                    alt="Menu Banner"
                                    width="235"
                                    height="347"
                                  />
                                </figure>
                                <div className="banner-content">
                                  <div className="banner-price-info mb-1 ls-normal">
                                    Get up to
                                    <strong className="text-primary text-uppercase">
                                      20%Off
                                    </strong>
                                  </div>
                                  <h3 className="banner-title ls-normal">
                                    Hot Sales
                                  </h3>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu">
                          <a href="#">
                            <i className="w-icon-home"></i>Home & Garden
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">Bedroom</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Beds, Frames & Bases</a>
                                </li>
                                <li>
                                  <a href="#">Dressers</a>
                                </li>
                                <li>
                                  <a href="#">Nightstands</a>
                                </li>
                                <li>
                                  <a href="#">Kids Beds & Headboards</a>
                                </li>
                                <li>
                                  <a href="#">Armoires</a>
                                </li>
                              </ul>

                              <h4 className="menu-title mt-1">Living Room</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Coffee Tables</a>
                                </li>
                                <li>
                                  <a href="#">Chairs</a>
                                </li>
                                <li>
                                  <a href="#">Tables</a>
                                </li>
                                <li>
                                  <a href="#">Futons & Sofa Beds</a>
                                </li>
                                <li>
                                  <a href="#">Cabinets & Chests</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Office</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Office Chairs</a>
                                </li>
                                <li>
                                  <a href="#">Desks</a>
                                </li>
                                <li>
                                  <a href="#">Bookcases</a>
                                </li>
                                <li>
                                  <a href="#">File Cabinets</a>
                                </li>
                                <li>
                                  <a href="#">Breakroom Tables</a>
                                </li>
                              </ul>

                              <h4 className="menu-title mt-1">
                                Kitchen & Dining
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Dining Sets</a>
                                </li>
                                <li>
                                  <a href="#">Kitchen Storage Cabinets</a>
                                </li>
                                <li>
                                  <a href="#">Bashers Racks</a>
                                </li>
                                <li>
                                  <a href="#">Dining Chairs</a>
                                </li>
                                <li>
                                  <a href="#">Dining Room Tables</a>
                                </li>
                                <li>
                                  <a href="#">Bar Stools</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="menu-banner banner-fixed menu-banner3">
                                <figure>
                                  <img
                                    src={bannerLogo3}
                                    alt="Menu Banner"
                                    width="235"
                                    height="461"
                                  />
                                </figure>
                                <div className="banner-content">
                                  <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                                    Restroom
                                  </h4>
                                  <h3 className="banner-title font-weight-bolder text-white ls-normal">
                                    Furniture Sale
                                  </h3>
                                  <div className="banner-price-info text-white font-weight-normal ls-25">
                                    Up to{" "}
                                    <span className="text-secondary text-uppercase font-weight-bold">
                                      25% Off
                                    </span>
                                  </div>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu">
                          <a href="#">
                            <i className="w-icon-electronics"></i>Electronics
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">
                                Laptops &amp; Computers
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Desktop Computers</a>
                                </li>
                                <li>
                                  <a href="#">Monitors</a>
                                </li>
                                <li>
                                  <a href="#">Laptops</a>
                                </li>
                                <li>
                                  <a href="#">Hard Drives &amp; Storage</a>
                                </li>
                                <li>
                                  <a href="#">Computer Accessories</a>
                                </li>
                              </ul>

                              <h4 className="menu-title mt-1">
                                TV &amp; Video
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">TVs</a>
                                </li>
                                <li>
                                  <a href="#">Home Audio Speakers</a>
                                </li>
                                <li>
                                  <a href="#">Projectors</a>
                                </li>
                                <li>
                                  <a href="#">Media Streaming Devices</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Digital Cameras</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Digital SLR Cameras</a>
                                </li>
                                <li>
                                  <a href="#">Sports & Action Cameras</a>
                                </li>
                                <li>
                                  <a href="#">Camera Lenses</a>
                                </li>
                                <li>
                                  <a href="#">Photo Printer</a>
                                </li>
                                <li>
                                  <a href="#">Digital Memory Cards</a>
                                </li>
                              </ul>

                              <h4 className="menu-title mt-1">Cell Phones</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="#">Carrier Phones</a>
                                </li>
                                <li>
                                  <a href="#">Unlocked Phones</a>
                                </li>
                                <li>
                                  <a href="#">Phone & Cellphone Cases</a>
                                </li>
                                <li>
                                  <a href="#">Cellphone Chargers</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="menu-banner banner-fixed menu-banner4">
                                <figure>
                                  <img
                                    src={bannerLogo4}
                                    alt="Menu Banner"
                                    width="235"
                                    height="433"
                                  />
                                </figure>
                                <div className="banner-content">
                                  <h4 className="banner-subtitle font-weight-normal">
                                    Deals Of The Week
                                  </h4>
                                  <h3 className="banner-title text-white">
                                    Save On Smart EarPhone
                                  </h3>
                                  <div className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                    20% Off
                                  </div>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-white btn-outline btn-sm btn-rounded"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu">
                          <a href="#">
                            <i className="w-icon-furniture"></i>Furniture
                          </a>
                          <ul className="megamenu type2">
                            <li className="row">
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Furniture</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="#">Sofas & Couches</a>
                                  </li>
                                  <li>
                                    <a href="#">Armchairs</a>
                                  </li>
                                  <li>
                                    <a href="#">Bed Frames</a>
                                  </li>
                                  <li>
                                    <a href="#">Beside Tables</a>
                                  </li>
                                  <li>
                                    <a href="#">Dressing Tables</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Lighting</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="#">Light Bulbs</a>
                                  </li>
                                  <li>
                                    <a href="#">Lamps</a>
                                  </li>
                                  <li>
                                    <a href="#">Celling Lights</a>
                                  </li>
                                  <li>
                                    <a href="#">Wall Lights</a>
                                  </li>
                                  <li>
                                    <a href="#">Bathroom Lighting</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Home Accessories</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="#">Decorative Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Candals & Holders</a>
                                  </li>
                                  <li>
                                    <a href="#">Home Fragrance</a>
                                  </li>
                                  <li>
                                    <a href="#">Mirrors</a>
                                  </li>
                                  <li>
                                    <a href="#">Clocks</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">
                                  Garden & Outdoors
                                </h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="#">Garden Furniture</a>
                                  </li>
                                  <li>
                                    <a href="#">Lawn Mowers</a>
                                  </li>
                                  <li>
                                    <a href="#">Pressure Washers</a>
                                  </li>
                                  <li>
                                    <a href="#">All Garden Tools</a>
                                  </li>
                                  <li>
                                    <a href="#">Outdoor Dining</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="row">
                              <div className="col-6">
                                <div className="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src={bannerLogo5}
                                      alt="Banner"
                                      width="410"
                                      height="123"
                                      style={{ backgroundColor: "#D2D2D2" }}
                                    />
                                  </figure>
                                  <div className="banner-content text-right y-50">
                                    <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                      New Arrivals
                                    </h4>
                                    <h3 className="banner-title font-weight-bolder text-capitalize ls-normal">
                                      Amazing Sofa
                                    </h3>
                                    <div className="banner-price-info font-weight-normal ls-normal">
                                      Starting at <strong>$125.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src={bannerLogo6}
                                      alt="Banner"
                                      width="410"
                                      height="123"
                                      style={{ backgroundColor: "#9F9888" }}
                                    />
                                  </figure>
                                  <div className="banner-content y-50">
                                    <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                      Best Seller
                                    </h4>
                                    <h3 className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                      Chair &amp; Lamp
                                    </h3>
                                    <div className="banner-price-info font-weight-normal ls-normal text-white">
                                      From <strong>$165.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-heartbeat"></i>Healthy & Beauty
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-gift"></i>Gift Ideas
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-gamepad"></i>Toy & Games
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-ice-cream"></i>Cooking
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-ios"></i>Smart Phones
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-camera"></i>Cameras & Photo
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="w-icon-ruby"></i>Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-banner-sidebar.html"
                            className="font-weight-bold text-primary text-uppercase ls-25"
                          >
                            View All Categories
                            <i className="w-icon-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
                    <li className="active">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop-fullwidth-banner" className="arrow">
                        Shop
                      </NavLink>

                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">Shop Pages</h4>
                          <ul>
                            <li>
                              <a href="shop-banner-sidebar.html">
                                Banner With Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-boxed-banner.html">Boxed Banner</a>
                            </li>
                            <li>
                              <a href="#">Full Width Banner</a>
                            </li>
                            <li>
                              <a href="shop-horizontal-filter.html">
                                Horizontal Filter
                                <span className="tip tip-hot">Hot</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-off-canvas.html">
                                Off Canvas Sidebar
                                <span className="tip tip-new">New</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-infinite-scroll.html">
                                Infinite Ajax Scroll
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-both-sidebar.html">Both Sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">Shop Layouts</h4>
                          <ul>
                            <li>
                              <a href="shop-grid-3cols.html">3 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-4cols.html">4 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-5cols.html">5 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-6cols.html">6 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-7cols.html">7 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-8cols.html">8 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-list.html">List Mode</a>
                            </li>
                            <li>
                              <a href="shop-list-sidebar.html">
                                List Mode With Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">Product Pages</h4>
                          <ul>
                            <li>
                              <a href="product-variable.html">
                                Variable Product
                              </a>
                            </li>
                            <li>
                              <a href="product-featured.html">
                                Featured &amp; Sale
                              </a>
                            </li>
                            <li>
                              <a href="product-accordion.html">
                                Data In Accordion
                              </a>
                            </li>
                            <li>
                              <a href="product-section.html">
                                Data In Sections
                              </a>
                            </li>
                            <li>
                              <a href="product-swatch.html">Image Swatch</a>
                            </li>
                            <li>
                              <a href="product-extended.html">Extended Info</a>
                            </li>
                            <li>
                              <a href="product-without-sidebar.html">
                                Without Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-video.html">
                                360<sup>o</sup> &amp; Video
                                <span className="tip tip-new">New</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">Product Layouts</h4>
                          <ul>
                            <li>
                              <a href="product-default.html">
                                Default<span className="tip tip-hot">Hot</span>
                              </a>
                            </li>
                            <li>
                              <a href="product-vertical.html">
                                Vertical Thumbs
                              </a>
                            </li>
                            <li>
                              <a href="product-grid.html">Grid Images</a>
                            </li>
                            <li>
                              <a href="product-masonry.html">Masonry</a>
                            </li>
                            <li>
                              <a href="product-gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="product-sticky-info.html">Sticky Info</a>
                            </li>
                            <li>
                              <a href="product-sticky-thumb.html">
                                Sticky Thumbs
                              </a>
                            </li>
                            <li>
                              <a href="product-sticky-both.html">Sticky Both</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="arrow">
                        Vendor
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="vendor-dokan-store-list.html">
                            Store Listing
                          </a>
                          <ul>
                            <li>
                              <a href="vendor-dokan-store-list.html">
                                Store listing 1
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcfm-store-list.html">
                                Store listing 2
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcmp-store-list.html">
                                Store listing 3
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wc-store-list.html">
                                Store listing 4
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="vendor-dokan-store.html">Vendor Store</a>
                          <ul>
                            <li>
                              <a href="vendor-dokan-store.html">
                                Vendor Store 1
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcfm-store-product-grid.html">
                                Vendor Store 2
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wcmp-store-product-grid.html">
                                Vendor Store 3
                              </a>
                            </li>
                            <li>
                              <a href="vendor-wc-store-product-grid.html">
                                Vendor Store 4
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="arrow">
                        Blog
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">classNameic</a>
                        </li>
                        <li>
                          <a href="blog-listing.html">Listing</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-2cols.html">Grid 2 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-3cols.html">Grid 3 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-4cols.html">Grid 4 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar.html">Grid sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">Masonry</a>
                          <ul>
                            <li>
                              <a href="blog-masonry-2cols.html">
                                Masonry 2 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3cols.html">
                                Masonry 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4cols.html">
                                Masonry 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-sidebar.html">
                                Masonry sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-mask-grid.html">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="post-single.html">Single Post</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink href="about-us.html" className="arrow">
                        Pages
                      </NavLink>
                      <ul className="submenu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="become-a-vendor.html">Become A Vendor</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="error-404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="#" className="arrow">
                        Elements
                      </NavLink>
                      <ul className="submenu">
                        <li>
                          <a href="element-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="element-alerts.html">
                            Alert &amp; Notification
                          </a>
                        </li>
                        <li>
                          <a href="element-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="element-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="element-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="element-icons.html">Icons</a>
                        </li>
                        <li>
                          <a href="element-icon-boxes.html">Icon Boxes</a>
                        </li>
                        <li>
                          <a href="element-instagrams.html">Instagrams</a>
                        </li>
                        <li>
                          <a href="element-categories.html">Product Category</a>
                        </li>
                        <li>
                          <a href="element-products.html">Products</a>
                        </li>
                        <li>
                          <a href="element-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="element-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="element-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="element-typography.html">Typography</a>
                        </li>

                        <li>
                          <a href="element-vendors.html">Vendors</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <a href="#" className="d-xl-show">
                  <i className="w-icon-map-marker mr-1"></i>Track Order
                </a>
                <a href="#">
                  <i className="w-icon-sale"></i>Daily Deals
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
