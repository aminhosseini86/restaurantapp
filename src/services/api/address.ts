import { In_ApiRes } from "@/types/";
import { http } from "../interceptor/http";
import { In_AddressDetail } from "@/types/address";

export async function getUserAddress(): Promise<In_ApiRes<In_AddressDetail[]>> {
  try {
    const { data } = await http.get("/address");
    return data;
  } catch (error) {
    throw error;
  }
}
