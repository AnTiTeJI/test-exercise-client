import styled from "styled-components";
import { GreenColor } from "../../../style";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: ${GreenColor};
  z-index: 3;
`;
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 2em;
`;

export const StyledImg = styled.img<{ border?: boolean }>`
  width: 32px;
  height: 32px;
  border: ${(props) => (props.border ? "1px solid #fff" : 0)};
  border-radius: 100%;
`;
