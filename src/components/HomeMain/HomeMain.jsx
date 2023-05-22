import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ClothingApparel from "./ClothingApparel";
import ConsumerElectric from "./ConsumerElectric";
import DealsHotTopSellerBest20 from "./DealsHotTopSellerBest20";
import ForTodayFassion from "./ForTodayFassion";
import FromOurBlog from "./FromOurBlog";
import GetUpToPErsentNewArrivals from "./GetUpToPErsentNewArrivals";
import HomeGardenKitchen from "./HomeGardenKitchen";
import NaturalDanding from "./NaturalDanding";
import NiceItems from "./NiceItems";
import OurClients from "./OurClients";
import PopularDepartment from "./PopularDepartment";
import SwiperShop from "./Swiper";
import TopCategories from "./TopCategories";
import YourRecentViews from "./YourRecentViews";

const HomeMain = () => {
  return (
    <>
      <div className="page-wrapper">
        <h1 className="d-none">
          Wolmart - Responsive Marketplace HTML Template
        </h1>
        <Header />
        <main className="main">
          <SwiperShop />
        </main>
        <div className="container">
          <div
            className="swiper-container  icon-box-wrapper br-sm mt-6 mb-6"
            data-swiper-options="{
                    'slidesPerView': 1,
                    'loop': false,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '1200': {
                            'slidesPerView': 4
                        }
                    }
                }"
          >
            <NiceItems />
          </div>
          <GetUpToPErsentNewArrivals />
          <DealsHotTopSellerBest20 />

          <TopCategories />
          <PopularDepartment />
          <NaturalDanding />
          <ClothingApparel />
          <ConsumerElectric />
          <ForTodayFassion />
          <HomeGardenKitchen />
          <OurClients />
          <FromOurBlog />
          <YourRecentViews />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeMain;
