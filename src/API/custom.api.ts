import { AxiosError, AxiosResponse, Method } from "axios";
import { IAxiosApiWrapper, IQuery } from "./types";

import { api } from "./api";
import { dispatch } from "../store/$store";
import apiSlice, { ActionType } from "../store/api.slice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

function addQueryToUrl(url: string, query: IQuery) {
  let fullUrl: string = api.defaults.baseURL + url;
  fullUrl += "?";
  for (const q in query) {
    fullUrl += `${q}=${query[q]}&`;
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
  return async function <T = unknown>(
    { method, url, data, query, contentType }: IAxiosApiWrapper,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    success?: ActionCreatorWithPayload<any, string>
  ): Promise<T | void> {
    dispatch(actions.setInitialState());
    if (query) url = addQueryToUrl(url, query);
    const response = await AxiosSwitchMethod<T>(method, url, data, contentType);
    if (!response) dispatch(actions.setIsError("Undefined method"));
    if ((response as AxiosError).response) {
      const error = (response as AxiosError).response?.data;
      dispatch(actions.setIsError(error || ""));
    } else {
      if (success) dispatch(success((response as AxiosResponse).data));
      dispatch(actions.setIsSuccess());
      return (response as AxiosResponse).data;
    }
  };
};

export const ApiWrapper = ApiCreator(apiSlice.actions);
