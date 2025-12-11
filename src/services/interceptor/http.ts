import { In_ApiRes } from "@/types/";
import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
  baseURL,
});

http.interceptors.request.use(
  (config) => {
    // if (!myToken || myToken === "null") {
    let myToken =
      "$2y$12$XkZr2ko0b5wpPp5vLQQfAum8fcLjil0Pq/FjeZJb7gRh2d9mOfw0W";
    // }
    config.headers.Authorization = myToken;

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse<In_ApiRes<unknown>>) => {
    // if (response.data.token) localStorage.setItem("jwt", response.data.token);

    if (response && response.data.code >= 200 && response.data.code <= 299) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error);
  },
);

export { http };
