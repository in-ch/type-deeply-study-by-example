### 들어가며

infer는 추론하다라는 뜻이다.
예를 들어, Element<number> extends Element<infer U>와 같은 타입을 작성하면, U타입은 number타입으로 추론(infer)된다.
컴파일 과정에서 타입을 미리 명시해주지 않아도, 혹은 그러한 경우가 효율적이지 못할 경우 infer를 이용해서 런타임 과정에서 타입을 제시해 컴파일러가 추론케 할 수 있다.

또한 infer 키워드는 제약 조건 extends가 아닌 조건부 타입 extends 절에서만 사용 가능하다. 또한 조건형의 참에서만 사용할 수 있다.

즉, 조건부 타입 (Conditional type)에서 같이 쓰인다.

예를 들어서

<code>
type MyType<T> = T extends infer R ? R : null;

const a : MyType<number> = 123;
console.log(typeof a); //number
</code>

여기서 MyType<number>에서 받은 타입 number가 되고, infer 키워드를 통해 타입 추론이 가능하므로 R을 반환한다.
만약에 어떠한 타입도 추론이 되지 않는다면 null을 반환하게 되는 것이다.

또 다른 복잡한 예제

만약에 배열 타입이면 배열을 언팩해서 타입을 리턴하고 아니라면 그대로 리턴하는 타입을 만들고 싶다면
<code>
type UnpackedArray<T> = T extends (infer U)[] ? U : T;

type A0 = string[];
type B0 = string;
type C0 = null;

type UnpackedA0 = UnpackedArray<A0>;
type UnpackedB0 = UnpackedArray<B0>;
type UnpackedC0 = UnpackedArray<C0>;
</code>
이다.

만약에 튜플에서 뒷 부분 두 개만 가져오고 싶다면???

<code>
type Tail<T> = T extends [unknown, ...infer U] ? U : [];
type AA = Tail<[string, boolean, number]>;
</code>

그리고 Promise만 빼내고 싶다면?

<code>
type PromiseUnpacked<T> = T extends Promise<infer U> ? U : T;
type TT = PromiseUnpacked<Promise<string>>;
</code>
