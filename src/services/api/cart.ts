import { In_AddToCartBody, In_AddToCartRes } from "@/types/cart";
import { http } from "../interceptor/http";
import { In_ApiRes } from "@/types/";

export async function addToCart(
  body: In_AddToCartBody,
): Promise<In_ApiRes<In_AddToCartRes>> {
  try {
    const response = await http.post("/cart/add", body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getNotCompletedCart() {
  try {
    const response = await http.post("/cart/", {
      type: 0,
      status: 1,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
