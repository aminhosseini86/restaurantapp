import {
  In_AddToCartBody,
  In_AddToCartRes,
  In_CartDetailItem,
  In_CartInfoBody,
  In_RemoveCartBody,
  In_RemoveFromCartBody,
} from "@/types/cart";
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
    const response = await http.post("/cart", {
      type: 0,
      status: 1,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCartInfo(
  body: In_CartInfoBody,
): Promise<In_ApiRes<In_CartDetailItem[]>> {
  try {
    const response = await http.post("/cart/info", body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteItemFromCart(
  body: In_RemoveFromCartBody,
): Promise<In_ApiRes<"">> {
  try {
    const response = await http.post("cart/remove-item", body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function removeCart(
  body: In_RemoveCartBody,
): Promise<In_ApiRes<"">> {
  try {
    const response = await http.post("cart/remove", body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
