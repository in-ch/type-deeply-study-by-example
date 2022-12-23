### 들어가며

> 교집합과 합집합 같은 개념을 typescript에서도 쓸 수 있다.

- 합칩합

```
interface Point {
    x: number;
    y: number;
}
interface Named {
    name: string;
}

type PointNamed = Point & Named;
```

다음과 같이 했을 때 결과는

```
{
    x: number;
    y: number;
    name: string;
}
```

그런데 겹치는 내용이 동시에 들어가 있다면 어떻게 덮여 쓰여질까?
![스크린샷 2022-12-23 오후 6 01 26](https://user-images.githubusercontent.com/49556566/209306331-3afb920c-cb98-416f-ac55-578933b4d055.png)

다음과 같이 순서에 따라 내용이 덮여쓰여지게 된다. (뒤에 있는 내용으로 덮여 씌여 진다.)

- 교집합
  > & 대신에 |를 쓰면 된다.
