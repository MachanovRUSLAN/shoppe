import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import ShopFilter from "../ShopFilter";
import ProductPage from "../../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
]);
export default router;
