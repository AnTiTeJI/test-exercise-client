export interface UserLoginBody {
  email: string;
  password: string;
}

export interface UserRegistrationBody extends UserLoginBody {
  nickname: string;
}

export interface userFormData extends UserLoginBody {
  nickname?: string;
}

export interface PasswordChangeBody {
  prevPassword: string;
  newPassword: string;
}
