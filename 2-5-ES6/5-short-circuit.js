/*
단축 평가 (short circuit): 논리 연산시 좌항에서 결과가 결정될 경우
우항의 연산을 무시
*/

true && true   // t
true && false  // f
false && true  // f
false && false // f

true || true   // t
true || false  // t
false || true  // t
false || false // f

let a = 10, b = 20;
if (++a < 20 && ++b === 21) {

}
console.log(`a:${a}, b:${b}`);

console.log(`=============================================`);
// truthy falsy
// 논리가 아닌데 논리 연산 가능
// 좌항이 t이면 우항의 값
// 좌항이 f이면 좌항의 값
console.log(`hello` && 100);
console.log(0 && `메롱`);

// 좌항이 t이면 좌항의 값
// 좌항이 f이면 우항의 값
console.log(`=============================================`);
console.log(`hello` || undefined); // true || false
console.log(null || 300);          // false || true

console.log(`=============================================`);

// 기본값 설정을 해도 되지만 t || f, f || f로 처리할 수 있음
function foo(param = `없음`) {
    console.log(`param: ${param || `없음`}`);
}

foo(`안녕`);