import styled from "styled-components";

export const StyledPostCreatorWrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledImageField = styled.div`
  min-height: 200px;
  width: 100%;
  position: relative;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
  }
  .svg {
    width: 180px;
    height: 180px;
    position: absolute;
    transition: all 0.5s ease-in-out;
    :hover {
      background: rgba(0, 114, 0, 0.2);
      #green {
        opacity: 0;
      }
    }
  }
  transition: all 0.5s ease-in-out;
`;

export const StyledPostCreator = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  border-radius: 16px;
  min-width: 480px;
`;

export const StyledManageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledImage = styled.img`
  border: 1px solid #000;
  border-radius: 12px;
  z-index: 1;
  height: 100vh;
`;
