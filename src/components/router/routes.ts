import { ReactElement } from "react";

export interface IRoute {
  path: string;
  element: ReactElement;
}
export const publicAppRoutes = {
  AuthPage: "/auth",
  HomePage: "/posts",
  PostsPage: "/:id/posts",
  DetailPostPage: "/posts/post/:id",
};

export const privateAppRoutes = {
  CreatePostPage: "/posts/create",
  UserPage: "/user",
};
