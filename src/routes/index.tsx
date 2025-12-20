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
          },
          {
            path: "profile",
            element: <ProfilePage />,
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
