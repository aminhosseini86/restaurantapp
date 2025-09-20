import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
  baseURL,
});

http.interceptors.request.use(
  (config) => {
    const myToken =
      "$2y$12$XkZr2ko0b5wpPp5vLQQfAum8fcLjil0Pq/FjeZJb7gRh2d9mOfw0W";
    config.headers.Authorization = myToken;

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error);
  },
);

export { http };
