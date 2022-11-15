참고로 Interface는 extends를 사용하도록 만들어졌고 Mapped type은 말그대로 type에서 쓸 수 있다.

## What is Partial, Required, Readonly, Pick utility types?

```tsx
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

```tsx
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

```tsx
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

```tsx
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

1. 시나리오 1

- 다음은 기본적인 User 타입이다.

```tsx
type UserPartial = {
  name: string;
  password: string;
  address: string;
  phone: string;
};
```

- 사용자 정보를 보는 과정에서는 사용자 객체에 해당하는 객체 유형의 모든 키가 읽기 전용이길 바란다.

```tsx
type UserPartial = {
  readonly name: string;
  readonly password: string;
  readonly address: string;
  readonly phone: string;
};
```

![1_Lh1alTlQV3j9jRpHMkstwg.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e24dab3-ae8c-497f-82a8-2119bfa30832/1_Lh1alTlQV3j9jRpHMkstwg.jpeg)

2. 시나리오 2

- 다음은 기본적인 User 타입이다.

```tsx
type UserPartial = {
  name: string;
  password: string;
  address: string;
  phone: string;
};
```

- 유저가 입력될 때 모든 정보가 다 넘어오지 않는 경우가 있을 수 있으므로 Partial을 쓰고 싶다.

```tsx
type UserPartial = {
  name?: string;
  password?: string;
  address?: string;
  phone?: string;
};
```

![1_hqk7dDTzDUH3CGjM3Dmf3g.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05e45ba3-8ea1-4633-82b0-b5a77e016935/1_hqk7dDTzDUH3CGjM3Dmf3g.jpeg)

근데 문제는 여기서 중복 코드가 발생한다는 것이다.

그럴 때 Mapeed Types Syntax를 사용하는 것이다.

아래는 기본 구조

![1_7iuvURZie0JxNSmuAQe94w.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03c60fc1-943c-4497-81e0-c519c880fe7b/1_7iuvURZie0JxNSmuAQe94w.jpeg)

그리고 여기에 read-only 옵션과 question mart 등을 넣어서 사용할 수 있다.

![1_YK9f_jV3ETabwSDqHUSCmQ.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6338ec3-a3ba-4f1d-8f7f-5851df7bc72b/1_YK9f_jV3ETabwSDqHUSCmQ.gif)

- 여기서 접두사로 플러스 및 마이너스를 붙일 수 있는데 이는 추가 및 제거를 뜻한다. 기본값은 접두사가 추가되지 않은 경우 더하기(플러스) 기호이다.

```tsx
{ [ P in K ] : T }
{ [ P in K ] ?: T }
{ [ P in K ] -?: T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ?: T }
{ -readonly [ P in K ] ?: T }
```

![1_rROkBeeWqSMyh0VJkj5GwQ.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ae74dd7-dc43-4bb2-ae10-ec676a10f862/1_rROkBeeWqSMyh0VJkj5GwQ.jpeg)

예제)

```tsx
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
type UserPartial = MyPartial<User>;
```

![1_xYd92WiIGhbPnRWehDTVjA.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a003936-75bb-49b5-907d-53be1affaf93/1_xYd92WiIGhbPnRWehDTVjA.jpeg)

- as 절을 사용해서 매핑된 유형의 키를 다시 매핑할 수도 있다.

```tsx
type MappedTypeWithNewKeys<T> = {
  [K in keyof T as NewKeyType]: T[K];
  //            ^^^^^^^^^^^^^
  //            New Syntax！
};
```

```tsx
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }
```

- 위의 예제는 get으로 시작하는 타입들로 바꿔주는 것이다.

- 다음 예제는 kind라는 key값을 가진 타입을 제외시키는 예제

![1_X-OZUQ0oBDuqZH-sx8KxXg.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20cfda32-36bd-446e-98b9-cc3a34321fa1/1_X-OZUQ0oBDuqZH-sx8KxXg.jpeg)
