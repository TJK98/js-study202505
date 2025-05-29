# 자바스크립트 명시적 타입 변환 정리 - 개념 이해

자바스크립트에서는 자동 형변환(암묵적 변환) 외에도 **명시적 형변환 (Explicit Type Conversion)**을 통해 타입을 의도적으로 바꿀 수 있습니다.

---

## ✅ 문자열 → 숫자

| 방법 | 예시 | 결과 |
|------|------|-------|
| `+문자열` | `+"123"` | `123` |
| `Number(문자열)` | `Number("123")` | `123` |
| `parseInt(문자열)` | `parseInt("123px")` | `123` |
| `parseFloat(문자열)` | `parseFloat("3.14")` | `3.14` |

```javascript
let str = "42";
console.log(+str);              // 42
console.log(Number(str));       // 42
console.log(parseInt("42px"));  // 42
console.log(parseFloat("3.14"));// 3.14
```

---

## ✅ 숫자 → 문자열

| 방법 | 예시 | 결과 |
|------|------|-------|
| `String(숫자)` | `String(123)` | `"123"` |
| `숫자.toString()` | `(123).toString()` | `"123"` |

```javascript
let num = 10;
console.log(String(num));       // "10"
console.log((10).toString());   // "10"
```

---

## ✅ 불린(boolean) ↔ 숫자

```javascript
Number(true);    // 1
Number(false);   // 0

Boolean(1);      // true
Boolean(0);      // false
```

---

## ✅ 불린 ↔ 문자열

```javascript
String(true);       // "true"
Boolean("false");   // true (비어있지 않으므로 truthy)
Boolean("")         // false
```

---

## ✅ null / undefined → 숫자

| 값 | 변환 결과 |
|-----|------------|
| `null` | `0` |
| `undefined` | `NaN` |

```javascript
Number(null);       // 0
Number(undefined);  // NaN
```

---

## 📌 명시적 변환 요약표

| 목적 | 방법 | 예시 |
|------|------|------|
| 문자열 → 숫자 | `+`, `Number()`, `parseInt()`, `parseFloat()` | `+"123"` |
| 숫자 → 문자열 | `String()`, `.toString()` | `String(10)` |
| 값 → 불린 | `Boolean()` | `Boolean("hello")` |
| 불린 → 숫자 | `Number(true)` | `1` |
| null → 숫자 | `Number(null)` | `0` |
| undefined → 숫자 | `Number(undefined)` | `NaN` |
