import decode from "jwt-decode";
import { dispatch } from "../../store/$store";
import { setImage, setIsAuth, setUserData } from "../../store/user.slice";
import {
  User,
  UserData,
  UserLoginBody,
  UserChangePassword,
  UserRegistrationBody,
} from "../../types";

import { ApiWrapper } from "../custom.api";
import { userRoutes } from "./$api.routes";

export async function postUserRegistration(body: UserRegistrationBody) {
  const data = await ApiWrapper<{ access: string }>({
    method: "post",
    url: userRoutes.registration,
    data: body,
  });
  if (data) {
    localStorage.setItem("access", data.access);
    const user = decode<UserData>(data.access);
    dispatch(setIsAuth(true));
    dispatch(setUserData(user));
  }
}

export async function postUserLogin(body: UserLoginBody) {
  const data = await ApiWrapper<{ access: string }>({
    method: "post",
    url: userRoutes.login,
    data: body,
  });
  if (data) {
    localStorage.setItem("access", data.access);
    const user = decode<UserData>(data.access);
    dispatch(setIsAuth(true));
    dispatch(setUserData(user));
  }
}

export async function fetchUserDetails() {
  const access = localStorage.getItem("access");
  if (!access) return;
  const data = await ApiWrapper<UserData>({
    method: "get",
    url: userRoutes.user,
    data: access,
  });
  if (data) {
    dispatch(setIsAuth(true));
    dispatch(setUserData(data));
  } else dispatch(setIsAuth(false));
}

export async function postUserImage(file: FileList | null) {
  if (file) {
    const formData = new FormData();
    formData.set("image", file[0]);
    await ApiWrapper<{ image: string }>(
      {
        method: "post",
        url: userRoutes.AddImage,
        data: formData,
        contentType: "multipart/form-data",
      },
      setImage
    );
  }
}

export async function putUserChangeData(body: User) {
  await ApiWrapper<UserData>(
    {
      method: "put",
      url: userRoutes.changeData,
      data: body,
    },
    setUserData
  );
}

export async function putUserChangePassword(body: UserChangePassword) {
  await ApiWrapper<UserData>({
    method: "put",
    url: userRoutes.changePass,
    data: body,
  });
}
