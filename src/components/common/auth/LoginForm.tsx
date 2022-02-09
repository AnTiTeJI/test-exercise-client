import { FC, useState } from "react";
import styled from "styled-components";
import { lightGreenColor } from "../../../style";
import BasicButton from "../primitive/BasicButton";
import BasicInput from "../primitive/BasicInput";
import BasicLabel from "../primitive/BasicLabel";
import {
  userFormData,
  UserLoginBody,
  UserRegistrationBody,
} from "../../../types/api";
import {
  postUserLogin,
  postUserRegistration,
} from "../../../API/services/api.user";
import ColumnField from "../primitive/ColumnField";
import LineField from "../primitive/LineField";

const StyledForm = styled.form`
  background: ${lightGreenColor};
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const LoginForm: FC = function () {
  const [loginMode, setLoginMode] = useState<boolean>(true);
  const [formData, setFormData] = useState<userFormData>({
    nickname: "",
    email: "",
    password: "",
  });
  return (
    <StyledForm>
      <LineField>
        <ColumnField>
          <BasicLabel>Email:</BasicLabel>
          {!loginMode && <BasicLabel>Nickname:</BasicLabel>}
          <BasicLabel>Password:</BasicLabel>
        </ColumnField>
        <ColumnField>
          <BasicInput
            name="email"
            type="email"
            placeholder={"Email"}
            onChangeHandler={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {!loginMode && (
            <BasicInput
              name="nickname"
              type="text"
              placeholder={"Nickname"}
              onChangeHandler={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
            />
          )}
          <BasicInput
            name="password"
            type="password"
            placeholder={"Password"}
            onChangeHandler={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </ColumnField>
      </LineField>
      <LineField>
        <BasicButton
          type="button"
          onClickHandler={() =>
            !loginMode
              ? setLoginMode(true)
              : postUserLogin(formData as UserLoginBody)
          }
        >
          {loginMode ? "Войти" : "Вход"}
        </BasicButton>
        <BasicButton
          type="button"
          onClickHandler={() =>
            loginMode
              ? setLoginMode(false)
              : postUserRegistration(formData as UserRegistrationBody)
          }
        >
          {loginMode ? "Регистрация" : "Зарегестрироваться"}
        </BasicButton>
      </LineField>
    </StyledForm>
  );
};

export default LoginForm;
