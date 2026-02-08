import CartsLists from "@/components/appComps/cart/cart";
import CartDetail from "@/components/appComps/cart/cartDetail/cartDetail";
import { Address } from "@/components/appComps/cart/cartDetail/steps/address";
import { AllFoodsPage } from "@/page/allFoods.page";
import { CartPage } from "@/page/cart.page";
import { CommonAppEntryPage } from "@/page/commonAppEntry.page";
import HomePage from "@/page/home.page";
import HomeLayoutPage from "@/page/homeLayout.page";
import { ProfilePage } from "@/page/profile.page";
import RandomPage from "@/page/randomPage";
import { createBrowserRouter } from "react-router-dom";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <CommonAppEntryPage />,
    children: [
      {
        path: "/",
        element: <HomeLayoutPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/cart",
            element: <CartPage />,
            children: [
              {
                index: true,
                element: <CartsLists />,
              },
              {
                path: ":id",
                element: <CartDetail />,
              },
            ],
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "/exam",
            element: <Address />,
          },
        ],
      },
    ],
  },
  {
    path: "all-foods",
    element: <AllFoodsPage />,
  },
  {
    path: "random",
    element: <RandomPage />,
  },
]);
