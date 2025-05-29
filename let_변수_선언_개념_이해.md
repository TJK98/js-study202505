# let 변수 선언 - 개념 이해

## 📌 기본 개념
- `let`은 **ES6(ES2015)**에서 도입된 변수 선언 키워드입니다.
- 값이 변경될 수 있는 **변수(variable)**를 선언할 때 사용됩니다.
- `let`으로 선언된 변수는 **블록 스코프(block scope)**를 가집니다.

## ✅ 주요 특징

| 특징 | 설명 |
|------|------|
| **블록 스코프** | `{}`로 감싼 코드 블록 내에서만 유효 |
| **중복 선언 불가** | 같은 스코프에서 같은 이름으로 다시 선언 불가능 |
| **변수 호이스팅 발생** | 선언은 끌어올려지지만 **초기화 이전에는 접근 불가(TDZ 발생)** |
| **초기화 선택 가능** | 선언과 동시에 값을 지정하지 않아도 됨 |

```javascript
let count = 10; // 선언과 초기화
count = 20;     // 값 변경 가능
```

## ⚠️ 변수 선언 시 주의사항

1. 변수 이름은 숫자로 시작할 수 없음
    ```javascript
    let 1stItem = '사과'; // ❌ SyntaxError
    let firstItem = '사과'; // ✅
    ```

2. 변수 이름에는 `_`, `$` 외의 특수문자는 사용 불가
    ```javascript
    let item-name = '사과'; // ❌
    let item_name = '사과'; // ✅
    ```

3. **같은 스펠링이어도 대소문자가 다르면 다른 변수**
    ```javascript
    let apple = '🍎';
    let Apple = '🍏';
    console.log(apple); // 🍎
    console.log(Apple); // 🍏
    ```

4. 초기화하지 않으면 `undefined`가 할당됨
    ```javascript
    let score;
    console.log(score); // undefined
    ```

5. 중복 선언 불가능
    ```javascript
    let x = 5;
    let x = 10; // ❌ SyntaxError
    ```

6. TDZ(Temporal Dead Zone) 문제
    ```javascript
    console.log(number); // ❌ ReferenceError
    let number = 10;
    ```

## ✅ 변수 선언 예제 요약

```javascript
// 선언과 초기화
let name = "홍길동";

// 선언 후 초기화
let age;
age = 25;

// 값 변경 가능
age = 26;

// 블록 스코프 확인
{
  let hobby = "코딩";
  console.log(hobby); // "코딩"
}
console.log(hobby); // ❌ ReferenceError
```
