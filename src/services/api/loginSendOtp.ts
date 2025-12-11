import { http } from "../interceptor/http";

async function loginSendOtp(phone: string) {
  try {
    const { data } = await http.post("/login-mobile", { phone: phone });

    return data;
  } catch (error) {
    throw error;
  }
}

export default loginSendOtp;
