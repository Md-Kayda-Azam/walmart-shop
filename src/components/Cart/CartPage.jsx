import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { Link, Outlet } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <Header />
      <main className="main cart">
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb shop-breadcrumb bb-no">
              <li className="active">
                <Link to="">Shopping Cart</Link>
              </li>
              <li>
                <Link to="checkout">Checkout</Link>
              </li>
              <li>
                <Link to="order">Order Complete</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
