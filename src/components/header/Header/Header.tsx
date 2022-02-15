import { FC } from "react";
import HeaderLink from "../HeaderLink";
import Logo from "../Logo";
import userSvg from "../../../images/user.svg";
import blogSvg from "../../../images/blog.svg";
import { useAppSelector } from "../../../hooks/useAppStore";
import config from "../../../config.json";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledImg,
  StyledNav,
} from "./style";

const Header: FC = function () {
  const { id, isAuth, image } = useAppSelector((state) => state.user);
  return (
    <StyledHeaderWrapper>
      <StyledHeader className="container">
        <Logo />
        {isAuth ? (
          <StyledNav>
            <HeaderLink
              path="user"
              item={
                <StyledImg
                  border={image ? true : false}
                  src={image ? `${config.SERVER_URL}/${image}` : userSvg}
                ></StyledImg>
              }
            />
            <HeaderLink
              path={`${id}/posts`}
              item={<StyledImg src={blogSvg}></StyledImg>}
            />
          </StyledNav>
        ) : (
          <StyledNav>
            <HeaderLink path="auth" item={"Авторизация"}></HeaderLink>
          </StyledNav>
        )}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
