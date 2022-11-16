interface UserProps {
  no: number;
  name: string;
  age: number;
  fuc: () => void;
  createdTime: Date;
  updatedTime: Date;
}

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T]; // "fuc", keyof T를 명시하지 않으면 T에 제네릭을 넣을 수 없다.
type FunctionProperty<T> = Pick<T, FunctionPropertyNames<T>>;

export type FunctionPropertyUserProps = FunctionProperty<UserProps>;
