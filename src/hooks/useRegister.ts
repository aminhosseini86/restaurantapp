import register from "@/services/api/register";
import { useQuery } from "@tanstack/react-query";

function useRegister() {
  return useQuery({
    queryKey: ["register"],
    queryFn: register,
  });
}

export default useRegister;
