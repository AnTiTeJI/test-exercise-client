import { FC } from "react";
import { UserImage, UserImgBtn } from "./style";
import { postUserImage } from "../../../../API/services/api.user";
import userSvg from "../../../../images/user-logo.svg";
import cameraSvg from "../../../../images/camera.svg";
import config from "../../../../config.json";
interface LogoMainProps {
  image: string;
}
const LogoMain: FC<LogoMainProps> = function ({ image }) {
  return (
    <UserImgBtn>
      <UserImage src={image ? `${config.SERVER_URL}/${image}` : userSvg} />
      <span>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={(e) => postUserImage(e.target.files)}
        ></input>
        <img src={cameraSvg} />
      </span>
    </UserImgBtn>
  );
};

export default LogoMain;
