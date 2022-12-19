# 1.1 Class properties and methods

다음 두 가지를 비교해보자.

### 1

<code>
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
</code>

### 2

<code>
class User {
  static cid: string = "eft";
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
</code>

ES5로 컴파일 하면 각각 다음과 같이 나온다.

### 1

<code>
"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
</code>

### 2

<code>
"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.cid = "eft";
    return User;
}());
</code>

여기서 static의 차이점을 확인해보면 멤버 속성은 Class의 인스턴스에 정의되고 Static 키워드가 붙은 속성은 생성자에 의해 정의된다.

# 1.2 Class member methods and static methods

속성 뿐 아니라 메소드도 멤버 메소드나 정적 메소드로 정의 가능하다.

<code>
class User {
  static cid: string = "eft";
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  static printCid() {
    console.log(User.cid);
  }
  send(msg: string) {
    console.log(`${this.name} send a message: ${msg}`);
  }
}
</code>

es5로 컴파일하면 다음과 같이 나온다.

```
"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.printCid = function () {
        console.log(User.cid);
    };
    User.prototype.send = function (msg) {
        console.log("".concat(this.name, " send a message: ").concat(msg));
    };
    User.cid = "eft";
    return User;
}());
```

</code>
보다시피 정적 메소드는 생성자에 추가되고 멤버 메소드는 prototpye에 추가된다.

# 2 Class Accessors

getter와 setter를 이용해 데이터 캐슐화 및 유효성 검증이 가능하다.

```
class User {
  private _age: number = 0;
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    if (value > 0 && value <= 120) {
      this._age = value;
    } else {
      console.log("Error: The set age value is invalid!");
    }
  }
}
```

# 3 Class inheritance

1. 클래스는 오직 하나만 상속받을 수 있다.(extends) 단 implements 키워드를 이용해 interface와 class를 동시에 확장 가능하다. (implements한 interface의 타입이 없다면 에러를 반환한다.)

```
interface CanSay {
   say(words: string) :void
}

interface CanWalk {
  walk(): void;
}

class Person implements CanSay, CanWalk {
  constructor(public name: string) {}

  public say(words: string) :void {
    console.log(`${this.name} says：${words}`);
  }

  public walk(): void {
    console.log(`${this.name} walk with feet`);
  }
}
```

# 4. Abstarct Classes

```
abstract class Developer extends Person {
  constructor(name: string) {
    super(name);
  }

  say(words: string): void {
    console.log(`${this.name} says ${words}`);
  }
}
const bytefer = new Developer("Bytefer");
bytefer.say("I love ts!"); // Bytefer says I love ts!
```

# 5. Member Visibility

public, protected, private 키워드를 사용할 수 있다.

### 5.1 public

클래스 밖에서도 쓸 수 있게 한다.

```
class Person {
  constructor(public name: string) {}
  public say(words: string) :void {
    console.log(`${this.name} says：${words}`);
  }
}
```

### 5.2 protected

같은 클래스 내에서만 쓸 수 있게 한다.

```
class Developer extends Person {
  constructor(name: string) {
    super(name);
    console.log(`Base Class：${this.getClassName()}`);
  }
  public getClassName() {
    return "Person";
  }
}
```

### 5.3 private

같은 클래스에서만 접근 할 수 있도록 한다.

```
class Person {
    constructor (
        private id: number,
        public name: string
    )
}

const p1 = new Person(28, "Bytefer");
p1.id; // Error!!!!
```

### 5.4 ECMAScript Private Fields

'#' 키워드를 이용해서 private하게 만들 수 있다.

```
class Person {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }
}

let bytefer = new Person("Bytefer");
bytefer.#name; // Error!!!
```
