import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";

interface PostState {
  userPosts: Post[];
  cashPosts: Post[];
  userPage: number;
  cashPage: number;
}
const initialState: PostState = {
  userPosts: [],
  cashPosts: [],
  userPage: 1,
  cashPage: 1,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserPosts: (state: PostState, action: PayloadAction<Post[]>) => {
      state.userPosts = state.userPosts.concat(action.payload);
      state.userPage++;
    },
    getPosts: (state: PostState, action: PayloadAction<Post[]>) => {
      state.cashPosts = state.cashPosts.concat(action.payload);
      state.cashPage++;
    },
  },
});

export const { getUserPosts, getPosts } = postSlice.actions;
