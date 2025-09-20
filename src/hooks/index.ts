import { getFoodCates } from "@/services/api/getFoodCates";
import { FoodsApiResponse } from "@/types/getListOfCates";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useGetFoodCates() {
  return useQuery<FoodsApiResponse, AxiosError<any>>({
    queryKey: ["cates"],
    queryFn: getFoodCates,
  });
}
