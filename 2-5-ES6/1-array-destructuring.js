// 디스트럭쳐링 : 구조 분해 할당
const userNames = [`김철수`, `홍길동`, `고구마`];

// 배열에 들어있는 데이터를 다시 각각의 변수에 저장하고 싶음.
/*
const kim = userNames[0];
const hong = userNames[1];
const go = userNames[2];
*/

const [kim, hong, go] = userNames;
console.log(`kim: ${kim}, hong: ${hong}, go: ${go}`);

// 난 0번 인덱스랑 2번만 추철하고 싶어 1번은 하기 싫어
const [k, , g] = userNames;
const example = [[1., 20], () => console.log(`hello`)];
const [numbers, greet] = example;
console.log(numbers[1]);
greet();

let first = 10, second = 20;
// const array [] = [first, second];
[first, second] = [second, first];
console.log(`first:${first}, second: ${second}`);

console.log(`=============================================`);

// 맨 앞 2개의 숫자만 각각의 변수에 저장하고 나머지 4개의 숫자는 다시 한 번 배열로 묶고 싶다.
const nums = [1, 3, 5, 7, 9, 11];
/*
const others = nums.slice();
const one = others.shift();
const three = others.shift();
*/

const [one, three, ...others] = nums;
console.log(`one: ${one}`);
console.log(`three: ${three}`);
console.log(`others`, others);