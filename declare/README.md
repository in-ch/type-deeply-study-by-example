### 들어가며

_.d.ts, declare??? 외부 라이브러리에 있는 _.d.ts을 열어보면 declare가 보이던데 머하는 얘들일까????

외부 라이브러리 많이 쓰잖아? 초기화 후 typescript 안에 JS-SDK로 API를 불러올 텐데, 얘네들은 typescript compiler가 인식을 못하는 거지. 분명 맞게 쓰고 있고 공식 문서에서 하라는 데로 했는데

그래서 만약에 google map을 불러왔다면 declare 선언을 통해 google에 대한 전역 변수를 선언해서 typescript 컴파일러가 전역 변수를 인식할 수 있도록 해주는 거여 ㅋㅋ

ex)

```tsx
let map;

function initMap() {
	map = new google.maps.Map(
		documnet.getElementById("map"), {
			center: {lat: ....},
			....
		}
	);
}
```

```tsx
declare var google: any;
```

여기서 declare는 keyword 인데 글로벌하게 쓰겠다는 의미이다.

![스크린샷 2022-11-18 오후 5.17.12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1454081-ac8a-4171-a6a3-7eceb670e92c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.17.12.png)

- 참고로 외부 선언을 불러와서 확장해서 쓸 수도 있다.

```tsx
import { AxiosInstance } from "axios";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
```

예시로 이걸 까보자 .

[https://github.com/JaeSeoKim/kakao.maps.d.ts](https://github.com/JaeSeoKim/kakao.maps.d.ts)

```tsx
...
/// <reference path="services.d.ts" />
/// <reference path="services.Places.d.ts" />
/// <reference path="services.Geocoder.d.ts" />
/// <reference path="Pagination.d.ts" />
/// <reference path="MarkerClusterer.d.ts" />
/// <reference path="Cluster.d.ts" />
/// <reference path="drawing.d.ts" />
/// <reference path="drawing.DrawingManager.d.ts" />
/// <reference path="drawing.Toolbox.d.ts" />
/// <reference path="drawing.MouseEvent.d.ts" />
...
```

\***\*`/// <reference path="..." />` 이거는 트리플-슬래시(Triple-slash) 지시어로 XML 태그인데, 컴파일러 지시어로 사용되는 거임.**

그리고

```tsx
/// <reference path="index.d.ts" />

/**
 * 지도 객체의 이벤트 관련 함수를 담은 네임스페이스
 */
declare namespace kakao.maps.event {
  /**
   * 이벤트를 지원하는 다음 지도 API 객체
   */
  export interface EventTarget {}

  /**
   * 다음 지도 API 객체에 이벤트를 등록한다.
   *
   * @param target 이벤트를 지원하는 다음 지도 API 객체
   * @param type 이벤트 이름
   * @param handler 이벤트를 처리할 함수
   */
  export function addListener(
    target: EventTarget,
    type: string,
    handler: Function
  ): void;

......

}
```

이런식으로 type을 쭉쭉 써내려가면 된다. 굳
