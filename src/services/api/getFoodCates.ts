import { FoodsApiResponse } from "@/types/getListOfCates";
import { http } from "../interceptor/http";

async function getFoodCates(): Promise<FoodsApiResponse> {
  try {
    const { data } = await http.post("/categories/all");
    return data;
  } catch (error) {
    throw error;
  }
}

export { getFoodCates };
