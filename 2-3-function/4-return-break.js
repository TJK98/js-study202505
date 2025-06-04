// return : 함수가 실행결과를 함수 밖으로 가져가는 것
// 함수를 종료하는 기능


function callYourName(name) {
    let prohibits = [`멍청이`, `바보`, `똥개`];
    if (prohibits.includes(name)) {
        console.log(`나쁜 말은 안 돼요.`);
        // 반복문이였으면 break;로 끊어주면 되지만
        return; // 함수에서는 반복문의 break처럼 끊어줄 수 있다.
    }
    console.log(`${name}님 안녕하세요!`);
}

callYourName(`바보`);

console.log(`=============================================`);

// break와 return의 차이
function loop(n) {
    for (let i = 0; i < 5; i++) {
        if (n === 4) {
            console.log(`break!`);
            // break는 반복문만 탈출 return은 함수 전체를 탈출
            //break;
            return;
        }
        console.log(`반복문 실행: ${i}`);
    } //end for
    console.log(`수고하셨습니다.`);
    /*    while (true) {
            if (n === 0) {
                console.log(`break!`);
                //break;
                return;
            }
        }*/
} // end function

loop(4);

console.log(`=============================================`);

//매개 변수는 여러 개 일 수 있지만 return 값은 오직 하나
//f(x) = 2a + 3b

function add(n1, n2) {
    return n1 + n2;
}

// 숫자 2개를 전달하면 두 수의 사칙연산 결과를 모두 return
function operate(n1, n2) {
    //
    //return [addResult, subResult, mulResult, divResult]
    return {
        add: n1 + n2,
        sub: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    }
}

let results = operate(20, 10);
console.log(`덧셈: ${results.add}`);
console.log(`뺄셈: ${results.sub}`);
console.log(`곱셈: ${results.multi}`);
console.log(`나눗셈: ${results.divide}`);