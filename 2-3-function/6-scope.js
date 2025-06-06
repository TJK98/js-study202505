// 전역 스코프 : 프로그램 실행 중 항상 존재하는 변수
let i = `hoho`

// 블록 스코프 : { } 안에서 생성된 변수는 블록 밖에서 사라진다.
for (let i = 0; i < 3; i++) {
    console.log(`i: ${i}`);
}

console.log(`outer i: ${i}`);


// 블록 스코프 안에 변수가 지정 되어 있지 않다면 가까운 곳에 있는 변수를 찾아 적용한다. 블록 스코프 안에 찾다가 없으면
// 전역 변수를 가져다 쓴다. ( 맨 뒤에 순서)
let n = `haha` // 전역 변수

if (true) {
    let n = 10; // 블록 스코프
    if (true) {
        let n =100; // 블록
        console.log(`inner n: ${n}`); // 10
    }
    console.log(`outer n: ${n}`); // 100
}
console.log(`n: ${n}`); // haha

// 지역 스코프 (local scope): 함수 내에서 만들어진 변수
function foo() {
    //let x = `홍길동` // 지역 스코프
    console.log(`local x: ${x}`);
}

let x = `hehe`
foo(); // 함수를 호출하면 함수의 코드가 위에서 만들어지더라도 호출한 위치에 다시 코드가 생기는 효과가 생긴다
console.log(`global x: ${x}`);

/*
    최대한 블록 스코프와 지역 스코프를 활용해서 코딩하기
    전역스코프는 최대한!! 자제할 것 (아예 안 쓰는 걸 추천)
    1. 변수 이름 충돌 문제
    2. 전역 변수는 너무 수명이 길다.
    3. 스코프 체인이 너무 길다. (변수를 찾으러 가는 길이가 너무 길다)
*/