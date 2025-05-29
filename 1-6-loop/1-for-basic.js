// 반복문 3요소: 시작값(begin), 끝조건(end), 증감값(step)
/*
for (let n = 1; n <= 5; n++) {
    console.log(`안녕`);
}
console.log(`반복문 종료`);
// 실행 순서: 시작값-> 끝조건-> 실행코드-> 증감값
// 시작값은 최초의 한 번만*/

/*
for (let i = 1; i <= 5; i++) {
    console.log(`${i}번 학생 안녕하세요`);
}*/

/*
// 구구단 출력
let level = 6;
for(let line = 1; line <= 9; line++) {
    console.log(`${level} x ${line} = ${level * line}`);
}*/

/*//변수값 swap
let x = 10;
let y = 20;
let t = x;
x = y;
y = t;
console.log(`x:${x}, y:${y}`);

// 변수값 swap
let 콜라컵 = '콜라';
let 환타컵 = '환타';
let 빈컵 = 콜라컵;
콜라컵 = 환타컵;
환타컵 = 빈컵;
console.log(`콜라컵: ${콜라컵}, 환타컵: ${환타컵}`);*/

// 1~10 누적합
// let total = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;

console.log(`=============================================`);

// 1~10누적합 - 합을 저장할 공간 설정
// 거기에 반복해서 1부터 10까지 숫자를 더해 나간다
let total = 0;
for (let n = 1; n <= 10; n++) {
    total += n;
}
console.log(`누적합:${total}`);

console.log(`=============================================`);
for (let i = 5; i >= 0; i--) {
    console.log(`countdown-${i}`);
}

for (let i=3; i<=100; i+=3){
    console.log(`i:${i}`);
}