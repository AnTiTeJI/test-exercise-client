import { FC } from "react";
import styled from "styled-components";
const StyledLogo = styled.div`
  cursor: pointer;
  font-size: 2em;
  font-weight: 500;
  color: #fff;
`;

interface LogoProps {
  children: string;
}

const Logo: FC<LogoProps> = function ({ children }) {
  return <StyledLogo>{children}</StyledLogo>;
};

export default Logo;
