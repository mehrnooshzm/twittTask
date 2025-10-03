import axios from "axios";
import { USER_INFO } from "../reactQueryProvider/QueryKeys";

const axiosParams = {
  baseURL: "http://localhost:3000",
};

let AxiosInstance = axios.create(axiosParams);
AxiosInstance.interceptors.request.use(
  function (config) {
    const userTokenInfo = localStorage.getItem(USER_INFO);
    if (userTokenInfo) {
      config.headers.token = userTokenInfo;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { AxiosInstance };
