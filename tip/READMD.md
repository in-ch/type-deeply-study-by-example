# 선언된 타입과 좁혀진 (narrowed) 타입의 이해

> 타입스크립트의 매우 강력한 특징 중 하나는 제어 흐름에 따라 자동으로 타입을 좁히는 것이다.
> 이것은 변수가 코드 위치의 특정 지점에서 연관된 두 가지 타입, 즉 선언 타입과 좁혀진 타입을 가짐을 의미한다.

```tsx
function foo(x: string | number) {
  if (typeof x === 'string') {
    // x'의 타입은 string타입으로 좁혀졌습니다. 따라서 .length가 가능합니다.
    console.log(x.length);

    // 할당을 하게되면 좁혀진 타입이 아닌 선언한 타입이 됩니다.
    x = 1;
    console.log(x.length); // x는 지금 number 타입이므로 불가능합니다.
    } else {
        ...
    }
}
```

# 옵셔널 필드 대신에 구분된 유니온 사용

> 타입 지정을 분리해서 타입 체킹을 강제할 필요가 없어지게 할 수 있다.

```tsx
type Shape = {
  kind: "circle" | "rect";
  radius?: number;
  width?: number;
  height?: number;
};

function getArea(shape: Shape) {
  return shape.kind === "circle"
    ? Math.PI * shape.radius! ** 2
    : shape.width! * shape.height!;
}
```

> 여기서 radiusm width, height 필드는 null이 아니라는 assertion이 필요하다. 대신에 유니온으로 구분하는 것이 더 좋은 방법이다.

```tsx
type Circle = { kind: "circle"; radius: number };
type Rect = { kind: "rect"; width: number; height: number };
type Shape = Circle | Rect;

function getArea(shape: Shape) {
  return shape.kind === "circle"
    ? Math.PI * shape.radius ** 2
    : shape.width * shape.height;
}
```

# 유니온 타입 분배 제어

> 만약에 인풋 타입이 아직 배열이 아닌 경우 배열 유형을 반환하는 ToArray 헬퍼 타입이 있다고 가정해보자.

```tsx
type ToArray<T> = T extends Array<unknown> ? T : T[];
type Foo = ToArray<string | number>;
```

여기서 (string | number)[] 타입은 어떨까?

```tsx
type ToArray<T> = [T] extends [Array<unknown>] ? T : T[];
type Foo = ToArray<string | number>;
```

# 철저한 검사를 통한 컴파일시 처리되지 않은 케이스 체크

```tsx
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rect":
      return shape.width * shape.height;
    default:
      // 아래에서 타입 확인 오류가 발생합니다.
      // 만약 shape.kind가 위에서 처리되지 않았다면.
      const _exhaustiveCheck: never = shape;
      throw new Error("Unknown shape kind");
  }
}
```

# interface보다 type을 사용

- interface의 merging 기능을 활용하고 싶을 때
- 클래스/인터페이스 계층을 포함하는 스타일 코드를 가지고 있을 때
  경우가 아니면 더 다용도적인 type을 쓰는 것이 좋다.

# 적절한 상황에서 배열보다는 튜플을 사용

> 배열보다는 튜플을 사용해서 더 엄격하게 만드는 것이 좋다.
