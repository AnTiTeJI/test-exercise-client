import { AxiosError, AxiosResponse, Method } from "axios";
import { IAxiosApiWrapper, IParam } from "./types";

import { api } from "./api";
import { dispatch } from "../store/store";
import apiSlice, { ActionType } from "../store/api.slice";

function addParamsToUrl(url: string, params: IParam) {
  let fullUrl: string = api.defaults.baseURL + url;
  fullUrl += "?";
  for (const param in params) {
    fullUrl += `${param}=${params[param]}&`;
  }
  return fullUrl.slice(0, -1);
}

async function AxiosSwitchMethod<T>(
  method: Method,
  url: string,
  data?: unknown,
  contentType = "application/json"
): Promise<AxiosResponse | AxiosError | undefined> {
  switch (method.toUpperCase()) {
    case "GET":
      return await api.get<T>(url);
    case "POST":
      return await api.post<T>(url, data, {
        headers: {
          "Content-Type": contentType,
        },
      });
    case "PUT":
      return await api.put<T>(url, data);
    case "DELETE":
      return await api.delete<T>(url);
    default:
      return undefined;
  }
}

const ApiCreator = (actions: ActionType) => {
  return async function <T = unknown>({
    method,
    url,
    data,
    params,
    contentType,
  }: IAxiosApiWrapper): Promise<T | void> {
    dispatch(actions.setInitialState());
    if (params) url = addParamsToUrl(url, params);
    const response = await AxiosSwitchMethod<T>(method, url, data, contentType);
    if (!response) dispatch(actions.setIsError("Undefined method"));
    if ((response as AxiosError).response) {
      const error = (response as AxiosError).response?.data;
      dispatch(actions.setIsError(error || ""));
    } else {
      dispatch(actions.setIsSuccess());
      return (response as AxiosResponse).data;
    }
  };
};

export const ApiWrapper = ApiCreator(apiSlice.actions);
