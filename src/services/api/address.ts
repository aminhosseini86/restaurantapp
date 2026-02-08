import { In_ApiRes } from "@/types/";
import { http } from "../interceptor/http";
import { In_Address, In_AddressDetail } from "@/types/address";

export async function getUserAddress(): Promise<In_ApiRes<In_AddressDetail[]>> {
  try {
    const { data } = await http.get("/address");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createNewAddress(
  body: FormData,
): Promise<In_ApiRes<In_Address>> {
  try {
    const { data } = await http.post("/address", body);
    return data;
  } catch (error) {
    throw error;
  }
}
