import { FC } from "react";
import BasicButton from "../primitive/BasicButton";
import LineField from "../primitive/LineField";
import { SwitchInputMode } from "../primitive/SwitchInput";

interface UserDetailProps {
  mode: SwitchInputMode;
  setMode: (value: SwitchInputMode) => void;
  userHandler: () => void;
  passHandler: () => void;
}

const UserDetail: FC<UserDetailProps> = function ({
  mode,
  setMode,
  userHandler,
  passHandler,
}) {
  return (
    <LineField>
      {mode === "input" && (
        <BasicButton
          onClickHandler={() => {
            setMode("label");
            userHandler();
            passHandler();
          }}
        >
          Save
        </BasicButton>
      )}
      <BasicButton
        cancelMode={mode === "input" ? true : false}
        onClickHandler={() => setMode(mode === "input" ? "label" : "input")}
      >
        {mode === "input" ? "Cancel" : "Change"}
      </BasicButton>
    </LineField>
  );
};

export default UserDetail;
