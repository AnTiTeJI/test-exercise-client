import { FC, ReactElement, useEffect } from "react";
import { fetchUserDetails } from "../API/services/api.user";

interface AuthWrapperProps {
  children: ReactElement;
}

const AuthWrapper: FC<AuthWrapperProps> = function ({ children }) {
  useEffect(() => {
    fetchUserDetails();
  });
  return <>{children}</>;
};

export default AuthWrapper;
