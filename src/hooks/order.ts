import { createOrderDto } from "@/services/api/order";
import { In_ApiRes } from "@/types/";
import { In_CreateOrder, In_Order } from "@/types/order";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useCreateOrderDto() {
  return useMutation<
    In_ApiRes<In_Order[]>,
    AxiosError<In_ApiRes<"">>,
    In_CreateOrder
  >({
    mutationFn: createOrderDto,
  });
}
