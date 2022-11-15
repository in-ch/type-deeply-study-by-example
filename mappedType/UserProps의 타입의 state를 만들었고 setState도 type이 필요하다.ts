interface UserProps {
  no: number;
  name: string;
  age: number;
  createdTime: Date;
  updatedTime: Date;
}

type Setter<P> = {
  [T in keyof P as `set${Capitalize<T & string>}`]: (value: P[T]) => void;
};

type SetterUserProps = Setter<UserProps>;
