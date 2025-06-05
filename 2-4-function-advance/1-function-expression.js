/*console.log(x);

let x = 10;*/


multiply(10, 20);

// 함수 선언식 : 호출보다 정의가 아래에 있어도 정상 작동, ;를 안 붙힘
// hoisting: 함수 정의식이 실행 시점에 맨위로 끌어올려짐
function multiply(n1, n2) {
    console.log(`곱셉!`);
}

// 함수 표현식
// 함수를 상수에 담는 것은 ;를 붙어야 하고 hoisting이 되지 않는다. 꼭 위에서 아래로. 중첩 함수에서 많이 쓴다.
// 함수는 정삭 작동 차이는 ;과 hoisting 차이
const add = function (n1, n2) {
    console.log(`덧셈!`);
    return n1 + n2;
};

const result = add(10, 20);
console.log(`result: ${result}`);

console.log(`=============================================`);

console.log(typeof multiply);
console.log(typeof add);
console.log(typeof add());

// const moolty = multiply(20, 10); <- return 값이 없으므로 틀린 것
const moolty = multiply; // <- multiply의 이름을 moolty로 바꾼 것

moolty(30, 40);

const log = console.log;
log(`hoho`);

console.log(`=============================================`);

const arr = [
    10,
    `haha`,
    true,
    [1, 2, 3],
    {age: 3, name: `소희`},
    add,
    function (n1, n2) {
        return n1 - n2;
    }
];

console.log(arr.length);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4].age);
console.log(arr[4][`name`]);
console.log(arr[5](50, 50));
console.log(arr[6](100, 50));

const minus = arr[6];

const bbeki = minus(200, 100);
console.log(bbeki);

console.log(`=============================================`);
const obj = {
    name: `초코`
    age: 5,
    injection: true,
    favorites: [`산책`, `공놀이`],
    owner: {
        name: `홍길동`,
        age: 30
    },
    sleep: function () {
        console.log(`쿨쿨 잡니다.`);
    },
    plus: add
};

obj.sleep();
const r4 = obj.plus(10, 20);

// 배열의 비밀: 사실 배열은 객체다
/*
const array={

}*/
