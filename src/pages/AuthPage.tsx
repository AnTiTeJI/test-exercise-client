import { FC } from "react";
import styled from "styled-components";
import LoginForm from "../components/common/auth/LoginForm";

const StyledAuthPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AuthPage: FC = function () {
  return (
    <StyledAuthPage>
      <LoginForm />
    </StyledAuthPage>
  );
};

export default AuthPage;
