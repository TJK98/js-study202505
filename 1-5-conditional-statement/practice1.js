// // prompt 앞에 +로 하면 문자가 숫자로 바껴서 score 앞에 +안 써도 된다
// let score = +prompt(`점수를 입력하세요.`)
//
// if (+score >= 90) {
//     alert(`A`)
// } else if (+score >= 80) {
//     alert(`B`)
// } else if (+score >= 70) {
//     alert(`C`)
// } else if (+score >= 60) {
//     alert(`D`)
// } else {
//     alert(`F`)
// }

let score = +prompt('점수를 입력하세요');

let grade;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

alert(grade); // 예상 출력: A
