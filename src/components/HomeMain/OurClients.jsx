import brands1 from "../../assets/images/demos/demo1/brands/1.png";
import brands2 from "../../assets/images/demos/demo1/brands/2.png";
import brands3 from "../../assets/images/demos/demo1/brands/3.png";
import brands4 from "../../assets/images/demos/demo1/brands/4.png";
import brands5 from "../../assets/images/demos/demo1/brands/5.png";
import brands6 from "../../assets/images/demos/demo1/brands/6.png";
import brands7 from "../../assets/images/demos/demo1/brands/7.png";
import brands8 from "../../assets/images/demos/demo1/brands/8.png";
import brands9 from "../../assets/images/demos/demo1/brands/9.png";
import brands10 from "../../assets/images/demos/demo1/brands/10.png";
import brands11 from "../../assets/images/demos/demo1/brands/11.png";
import brands12 from "../../assets/images/demos/demo1/brands/12.png";
const OurClients = () => {
  return (
    <>
      <h2 className="title title-underline mb-4 ls-normal ">Our Clients</h2>
      <div
        className="swiper-container swiper-theme brands-wrapper mb-9 "
        data-swiper-options="{
      'spaceBetween': 0,
      'slidesPerView': 2,
      'breakpoints': {
          '576': {
              'slidesPerView': 3
          },
          '768': {
              'slidesPerView': 4
          },
          '992': {
              'slidesPerView': 5
          },
          '1200': {
              'slidesPerView': 6
          }
      }
  }"
      >
        <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img src={brands1} alt="Brand" width="410" height="186" />
            </figure>
            <figure className="brand-wrapper">
              <img src={brands2} alt="Brand" width="410" height="186" />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img src={brands3} alt="Brand" width="410" height="186" />
            </figure>
            <figure className="brand-wrapper">
              <img src={brands4} alt="Brand" width="410" height="186" />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img src={brands5} alt="Brand" width="410" height="186" />
            </figure>
            <figure className="brand-wrapper">
              <img src={brands6} alt="Brand" width="410" height="186" />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img src={brands7} alt="Brand" width="410" height="186" />
            </figure>
            <figure className="brand-wrapper">
              <img src={brands8} alt="Brand" width="410" height="186" />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img src={brands9} alt="Brand" width="410" height="186" />
            </figure>
            <figure className="brand-wrapper">
              <img src={brands10} alt="Brand" width="410" height="186" />
            </figure>
          </div>
          <div className="swiper-slide brand-col">
            <figure className="brand-wrapper">
              <img src={brands11} alt="Brand" width="410" height="186" />
            </figure>
            <figure className="brand-wrapper">
              <img src={brands12} alt="Brand" width="410" height="186" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
