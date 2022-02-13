import { Method } from "axios";

export interface Cook {
  level: string;
}

export type IPayload = boolean | string;

export interface IQuery {
  [key: string]: string | number;
}

export interface IAxiosApiWrapper {
  method: Method;
  url: string;
  data?: unknown;
  query?: IQuery;
  contentType?: "application/json" | "multipart/form-data";
}

export interface IToken {
  access: string;
}
