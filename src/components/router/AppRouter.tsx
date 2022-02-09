import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/useAppStore";
import AuthPage from "../../pages/AuthPage";
import CreatePostPages from "../../pages/CreatePostPages";
import DetailPostPage from "../../pages/DetailPostPage";
import HomePage from "../../pages/HomePage";
import PostsPage from "../../pages/PostsPage";
import UserPage from "../../pages/UserPage/UserPage";
import Header from "../header/Header/Header";
import { IRoute, privateAppRoutes, publicAppRoutes } from "./routes";

const privateRoutes: IRoute[] = [
  { path: privateAppRoutes.UserPage, element: <UserPage /> },
  { path: privateAppRoutes.CreatePostPage, element: <CreatePostPages /> },
];

const publicRoutes: IRoute[] = [
  { path: publicAppRoutes.HomePage, element: <HomePage /> },
  { path: publicAppRoutes.PostsPage, element: <PostsPage /> },
  { path: publicAppRoutes.DetailPostPage, element: <DetailPostPage /> },
  { path: "*" || "404", element: <Header /> },
];

const unthorizedRoutes: IRoute[] = [
  { path: publicAppRoutes.AuthPage, element: <AuthPage /> },
];

const StyledPageWrapper = styled.main`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
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
