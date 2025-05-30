// 무한 루프 : 실제로 끝나지 않는 반복문 -> 악성 코드
// 언제 끝날지 정확히 모를 때
// 무한히 돌리고 특정 조건에서 나오게 함

let rn = 0;
let count = 0;
/*
for (; rn !== 7;) {
    rn = Math.floor(Math.random() * 10) + 1;
    count++;
}
console.log(`7이 나올 때 까지 생성한 횟수: ${count}`);*/
while (rn !== 7) {
    rn = Math.floor(Math.random() * 10) + 1;
    count++;
}
console.log(`7이 나올 때 까지 생성한 횟수: ${count}`);
