import { FC } from "react";
import { User } from "../../../types";
import { PasswordChangeBody } from "../../../types/api";
import BasicInput from "../primitive/BasicInput";
import BasicLabel from "../primitive/BasicLabel";
import ColumnField from "../primitive/ColumnField";
import LineField from "../primitive/LineField";
import SwitchInput, { SwitchInputMode } from "../primitive/SwitchInput";

interface UserDataViewProps extends User {
  mode: SwitchInputMode;
  state: PasswordChangeBody;
  setter: (value: PasswordChangeBody) => void;
}

const UserDataView: FC<UserDataViewProps> = function ({
  nickname,
  email,
  mode,
  state,
  setter,
}) {
  return (
    <LineField>
      <ColumnField>
        <BasicLabel>Nickname:</BasicLabel>
        <BasicLabel>Email:</BasicLabel>
        {mode === "input" && (
          <>
            <BasicLabel>Previous password:</BasicLabel>
            <BasicLabel>New password:</BasicLabel>
          </>
        )}
      </ColumnField>
      <ColumnField>
        <SwitchInput
          mode={mode}
          name="nickname"
          type="text"
          onChangeHandler={(e) => console.log(e)}
        >
          {nickname}
        </SwitchInput>
        <SwitchInput
          mode={mode}
          name="email"
          type="text"
          onChangeHandler={(e) => console.log(e)}
        >
          {email}
        </SwitchInput>
        {mode === "input" && (
          <>
            <BasicInput
              name="cursssada"
              type="password"
              defaultValue=""
              autocomplete={false}
              onChangeHandler={(e) =>
                setter({ ...state, prevPassword: e.target.value })
              }
            />
            <BasicInput
              name="new-password"
              type="password"
              defaultValue=""
              autocomplete={false}
              onChangeHandler={(e) =>
                setter({ ...state, newPassword: e.target.value })
              }
            />
          </>
        )}
      </ColumnField>
    </LineField>
  );
};

export default UserDataView;
