import { http } from "../interceptor/http";

export async function getProfile() {
  try {
    const response = await http.get("/profile");
    return response.data;
  } catch (error) {
    throw error;
  }
}
