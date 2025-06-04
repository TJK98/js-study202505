// 매개변수 (parameter) : 함수가 실행될 때 함수 바깥 쪽에서 전달되는 값을 저장 되는 변수

// 언어를 전달하면 그 언어에 맞는 인사를 해주는 함수
function greet(language = `한국어`) {
    console.log(`language: ${language}`);
    switch (language) {
        case `한국어`:
            console.log(`안녕하세요.`);
            break;
        case `영어`:
            console.log(`hello.`);
            break;
        case `중국어`:
            console.log(`따쟈하오.`);
            break;
        case `일본어`:
            console.log(`콘니치와.`);
            break;
        case `프랑스어`:
            console.log(`봉쥬르.`);
            break;
        default:
            console.log(`ㅎㅎㅎ`);
    }
}

// 함수 호출
// 함수를 호출할 때 전달되는 값 : 인수 (argument)
greet(`한국어`);
greet(`프랑스어`);
greet(`asdf`);
greet();

console.log(`=============================================`);

// x ~ y 사이의 랜덤 정수를 만들어주는 함수를 정의
function makeRandomNumber(min, max) {
    let rn = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`생성된 정수: ${rn}`);
}

makeRandomNumber(1, 1000);

console.log(`=============================================`);

// 매개 변수 없는 함수
function makeLine() {
    console.log(`=============================================`);
}

console.log(`hahahoho`);
makeLine();
for (let i = 0; i < 5; i++) {
    makeLine();
}