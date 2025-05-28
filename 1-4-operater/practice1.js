let userName = prompt(`당신의 이름은?`);
let userAge = prompt(`당신의 나이는?`);
console.log(`${userName}님은 ${2025 - (+userAge - 1)}년생이시군요?`);

// 일회용으로 쓸거면 연산을 바로 쓰는 것이 좋다
// alert(`${userName}님은 ${2025 - +userAge + 1}년생이시군요?`);

// 변수를 사용하여 연산을 하는 것은 재사용성이 있으면 좋다
// let birthYear = 2025 - +userAge + 1;
// alert(`${userName}님은 ${birthYear}년생이시군요?`);
// alert(`${birthYear}`년생은 X띠 입니다.);

// 실무용
let currentYear = new Date().getFullYear();
let koreanAgeMaker = 1;
let birthYear = +currentYear - +userAge + +koreanAgeMaker;
alert(`${userName}님은 ${birthYear}년생이시군요?`);