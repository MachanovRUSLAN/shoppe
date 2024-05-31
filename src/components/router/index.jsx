import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import ShopFilter from "../ShopFilter";
import ProductPage from "../../pages/ProductPage";
// import ShopBag from "../shopbagNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingCart from "../../pages/ShoppingCart";
import Blog from "../../pages/Blog";
import BlogInfo from "../../pages/BlogInfo";
import Contact from "../../pages/ContactUs";
import MyAccount from "../../pages/MyAccount";
import ForgPassword from "../../pages/ForgottenPasword";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import About from "../../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        <ToastContainer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopFilter />,
      },
      {
        path: "/shop/:id",
        element: <ProductPage />,
      },
      {
        path: "/bag",
        element: <ShoppingCart/>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/bloginfo/:id",
        element: <BlogInfo />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/myAccount",
        element: <MyAccount/>,
      },
      {
        path: "/forgotPasword",
        element: <ForgPassword/>,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
    ],
  },
]);
export default router;
