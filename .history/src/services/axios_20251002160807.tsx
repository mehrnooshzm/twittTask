import axios from "axios";
import Cookies from "js-cookie";
const axiosParams = {
  baseURL: "http://localhost:3000",
};

const AxiosInstance = axios.create(axiosParams);
AxiosInstance.interceptors.request.use(function (config) {
  const token = Cookies.get("token");
  if (token) {
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

export { AxiosInstance };
