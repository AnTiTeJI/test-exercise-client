import { ChangeEventHandler, FC } from "react";
import styled from "styled-components";
import BasicInput from "./BasicInput";

const StyledInput = styled.input`
  background: transparent;
  font-size: 1.2em;
  margin: 10px;
  outline: 0;
  border: 0;
  cursor: default;
`;
export type SwitchInputMode = "input" | "label";

interface SwitchInputProps {
  mode?: SwitchInputMode;
  name: string;
  type: string;
  children: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SwitchInput: FC<SwitchInputProps> = function ({
  mode,
  name,
  type,
  children,
  onChangeHandler,
}) {
  switch (mode) {
    case "input":
      return (
        <BasicInput
          name={name}
          type={type}
          onChangeHandler={onChangeHandler}
          defaultValue={children}
        ></BasicInput>
      );
    default:
      return <StyledInput defaultValue={children} readOnly={true} />;
  }
};

export default SwitchInput;
