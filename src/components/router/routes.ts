import { ReactElement } from "react";

export interface IRoute {
  path: string;
  element: ReactElement;
}
export const publicAppRoutes = {
  AuthPage: "/auth",
  HomePage: "/posts",
  PostsPage: "/:id/posts",
  DetailPostPage: "posts/:id",
};

export const privateAppRoutes = {
  CreatePostPage: ":id/create",
  UserPage: "/user",
};
