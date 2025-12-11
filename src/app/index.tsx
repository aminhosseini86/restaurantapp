import { Toaster } from "@/components/ui/sonner";
import { allRoutes } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={allRoutes} />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
