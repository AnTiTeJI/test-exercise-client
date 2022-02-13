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

export interface UserChangePassword {
  prevPassword: string;
  newPassword: string;
}

export interface PostBody {
  title: string;
  description: string;
}

export interface User {
  email: string;
  nickname: string;
}

export interface UserData extends User {
  id: number;
  image: string;
}

export interface Post {
  id: number;
  date?: string;
  title: string;
  image?: string;
  author: string;
}

export interface Comment {
  author: string;
  message: string;
}

export interface PostDetail {
  post: Post & { description: string };
  comments: Comment[];
}
