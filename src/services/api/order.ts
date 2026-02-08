import { In_CreateOrder } from "@/types/order";
import { http } from "../interceptor/http";

export async function createOrderDto(body: In_CreateOrder) {
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
