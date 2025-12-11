import { In_SliderApiResponse } from "@/types/slider";
import { http } from "../interceptor/http";
import { In_ApiRes } from "@/types/";

export async function getSlider(): Promise<In_ApiRes<In_SliderApiResponse>> {
  try {
    const { data } = await http.get("/slider");
    return data;
  } catch (error) {
    throw error;
  }
}
