import { getSlider } from "@/services/api/getSlider";
import { In_ApiRes } from "@/types/";
import { In_SliderApiResponse } from "@/types/slider";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

function useGetSlider() {
  return useQuery<
    In_ApiRes<In_SliderApiResponse>,
    AxiosError<In_ApiRes<unknown>>
  >({
    queryKey: ["getSlider"],
    queryFn: getSlider,
  });
}

export { useGetSlider };
