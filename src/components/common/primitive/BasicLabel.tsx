import { FC } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  padding: 10px;
  padding-right: 12px;
  font-size: 1.2em;
`;

interface BasicLabelProps {
  children: string;
}

const BasicLabel: FC<BasicLabelProps> = function ({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
};

export default BasicLabel;
