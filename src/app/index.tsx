import { RouterProvider } from "react-router-dom";
import { allRoutes } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={allRoutes} />
    </QueryClientProvider>
  );
}

export default App;
