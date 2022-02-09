import { FC, useState } from "react";
import { SwitchInputMode } from "../../components/common/primitive/SwitchInput";
import LogoMain from "../../components/common/user/LogoMain/LogoMain";
import UserDataManage from "../../components/common/user/UserDataManage";
import UserDataView from "../../components/common/user/UserDataView";
import { useAppSelector } from "../../hooks/useAppStore";
import { PasswordChangeBody } from "../../types/api";

import { StyledUserManage, StyledUserPage, StyledUserWrapper } from "./style";

const UserPage: FC = function () {
  const [mode, setMode] = useState<SwitchInputMode>("label");
  const [changePass, setChangePass] = useState<PasswordChangeBody>({
    prevPassword: "",
    newPassword: "",
  });
  const { nickname, email, image } = useAppSelector((state) => state.user);
  return (
    <StyledUserPage>
      <StyledUserWrapper>
        <LogoMain image={image} />
        <StyledUserManage>
          <UserDataView
            mode={mode}
            email={email}
            nickname={nickname}
            state={changePass}
            setter={setChangePass}
          />

          <UserDataManage mode={mode} setMode={setMode} />
        </StyledUserManage>
      </StyledUserWrapper>
    </StyledUserPage>
  );
};

export default UserPage;
