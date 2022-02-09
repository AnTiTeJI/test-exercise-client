import decode from "jwt-decode";
import { dispatch } from "../../store/store";
import { setImage, setIsAuth, setUserData } from "../../store/user.slice";
import { UserData } from "../../types";
import { UserLoginBody, UserRegistrationBody } from "../../types/api";
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
    formData.append("image", file[0]);
    console.log("Send photo");
    const data = await ApiWrapper<{ image: string }>({
      method: "post",
      url: "/user/image",
      data: formData,
      contentType: "multipart/form-data",
    });
    if (data) dispatch(setImage(data.image));
  }
}
