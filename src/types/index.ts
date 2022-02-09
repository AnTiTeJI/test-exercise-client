export interface User {
  email: string;
  nickname: string;
}

export interface UserData extends User {
  id: number;
  image: string;
}

export interface Post {
  author: string;
  title: string;
  image: string;
  description: string;
}
