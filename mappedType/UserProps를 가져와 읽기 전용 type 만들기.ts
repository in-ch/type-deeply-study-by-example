interface UserProps {
  no: number;
  name: string;
  age: number;
  createdTime: Date;
  updatedTime: Date;
}

type ReadOnly<P> = {
  readonly [T in keyof P]: P[T];
};

type ReadOnlyUserProps = ReadOnly<UserProps>;
