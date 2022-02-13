import styled from "styled-components";
import { GreenColor } from "../../../../style";

export const StyledLoader = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledDiv = styled.div`
  position: relative;
  width: 7em;
  height: 7em;
`;

export const StyledSpan = styled.span`
  display: block;
  position: absolute;
  width: 7em;
  height: 7em;
  animation: rotate3 2s infinite ease-in-out;
  border-radius: 100%;
  :after {
    border-radius: 100%;
    content: "";
    display: block;
    position: absolute;
    background: ${GreenColor};
    width: 2em;
    height: 2em;
    left: 3em;
  }
  :first-child {
    left: -1em;
    top: -1.8em;
    animation: rotate1 2s infinite ease-in-out;
    transform: rotateZ(120deg);
  }
  :last-child {
    left: 1em;
    top: -1.8em;
    animation: rotate2 2s infinite ease-in-out;
    transform: rotateZ(240deg);
  }
  @keyframes rotate1 {
    0% {
      transform: rotateZ(120deg);
    }
    100% {
      transform: rotateZ(480deg);
    }
  }
  @keyframes rotate2 {
    from {
      transform: rotateZ(240deg);
    }
    to {
      transform: rotateZ(600deg);
    }
  }
  @keyframes rotate3 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
