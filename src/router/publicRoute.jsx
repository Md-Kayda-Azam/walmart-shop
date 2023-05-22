import CustomerReviews from "../components/DSVCR/CustomerReviews";
import Detail from "../components/DSVCR/Detail";
import Spacification from "../components/DSVCR/Spacification";
import VendorInfo from "../components/DSVCR/VendorInfo";
import HomeMain from "../components/HomeMain/HomeMain";
import HighestRating from "../components/Revews/HighestRating";
import LowestRating from "../components/Revews/LowestRating";
import MostHN from "../components/Revews/MostHN";
import MostHP from "../components/Revews/MostHP";
import ShowAll from "../components/Revews/ShowAll";
import ShopFullWidth from "../components/ShopFullWidth/ShopFullWidth";
import SingleProduct from "../components/SingleProduct/SingleProduct";

export const publicRoute = [
  {
    path: "/",
    element: <HomeMain />,
  },
  {
    path: "/shop-fullwidth-banner",
    element: <ShopFullWidth />,
  },
  {
    path: "/single-product",
    element: <SingleProduct />,
    children: [
      {
        path: "",
        element: <Detail />,
      },
      {
        path: "spacification",
        element: <Spacification />,
      },
      {
        path: "vendor-info",
        element: <VendorInfo />,
      },
      {
        path: "customar-reviews",
        element: <CustomerReviews />,
        children: [
          {
            path: "",
            element: <ShowAll />,
          },
          {
            path: "helpful-positive",
            element: <MostHP />,
          },
          {
            path: "helpful-negative",
            element: <MostHN />,
          },
          {
            path: "highest-rating",
            element: <HighestRating />,
          },
          {
            path: "lowest-rating",
            element: <LowestRating />,
          },
        ],
      },
    ],
  },
];
