import axios from "axios";

const axiosParams = {
  baseURL: "http://localhost:3000",
};

let AxiosInstance = axios.create(axiosParams);
AxiosInstance.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },   return config;
  function (error) {
    return Promise.reject(error);
  }
);
export { AxiosInstance };
