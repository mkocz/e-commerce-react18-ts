import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { BasketPage } from "./pages/BasketPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

export const routes = {
  HOME: {
    path: "/",
  },
  PRODUCTS: {
    path: "/products",
  },
  BASKET: {
    path: "/basket",
  },
  CHECKOUT: {
    path: "/checkout",
  },
  CONFIRMATION: {
    path: "/confirmation",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <HomePage />,
      },
      {
        path: routes.PRODUCTS.path,
        element: <ProductsPage />,
      },
      {
        path: routes.BASKET.path,
        element: <BasketPage />,
      },
      {
        path: routes.CHECKOUT.path,
        element: <CheckoutPage />,
      },
      {
        path: routes.CONFIRMATION.path,
        element: <ConfirmationPage />,
      },
    ],
  },
]);
