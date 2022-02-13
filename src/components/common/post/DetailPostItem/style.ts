import styled from "styled-components";
import { GreenColor } from "../../../../style";

export const StyledPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${GreenColor};
  padding: 24px;
  border-radius: 8px;
`;
export const StyledImage = styled.img`
  max-height: 70vh;
  position: relative;
`;
export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px;
`;
export const Title = styled.div`
  font-size: 1.4em;
  margin: 10px 0;
`;

export const StyledCreateComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const StyledHr = styled.hr`
  width: 100%;
  height: 1px;
  background: ${GreenColor};
  border: 0;
  margin: 20px 0;
`;

export const StyledCommentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  word-wrap: normal;
  position: relative;
  max-width: 640px;
  width: 100%;
  margin: 0 20px;
`;
