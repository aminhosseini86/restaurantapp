import { addToCart, getNotCompletedCart } from "@/services/api/cart";
import { In_ApiRes } from "@/types/";
import { In_AddToCartBody, In_AddToCartRes } from "@/types/cart";
import { useMutation, useQuery } from "@tanstack/react-query";

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
  return useQuery<In_ApiRes<any>, In_ApiRes<null>>({
    queryKey: ["getNotCompletedCart"],
    queryFn: getNotCompletedCart,
  });
}
