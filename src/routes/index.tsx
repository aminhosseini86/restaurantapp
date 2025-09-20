import { AllFoodsPage } from "@/page/allFoods.page";
import { CommonAppEntryPage } from "@/page/commonAppEntry.page";
import HomePage from "@/page/home.page";
import { createBrowserRouter } from "react-router-dom";

export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <CommonAppEntryPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "allfoods",
    element: <AllFoodsPage />,
  },
]);
