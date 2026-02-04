import { getUserAddress } from "@/services/api/address";
import { In_ApiRes } from "@/types/";
import { In_AddressDetail } from "@/types/address";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useGetAddress() {
  return useQuery<In_ApiRes<In_AddressDetail[]>, AxiosError<In_ApiRes<null>>>({
    queryKey: ["user-address"],
    queryFn: getUserAddress,
  });
}
