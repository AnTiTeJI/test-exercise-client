import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import {
  DarkGreenColor,
  DarkRedColor,
  GreenColor,
  RedColor,
} from "../../../style";

interface StyledButtonProps {
  cancelMode?: boolean;
}
const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) => (props.cancelMode ? RedColor : GreenColor)};
  font-size: 1.4em;
  color: #fff;
  border: 0;
  padding: 8px;
  margin: 4px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.cancelMode ? DarkRedColor : DarkGreenColor};
  }
  transition: all 0.2s ease-in-out;
`;

interface BasicButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClickHandler: MouseEventHandler;
  cancelMode?: boolean;
}

const BasicButton: FC<BasicButtonProps> = function ({
  children,
  type,
  onClickHandler,
  cancelMode,
}) {
  return (
    <StyledButton
      type={type ? type : "button"}
      onClick={onClickHandler}
      cancelMode={cancelMode}
    >
      {children}
    </StyledButton>
  );
};

export default BasicButton;
