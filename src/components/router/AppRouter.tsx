import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/useAppStore";
import AuthPage from "../../pages/AuthPage";
import CreatePostPage from "../../pages/CreatePostPage/CreatePostPage";
import DetailPostPage from "../../pages/DetailPostPage";
import PostsPage from "../../pages/PostsPage";
import PostsUserPage from "../../pages/PostsUserPage";
import UserPage from "../../pages/UserPage/UserPage";
import Header from "../header/Header/Header";
import { IRoute, privateAppRoutes, publicAppRoutes } from "./routes";

const privateRoutes: IRoute[] = [
  { path: privateAppRoutes.UserPage, element: <UserPage /> },
  { path: privateAppRoutes.CreatePostPage, element: <CreatePostPage /> },
];

const publicRoutes: IRoute[] = [
  { path: publicAppRoutes.HomePage, element: <PostsPage /> },
  { path: publicAppRoutes.PostsPage, element: <PostsUserPage /> },
  { path: publicAppRoutes.DetailPostPage, element: <DetailPostPage /> },
  { path: "*", element: <PostsPage /> },
];

const unthorizedRoutes: IRoute[] = [
  { path: publicAppRoutes.AuthPage, element: <AuthPage /> },
];

const StyledPageWrapper = styled.main`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 70px;
`;

const AppRouter: FC = function () {
  const { isAuth } = useAppSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Header />
      <StyledPageWrapper className="container">
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {isAuth
            ? privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))
            : unthorizedRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
        </Routes>
      </StyledPageWrapper>
    </BrowserRouter>
  );
};

export default AppRouter;
