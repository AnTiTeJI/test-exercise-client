import decode from "jwt-decode";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { dispatch } from "../store/$store";
import { setIsAuth, setUserData } from "../store/user.slice";
import { UserData } from "../types";
import config from "../config.json";
export const api = axios.create({
  baseURL: config.SERVER_URL + "/api",
  withCredentials: true,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem("access");
    if (config.headers && accessToken)
      config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => console.error(error)
);

api.interceptors.response.use(
  (config) => config,
  async (error: AxiosError) => {
    if (error.config && error.response?.status === 403) {
      const res = await axios.get<{ access: string }>(
        `${api.defaults.baseURL}/refresh`,
        { withCredentials: true }
      );
      if (res.data.access) {
        localStorage.setItem("access", res.data.access);
        const user = decode<UserData>(res.data.access);
        dispatch(setIsAuth(true));
        dispatch(setUserData(user));
      } else {
        dispatch(setIsAuth(false));
        console.log("Unnathorized");
      }
      return api.request(error.config);
    }
  }
);
