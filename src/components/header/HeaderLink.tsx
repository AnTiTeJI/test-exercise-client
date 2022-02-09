import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderLinkProps {
  path: string;
  item: string | ReactElement;
}

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  margin: 8px;
  font-size: 0.7em;
`;

const HeaderLink: FC<HeaderLinkProps> = function ({ path, item }) {
  return <StyledLink to={path}>{item}</StyledLink>;
};

export default HeaderLink;
