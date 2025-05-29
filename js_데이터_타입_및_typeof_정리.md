# 자바스크립트 데이터 타입과 typeof - 개념 이해

## 📌 자바스크립트 데이터 타입 개요

자바스크립트의 데이터 타입은 크게 두 가지로 구분됩니다:

- **원시 타입 (Primitive Type)**: 값 자체를 저장, 불변
- **참조 타입 (Reference Type)**: 객체, 배열, 함수 등 메모리 주소를 참조

## ✅ 원시 타입 (Primitive Type)

| 타입 | typeof 결과 | 설명 |
|------|--------------|------|
| `number` | "number" | 정수와 실수를 구분하지 않고 모두 부동소수점 숫자로 처리 |
| `string` | "string" | 문자열, 따옴표 `"`, `'`, 백틱 `` 사용 가능 |
| `boolean` | "boolean" | `true` 또는 `false` |
| `undefined` | "undefined" | 변수는 선언되었지만 초기화되지 않은 상태 |
| `null` | "object" | 값이 없음을 명시, typeof 결과는 역사적 버그로 "object" |
| `bigint` | "bigint" | 매우 큰 정수 표현 (`123n` 형태로 사용) |
| `symbol` | "symbol" | 고유하고 변경 불가능한 값 (주로 객체 키로 사용) |

## ✅ 참조 타입 (Reference Type)

| 타입 | typeof 결과 | 설명 |
|------|--------------|------|
| `object` | "object" | 키-값 쌍의 집합 |
| `array` | "object" | 순서가 있는 값의 리스트 |
| `function` | "function" | 함수는 특별히 typeof 결과가 "function" |

---

## 🔍 typeof 연산자

값의 데이터 타입을 문자열로 반환하는 연산자입니다.

```javascript
typeof 123           // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" ← 주의
typeof 123n          // "bigint"
typeof Symbol("id")  // "symbol"
typeof {}            // "object"
typeof []            // "object"
typeof function() {} // "function"
```

---

## 📘 undefined 타입

### 개념
- `undefined`는 자바스크립트의 **원시 타입 중 하나**
- 변수는 **선언만 되었고 값이 할당되지 않았을 때 자동으로 undefined가 됨**

```javascript
let x;
console.log(x);        // undefined
console.log(typeof x); // "undefined"
```

### 특징 요약

| 항목 | 설명 |
|------|------|
| 타입 | Primitive Type |
| 값 | `undefined` |
| 할당 | 자동 할당됨 (초기화 안 한 변수) |
| typeof 결과 | `"undefined"` |

---

## 📌 undefined vs null

| 항목 | `undefined` | `null` |
|------|-------------|--------|
| 의미 | 값이 할당되지 않음 | 의도적으로 값이 없음을 명시 |
| typeof | "undefined" | "object" |
| 자동 할당 | O (선언만 하면 자동으로 할당됨) | X (개발자가 명시적으로 지정) |

```javascript
let a;
let b = null;

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"
```
