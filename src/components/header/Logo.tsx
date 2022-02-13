import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLogo = styled(Link)`
  cursor: pointer;
  font-size: 2em;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
`;

const Logo: FC = function () {
  return <StyledLogo to="/">Blog</StyledLogo>;
};

export default Logo;
