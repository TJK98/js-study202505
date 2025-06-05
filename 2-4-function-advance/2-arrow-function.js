// 함수 선언문 방식
/*
function add(n1, n2) {
    return n1 + n2;
}*/

//함수 표현식 방식
/*
const add = function (n1, n2) {
  return n1 + n2;
};*/

// 화살표 함수 방식 (ES6): function 뺴고 () 다음에 화살표 =>
// hoisting 안 된다
/*const add = (n1, n2) => {
    return n1 + n2;
};*/
const add = (n1, n2) => n1 + n2; // 함수 안의 내용이 한 줄이면 {} 업앨 수 있다. 한줄의 내용이 return이면 return도 없앨 수 있다.

const r1 = add(10, 20);
console.log(`r1: ${r1}`);

const isEven = (n) => n % 2 === 0;
console.log(isEven(25));

const sayHello = nickname => console.log(`${nickname}님 안녕하세요.`); // 매개 변수의 값이 하나이면 ()도 제거 가능

sayHello(`홍길동`)

const pow = n => n ** 2;
const r2 = pow(3);
console.log(`r2: ${r2}`);