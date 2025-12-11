import { In_ApiRes } from "@/types/";
import { http } from "../interceptor/http";

export interface In_VerifyOtpBody {
  phone: string;
  code: number;
}

async function verifyOtp(body: In_VerifyOtpBody): Promise<In_ApiRes<any>> {
  try {
    const { data } = await http.post("/login-verify", body);
    return data;
  } catch (error) {
    throw error;
  }
}

export default verifyOtp;
