
let a =5; // 컴퓨터가 인식하는 숫자 00000101
let b =`5`; // 컴퓨터가 인식하는 숫자 53 -> 00110101

// js에서 모든 동등, 비동등 비교는 ===, !== 으로 해야 함
//console.log(a == b);
//console.log(a != b);
console.log(a === b);
console.log(a !== b);

console.log(`=============================================`);

// ==은 직관적으로 결과 예측이 힘듦
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == 0);

console.log(`=============================================`);

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);

console.log(`=============================================`);

// 문자 비교
let password = `abc1234`;

console.log(password === `abc1234`);

// 문자 대소 비교
//  a와 A    97    65      대문자 < 소문자
console.log(`a` < `A`);
console.log(`B` < `C`);
//                44032    영어 < 한글
console.log(`z` < `가`);

//         97 99   97 100  한 글자 씩 비교를 하다가 더 큰 게 나오는 순간 비교 종료
console.log(`ace` < `ade`);
