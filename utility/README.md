https://javascript.plainenglish.io/15-utility-types-that-every-typescript-developer-should-know-6cf121d4047c

### 들어가며

built in Utility들을 활용하면 굳이 conditional이나 mapping해서 쓸 필요없이 필요한 type을 만들 수 있다.

1.  Partial<Type>
    안에 타입들을 optional로 만들 수 있다.
    <code>
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
    </code>

2.  Required<Type>
    Partial과 반대로 필수 값으로 만들 수 있다.
    <code>
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
    </code>

3.  Readonly<Type>
    모든 속성을 읽기 전용으로 만들 수 있다. 보통 immutability한 값을 쓸 때 사용한다. const와 비슷한 개념이라고 생각해도 될 듯
    <code>
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
    </code>

4.  Record<Keys, Type>
    key는 속성 키가 되고 type은 속성 값이 되는 유형의 type을 생성한다.
    (쓸 일이 있을까...?)

    <code>
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
    </code>

5.  Exclude
    2개의 제네릭 타입을 받아서 겹치는 타입을 제외한 타입을 반환한다.

<code>
type OnlyNumber = Exclude<string | number, string>;
</code>

6.  Extract
    Exclude와 반대되는 개념

7.  Pick<T, K>
    T 타입으로부터 K 프로퍼티만 추출한다.

<code>
    interface Event {
        id: string;
        title: string;
        inDone: boolean;
    };
    
    type Info = Pick<Event, 'id' | 'title'>;
</code>

8. Omit<T, K>
   T 타입으로부터 K 프로퍼티만 제거한 후 추출한다.

<code>
    interface Event {
        id: string;
        title: string;
        inDone: boolean;
    };
    
    type Info = Omit<Event, 'id' | 'title'>;
</code>

9. NonNullable<T>
   T에서 null, undefined를 제거한 type을 반환한다.
