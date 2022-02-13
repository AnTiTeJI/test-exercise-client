import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../types";

interface userState {
  id: number;
  email: string;
  nickname: string;
  image: string;
  isAuth: boolean;
}
const initialState: userState = {
  id: 0,
  email: "",
  nickname: "",
  image: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getIsAuth: (state: userState) => {
      if (localStorage.getItem("isAuth") === "true") {
        state.isAuth = true;
      }
    },
    setIsAuth: (state: userState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      localStorage.setItem("isAuth", `${action.payload}`);
    },
    setUserData: (state: userState, action: PayloadAction<UserData>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.image = action.payload.image;
    },
    setImage: (state: userState, action: PayloadAction<{ image: string }>) => {
      state.image = action.payload.image;
    },
  },
});

export const { getIsAuth, setIsAuth, setUserData, setImage } =
  userSlice.actions;
