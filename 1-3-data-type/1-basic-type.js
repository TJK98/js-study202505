
// 숫자든 문자든 값을 보고 데이터 타입을 구분하여 저장한다.
let element = 65; // number
element = 'A'; // A=65 // string

// 자바스크립트는 정수와 실수를 모두 실수로 판단한다.
let age = 20;
console.log(typeof age);

// 자바나 c언어에서는 정수와 정수를 나누면 실수의 값이 나오더라도 정수의 값만 가져와 2만 나오지만 자바 스크립트에서는 정수도 실수로 판단하기 때문에 2.5의 값이 나온다
console.log(20 / 8);

// 다른 언어는 0으로 나누면 에러가 나지만 스크립트는 infinity가 나온다
console.log(age / 0);
// NaN : Not a Number 숫자가 아닌 것
console.log(age * '메롱');