import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api.slice";
import { userSlice } from "./user.slice";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    user: userSlice.reducer,
  },
});

export const dispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
