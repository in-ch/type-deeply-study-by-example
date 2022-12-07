type UserIds = 1 | 2 | 3;
type User = {
  name: string;
  password: string;
  address: string;
  phone: string;
};
type UserMap1 = {
  1: User;
  2: User;
  3: User;
};
type UserMap = Record<UserIds, User>;
