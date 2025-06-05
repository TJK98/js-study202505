/*
    일급함수 : 함수를 마치 하나의 값처럼 보는 개념
    -> 함수를 다른 함수의 매개값으로 넘기는 게 가능
    -> 함수가 함수를 리턴하는 것도 가능
*/

function foo(param) {
    console.log(param);

    param();
}

foo (function () {
    console.log(`hoho`);
})


console.log(`=============================================`);

// 편지지 양식 함수
function makePaper(receiver, sender, createContent) {
    console.log(`수신인: ${receiver}`);
    console.log(`=============================================`);
    // 이 사이에 편지 내용을 쓰세요
    createContent();

    if (receiver === `엄마`) {
        console.log(`나도 사랑해.\n-엄마-`);
    }
    console.log(`=============================================`);
    console.log(`발신인: ${sender}`);
}

makePaper(`홍길동 아빠`, `홍길동`, function () {
    console.log(`아버지를 아버지라 부르지 못하고`);
    console.log(`너무 슬픕니다.`);
})

makePaper(`엄마`, `아들`,function () {
    for (let i = 0; i < 3; i++) {
        console.log(`사랑해요.`);
    }
})