interface UserProps {
  no: number;
  name: string;
  age: number;
  createdTime: Date;
  updatedTime: Date;
}

type Particle<P> = {
  readonly [T in keyof P]?: P[T];
};

type PartialsUserProps = Particle<UserProps>;
