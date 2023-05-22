import Cart from "../components/Cart/Cart";
import CartPage from "../components/Cart/CartPage";
import CheckOut from "../components/CheckOut/CheckOut";
import Compare from "../components/Compare/Compare";
import Order from "../components/Order/Order";
import WishList from "../components/WishList/WishList";
export const privateRoute = [
  {
    path: "/wishlist",
    element: <WishList />,
  },
  {
    path: "/compare",
    element: <Compare />,
  },
  {
    path: "/cart",
    element: <CartPage />,
    children: [
      {
        path: "",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
];
