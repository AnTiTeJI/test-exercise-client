import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
export interface IDefaultState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  error: string | string[] | null;
}

const initialState: IDefaultState = {
  isLoading: true,
  isSuccess: false,
  isFailed: false,
  error: null,
};

export const apiSlice = createSlice({
  name: "Api",
  initialState,
  reducers: {
    setIsLoading: (state: IDefaultState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsFailed: (state: IDefaultState, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload;
    },
    setIsSuccess: (state: IDefaultState) => {
      state.isSuccess = true;
      state.isLoading = false;
    },
    setIsError: (
      state: IDefaultState,
      action: PayloadAction<string | string[]>
    ) => {
      state.error = action.payload;
      state.isFailed = true;
      state.isLoading = false;
    },
    setInitialState: (state: IDefaultState) => {
      state.isLoading = true;
      state.isFailed = false;
      state.isSuccess = false;
      state.error = "";
    },
  },
});

export default apiSlice;

export const {
  setInitialState,
  setIsError,
  setIsFailed,
  setIsLoading,
  setIsSuccess,
} = apiSlice.actions;

export type ActionType = typeof apiSlice.actions;
