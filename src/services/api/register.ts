import { createRandomNumber } from "@/utils/";
import { http } from "../interceptor/http";

export async function register() {
  try {
    const { data } = await http.post("/login", {
      device_id: createRandomNumber(20),
      lang_id: "1",
      push_id: "3",
    });

    return data;
  } catch (error) {
    throw error;
  }

  // const { data } = await http.post("/login", {
  //   device_id: createRandomNumber(20),
  //   lang_id: "1",
  //   push_id: "3",
  // });

  // if (data && data.code >= 200 && data.code <= 299) {
  //   return data;
  // } else {
  //   throw Error(JSON.stringify(data));
  // }
}

export default register;
