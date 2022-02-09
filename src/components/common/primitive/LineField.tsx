import { FC } from "react";
import styled from "styled-components";

const StyledManageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LineField: FC = function ({ children }) {
  return <StyledManageWrapper>{children}</StyledManageWrapper>;
};

export default LineField;
