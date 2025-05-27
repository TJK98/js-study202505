
// 논리 타입
let flag = false;
console.log(typeof flag);

// 10>5의 결과는 true이기 때문에 result의 값은 boolean이다
let result = 10 > 5;
console.log(typeof result);

let fruit = '사과';
let apple = fruit;
console.log(apple);

let bool = true;
let True = bool;
let finalResult = True; // True는 원래는 안 되는 문자이지만 True의 값을 true의 값을 넣어 놨기 때문에 실행이 된다.
//let finalResult2 = False; 는 False가 정의가 되어 있지 않기 때문에 오류가 난다.

let result3 = !!0;
console.log(result3);

// null 타입 - 부존재 (명시적인 없음)
//let money = 0; 0은 없는 것이 아닌 0의 값을 갖고 있는 상태
let money = null; // null은 아무 데이터도 없는 상태

//undifined - 변수가 아직 사용 준비가 안 된 상태
let yourName;
console.log(yourName);
