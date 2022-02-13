import { FC } from "react";
import { User, UserChangePassword } from "../../../types";
import BasicInput from "../primitive/BasicInput";
import BasicLabel from "../primitive/BasicLabel";
import ColumnField from "../primitive/ColumnField";
import LineField from "../primitive/LineField";
import SwitchInput, { SwitchInputMode } from "../primitive/SwitchInput";

interface UserDataViewProps extends User {
  mode: SwitchInputMode;
  userData: User;
  userDataSetter: (value: User) => void;
  passData: UserChangePassword;
  passDataSetter: (value: UserChangePassword) => void;
}

const UserDataView: FC<UserDataViewProps> = function ({
  nickname,
  email,
  mode,
  userData,
  userDataSetter,
  passData,
  passDataSetter,
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
          onChangeHandler={(e) =>
            userDataSetter({ ...userData, nickname: e.target.value })
          }
        >
          {nickname}
        </SwitchInput>
        <SwitchInput
          mode={mode}
          name="email"
          type="text"
          onChangeHandler={(e) =>
            userDataSetter({ ...userData, email: e.target.value })
          }
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
                passDataSetter({ ...passData, prevPassword: e.target.value })
              }
            />
            <BasicInput
              name="new-password"
              type="password"
              defaultValue=""
              autocomplete={false}
              onChangeHandler={(e) =>
                passDataSetter({ ...passData, newPassword: e.target.value })
              }
            />
          </>
        )}
      </ColumnField>
    </LineField>
  );
};

export default UserDataView;
