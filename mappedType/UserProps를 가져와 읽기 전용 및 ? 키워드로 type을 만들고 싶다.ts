interface UserProps {
  no: number;
  name: string;
  age: number;
  createdTime: Date;
  updatedTime: Date;
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type ReadOnlyPartialUserProps = ReadOnly<Partial<UserProps>>;
