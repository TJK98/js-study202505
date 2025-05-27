
let number = 20;
let address = `서울`;
let result = `10`;

// 타입이 다르면 컴퓨터는 연산을 못함
// 암묵적 타입 변환
// 숫자와 문자의 덧셈은 숫자를 문자로 자동 변환하여 결합한다
console.log(number + result);
console.log(address + number + 30);
// 의 결과는 서울2030이 나온다. 서울50이 나오지 않는 이유는
// 먼저 address + number가 계산이 되어 서울20 이라는 문자가 되었기 때문이다
// 서울50을 나오게 하고 싶으면 (number + 30)을 묶으면 된다.

// 타입이 달라도 문자를 숫자로 변환 했을 때 문제가 없다고 판단이 되면 문자를 숫자로 변환해서 연산 진행 (덧셈 제외)
const operating = number - result;
console.log(operating);

const operating2 = number * result;
console.log(operating2);

// 명시적 변환
let n1 = `10`
let n2  =20;
//let n3 = Number(n1) + n2;
//let n3 = parseInt(n1) + n2;
let n3 = +n1 + n2;
console.log(`n3: ${n3}`);

let x = 50, y = 70;
//let operResult = String(x) + y;
//let operResult = x.toString() + y;
let operResult = `` + x + y;
console.log(`operResult: ${operResult}`);