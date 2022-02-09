import { Method } from "axios";

export interface Cook {
  level: string;
}

export type IPayload = boolean | string;

export interface IParam {
  [key: string]: string | number;
}

export interface IAxiosApiWrapper {
  method: Method;
  url: string;
  data?: unknown;
  params?: IParam;
  contentType?: string;
}

export interface IToken {
  access: string;
}
