import { FC, useState } from "react";
import {
  putUserChangeData,
  putUserChangePassword,
} from "../../API/services/api.user";
import { SwitchInputMode } from "../../components/common/primitive/SwitchInput";
import LogoMain from "../../components/common/user/LogoMain/LogoMain";
import UserDataManage from "../../components/common/user/UserDataManage";
import UserDataView from "../../components/common/user/UserDataView";
import { useAppSelector } from "../../hooks/useAppStore";
import { User, UserChangePassword } from "../../types";
import { StyledUserManage, StyledUserPage, StyledUserWrapper } from "./style";

const UserPage: FC = function () {
  const { nickname, email, image } = useAppSelector((state) => state.user);
  const { isLoading } = useAppSelector((state) => state.api);
  const [mode, setMode] = useState<SwitchInputMode>("label");
  const [changeData, setChangeData] = useState<User>({
    email: "",
    nickname: "",
  });
  const [changePass, setChangePass] = useState<UserChangePassword>({
    prevPassword: "",
    newPassword: "",
  });

  function changeUserData() {
    if (
      (changeData.email && changeData.email != email) ||
      (changeData.nickname && changeData.nickname != nickname)
    )
      putUserChangeData(changeData);
  }

  function changeUserPass() {
    if (changePass.prevPassword && changePass.newPassword)
      putUserChangePassword(changePass);
  }
  return (
    <StyledUserPage>
      {isLoading ? (
        "Loading..."
      ) : (
        <StyledUserWrapper>
          <LogoMain image={image} />
          <StyledUserManage>
            <UserDataView
              mode={mode}
              email={email}
              nickname={nickname}
              userData={changeData}
              userDataSetter={setChangeData}
              passData={changePass}
              passDataSetter={setChangePass}
            />
            <UserDataManage
              mode={mode}
              setMode={setMode}
              userHandler={changeUserData}
              passHandler={changeUserPass}
            />
          </StyledUserManage>
        </StyledUserWrapper>
      )}
    </StyledUserPage>
  );
};

export default UserPage;
