### 들어가며

Template Literal Type이란 기존 typescript의 string literal type을 기반으로 해서 새로운 타입을 리턴하는 거다.

예제)
<code>
type Hello = 'Hello';
type World = ', World';
type HelloWorld = '${Hello}${World}';
</code>

여러 개의 Union type 조작도 가능하다.
<code>
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// type Alignment =
// | "top-left" | "top-center" | "top-right"
// | "middle-left" | "middle-center" | "middle-right"
// | "bottom-left" | "bottom-center" | "bottom-right"
type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`;
</code>
