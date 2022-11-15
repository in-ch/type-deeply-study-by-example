interface UserProps {
  no: number;
  name: string;
  age: number;
  createdTime: Date;
  updatedTime: Date;
}

type Excludes<P, U> = {
  [T in keyof P as Exclude<T, U>]: P[T];
};

type ExcludesUserProps = Excludes<UserProps, "createdTime" | "updatedTime">;
type ExcludesUserProps2 = Exclude<UserProps, "createdTime" | "updatedTime">;
type ExcludesUserProps3 = Omit<UserProps, "createdTime" | "updatedTime">;
