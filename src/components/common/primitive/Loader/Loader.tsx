import { FC } from "react";
import { StyledDiv, StyledLoader, StyledSpan } from "./style";

const Loader: FC = function () {
  return (
    <StyledLoader>
      <StyledDiv>
        <StyledSpan />
        <StyledSpan />
        <StyledSpan />
      </StyledDiv>
    </StyledLoader>
  );
};
export default Loader;
