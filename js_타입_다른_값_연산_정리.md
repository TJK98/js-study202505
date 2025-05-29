# 자바스크립트에서 타입이 다른 값끼리의 연산 - 개념 이해

## 📌 1. 덧셈 연산자 `+`의 경우

### 숫자 + 숫자 → 숫자
```javascript
1 + 2 // 3
```

### 숫자 + 문자열 → 문자열
```javascript
1 + "2"       // "12"
"hello" + 1   // "hello1"
```

### 문자열 + boolean → 문자열
```javascript
"값: " + true // "값: true"
```

### null + 문자열 → 문자열
```javascript
null + "값" // "null값"
```

---

## 📌 2. 산술 연산자 `-`, `*`, `/`, `%`는 숫자로 변환 후 계산

### 문자열이 숫자로 변환 가능하면 계산됨
```javascript
"10" - 2      // 8
"5" * "2"     // 10
"8" / 2       // 4
"5" % 2       // 1
```

### 변환 불가능하면 NaN
```javascript
"hello" - 1   // NaN
true * "abc"  // NaN
```

---

## 📌 3. 비교 연산자 (`==`, `!=`, `>`, `<` 등)

### 느슨한 비교 `==`: 자동 형변환 후 비교
```javascript
1 == "1"             // true
0 == false           // true
null == undefined    // true
true == "1"          // true
false == "0"         // true
```

### 엄격한 비교 `===`: 형변환 없이 타입도 비교
```javascript
1 === "1"            // false
0 === false          // false
null === undefined   // false
```

---

## 📌 4. 논리 연산자 (`&&`, `||`, `!`)

### falsy 값 목록
- false
- 0
- "" (빈 문자열)
- null
- undefined
- NaN

### truthy/falsy 개념 적용 예시
```javascript
true && "값"    // "값"
false || "값"   // "값"
!0              // true
!"문자열"       // false
```

---

## 📌 5. 특수 케이스 요약

| 표현식 | 결과 | 설명 |
|--------|--------|------|
| `null + 1` | 1 | `null` → 0으로 변환 |
| `undefined + 1` | NaN | `undefined` → NaN |
| `true + 1` | 2 | `true` → 1 |
| `false + 1` | 1 | `false` → 0 |
| `"5" * null` | 0 | `"5"` → 5, `null` → 0 |
| `"5" + null` | "5null" | `+`는 문자열 결합 |
| `[] + 1` | "1" | 빈 배열 → 빈 문자열로 변환 |
| `[2] + 1` | "21" | `[2]` → "2", 문자열 결합 |
| `true || "값"` | true | 첫 truthy 값 반환, 두 번째는 무시 |
| `"값" || true` | "값" | 첫 truthy 값 반환 |
| `false || 0` | 0 | 둘 다 falsy → 마지막 반환 |
| `false || false` | false | 둘 다 falsy → 마지막 반환 |

---

## ✅ 정리
- `+` 연산자는 문자열이 섞이면 문자열 결합
- `-`, `*`, `/`, `%`는 숫자로 변환한 후 계산
- `==`는 형변환이 일어나므로 `===`을 사용하는 것이 안전
- 논리 연산자는 truthy/falsy 평가 결과를 그대로 반환함
