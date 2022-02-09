import styled from "styled-components";
import { GreenColor } from "../../../../style";

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid ${GreenColor};
  :hover {
  }
`;

export const UserImgBtn = styled.button`
  height: 200px;
  width: 200px;
  border: 0;
  margin: 20px;
  background: transparent;
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8em;
    color: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    img {
      width: 80px;
      height: 80px;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
  :hover {
    span {
      background: rgba(0, 114, 0, 0.2);
      opacity: 1;
    }
  }
`;
