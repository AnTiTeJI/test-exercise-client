import { FC } from "react";
import styled from "styled-components";

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnField: FC = function ({ children }) {
  return <StyledField>{children}</StyledField>;
};

export default ColumnField;
