// 동기 : 코드가 순차적으로 실행된다
// 비동기 : 코드가 순서없이 동시에 실행 된다

console.log(`first`);

// 코드 실행을 지연 시킴
setTimeout(() => {
    console.log(`second`);
}, 0); //ms


console.log(`third`);

console.log(`오늘 할 일은 뭘까요?`);
setTimeout(() => {
    console.log(`공부!`);
}, 2000)

setTimeout(() => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(`hello${i}`);
        }, 100);
    }
}, 0);

setTimeout(() => {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(`bye${i}`);
        }, 200);
    }
}, 0);