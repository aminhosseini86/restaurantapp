import { In_CreateOrder, In_Order } from "@/types/order";
import { http } from "../interceptor/http";
import { In_ApiRes } from "@/types/";

export async function createOrderDto(
  body: In_CreateOrder,
): Promise<In_ApiRes<In_Order[]>> {
  try {
    const bodyDto = new FormData();

    Object.entries(body).forEach(([key, value]) => {
      if (value) {
        bodyDto.append(key, value);
      }
    });

    const { data } = await http.post("/products/order/", bodyDto);
    return data;
  } catch (error) {
    throw error;
  }
}
