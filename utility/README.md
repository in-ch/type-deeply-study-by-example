https://javascript.plainenglish.io/15-utility-types-that-every-typescript-developer-should-know-6cf121d4047c

### 들어가며

built in Utility들을 활용하면 굳이 conditional이나 mapping해서 쓸 필요없이 필요한 type을 만들 수 있다.

1.  Partial<Type>
    > 안에 타입들을 optional로 만들 수 있다.

```
type User = {
    name: string;
    password: string;
    address: string;
    phone: string;
}

// bad
type PartialUser = {
    name?: string;
    password?: string;
    address?: string;
    phone?: string;
}

// Good
type PartialUser = Partial<User>
```

2.  Required<Type>
    > Partial과 반대로 필수 값으로 만들 수 있다.

```
type User = {
    name?: string;
    password?: string;
    address?: string;
    phone?: string;
}

type RequiredUser = {
    name: string;
    password: string;
    address: string;
    phone: string;
}

type RequiredUser = Required<User>
```

3.  Readonly<Type>
    모든 속성을 읽기 전용으로 만들 수 있다. 보통 immutability한 값을 쓸 때 사용한다. const와 비슷한 개념이라고 생각해도 될 듯

```
type User = {
    name: string;
    password: string;
    address: string;
    phone: string;
}

type ReadonlyUser = {
    readonly name: string;
    readonly password: string;
    readonly address: string;
    readonly phone: string;
}

type ReadonlyUser = Readonly<User>
```

4.  Record<Keys, Type>
    > key는 속성 키가 되고 type은 속성 값이 되는 유형의 type을 생성한다.
    > (쓸 일이 있을까...?)

```
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
}
type UserMap = Record<UserIds, User>;
```

5.  Exclude
    > 2개의 제네릭 타입을 받아서 겹치는 타입을 제외한 타입을 반환한다.

```
type OnlyNumber = Exclude<string | number, string>;
```

6.  Extract

    > Exclude와 반대되는 개념

7.  Pick<T, K>
    > T 타입으로부터 K 프로퍼티만 추출한다.

```
interface Event {
    id: string;
    title: string;
    inDone: boolean;
};

type Info = Pick<Event, 'id' | 'title'>;
```

8. Omit<T, K>
   > T 타입으로부터 K 프로퍼티만 제거한 후 추출한다.

```
interface Event {
    id: string;
    title: string;
    inDone: boolean;
};

type Info = Omit<Event, 'id' | 'title'>;
```

9. NonNullable<T>

   > T에서 null, undefined를 제거한 type을 반환한다.

10. Parameters<T>
    > parameter type을 활용해서 tuple type을 만들 수 있다.

```
function getUserInfo(id: number, name: string){
    return `User ID: ${id}, User Name: ${name}`;
}

type FuncParams = Parameters<typeof getUserInfo>
// [id: number, name: string]

type FirstParameter = Parameters<typeof getUserInfo>[0]
// number
```

11. ReturnType<T>
    > 이번엔 return 되는 값에 따라 타입을 만들 수 있다.

```
function getUserInfo(id: number, name: string){
    return `User ID: ${id}, User Name: ${name}`;
}

type FuncReturnType = ReturnType<typeof getUserInfo>;
// string

type T0 = ReturnType<(s:string) => void>;
// void To = void
type T1 = ReturnType<any>;
// any
type T2 = ReturnType<never>;
// never
```

12. Uppercase<T>
    > 다 대문자로 만들 수 있다.

```
type Method = "get" | "post" | "put" | "delete";
type UppercaseMethod = Uppercase<Method>;
```

13. Lowercase<T>
    > 위와 비슷하게 다 소문자로 만들 수 있다.

```
type Method = "GET" | "POST" | "PUT" | "DELETE";
type LowercaseMethod = Lowercase<Method>;
```

14. Capitalize<T>
    > 앞글자만 대문자로 만들 수 있다.

```
type Method = "get" | "post" | "put" | "delete"
type CapitailizeMethod = Capitalize<Method>;
```

15. Uncapitalize<T>
    > 비슷하게 앞을 소문자로 만들 수 있다.

```
type Method = "Get" | "Post" | "Put" | "Delete"
type CapitailizeMethod = Capitalize<Method>;
```
