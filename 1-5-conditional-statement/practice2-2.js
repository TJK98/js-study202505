// let a = +prompt('첫번째 수 입력');
// let b = +prompt('두번째 수 입력');
// let c = +prompt('세번째 수 입력');
//
// // 최소값을 담을 변수
// let min;
//
// // 가장 작은 수 찾기
// if (a < b) {
//     // a는 b보다 작은 상태
//     if (a < c) {
//         // a가 최소값
//         min = a;
//     } else {
//         // c가 최소값
//         min = c;
//     }
// } else {
//     // b가 a보다 작은 상태
//     if (b < c) {
//         // b가 최소값
//         min = b;
//     } else {
//         // c가 최소값
//         min = c;
//     }
// }
//
// alert(`최소값: ${min}`);
//

// 자리강탈 알고리즘

let a = +prompt('첫번째 수 입력');
let b = +prompt('두번째 수 입력');
let c = +prompt('세번째 수 입력');

// 최소값을 담을 변수
let min = a;

// 가장 작은 수 찾기
if (b < min) {
    min = b;
}
// else if가 아니라 if기 때문에 위에 조건이 만족하더라도 또 다시 비교
if (c < min) {
    min = c;
}

alert(`최소값: ${min}`);