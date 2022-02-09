import { ChangeEventHandler, FC } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 4px;
  margin: 4px;
  font-size: 1.2em;
`;

interface BasicInputProps {
  name: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  autocomplete?: boolean;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const BasicInput: FC<BasicInputProps> = function ({
  name,
  type,
  placeholder,
  defaultValue,
  autocomplete,
  onChangeHandler,
}) {
  return (
    <StyledInput
      name={name}
      type={type}
      onChange={onChangeHandler}
      autoComplete={autocomplete ? "on" : "off"}
      placeholder={placeholder ? placeholder : ""}
      defaultValue={defaultValue ? defaultValue : ""}
    />
  );
};

export default BasicInput;
