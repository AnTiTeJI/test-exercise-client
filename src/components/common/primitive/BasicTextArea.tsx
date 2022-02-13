import { FC, FocusEventHandler, useRef } from "react";
import styled from "styled-components";

interface BasicTextAreaProps {
  onBlurHandler: FocusEventHandler<HTMLTextAreaElement>;
}

const StyledTextArea = styled.textarea`
  padding: 8px;
  overflow-y: hidden;
`;

const BasicTextArea: FC<BasicTextAreaProps> = function ({ onBlurHandler }) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  textRef.current?.addEventListener("input", () => {
    if (textRef.current) {
      textRef.current.style.height = "auto";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  });
  return <StyledTextArea ref={textRef} onBlur={onBlurHandler}></StyledTextArea>;
};

export default BasicTextArea;
