import { createNewAddress, getUserAddress } from "@/services/api/address";
import { In_ApiRes } from "@/types/";
import { In_Address, In_AddressDetail } from "@/types/address";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useGetAddress() {
  return useQuery<In_ApiRes<In_AddressDetail[]>, AxiosError<In_ApiRes<null>>>({
    queryKey: ["user-address"],
    queryFn: getUserAddress,
  });
}

export function useCreateNewAddress() {
  return useMutation<
    In_ApiRes<In_Address>,
    AxiosError<In_ApiRes<null>>,
    FormData
  >({
    mutationFn: createNewAddress,
  });
}
