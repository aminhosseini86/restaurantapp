import { getSlider } from "@/services/api/getSlider";
import { In_ApiRes } from "@/types/";
import { In_SliderApiResponse } from "@/types/slider";
import { useQuery } from "@tanstack/react-query";

function useGetSlider() {
  return useQuery<In_ApiRes<In_SliderApiResponse>, In_ApiRes<unknown>>({
    queryKey: ["getSlider"],
    queryFn: getSlider,
  });
}

export { useGetSlider };
