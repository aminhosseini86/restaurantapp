import { RouterProvider } from "react-router-dom";
import { allRoutes } from "@/routes";

function App() {
  return <RouterProvider router={allRoutes} />;
}

export default App;
