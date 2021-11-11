export interface User {
  node: {
    login: string;
    avatarUrl: string;
    id: string;
    url: string;
  };
}

export interface UserPersonalInfo {
  user: {
    login: string;
    avatarUrl: string;
    name: string;
    createdAt: Date;
    company: string;
    email: string;
    location: string;
    bio: string;
    followers: {
      nodes: { name: string; login: string }[];
    };
    following: {
      nodes: { name: string; login: string }[];
    };
  };
}
