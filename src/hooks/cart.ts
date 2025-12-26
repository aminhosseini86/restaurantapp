import {
  addToCart,
  getCartInfo,
  getNotCompletedCart,
} from "@/services/api/cart";
import { In_ApiRes } from "@/types/";
import {
  Cart,
  In_AddToCartBody,
  In_AddToCartRes,
  In_CartDetailItem,
  In_CartInfoBody,
} from "@/types/cart";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useAddToCart() {
  return useMutation<
    In_ApiRes<In_AddToCartRes>,
    In_ApiRes<null>,
    In_AddToCartBody
  >({
    mutationFn: addToCart,
  });
}

export function useGetNotCompletedCart() {
  return useQuery<In_ApiRes<Cart[]>, AxiosError<In_ApiRes<null>>>({
    queryKey: ["getNotCompletedCart"],
    queryFn: getNotCompletedCart,
  });
}

export function useGetCartInfo(body: In_CartInfoBody) {
  return useQuery<In_ApiRes<In_CartDetailItem[]>, AxiosError<In_ApiRes<null>>>({
    queryKey: ["useGetCartInfo", body],
    queryFn: () => getCartInfo(body),
  });
}
