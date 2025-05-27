let apple = 3 * 5;
console.log(apple);

let myName= "파스타";
console.log(myName);

//변수의 값은 변경 가능함
apple = 100;
console.log(apple + 3); //103
console.log(apple); //100
apple = apple + 3; //apple에 100+3을 저장해
console.log(apple) //103

//변수의 이름을 지을 때 주의 사항
let friendName3; //관례 camel case
// let friendName3; 이름이 숫자로 시작하면 안 됨
let friendName_; //특수 문자 사용 불가 : _ $ 제외
//let let 예약어(키워드) 변수 이름 사용 불가

//변수의 선언
let banana; //대소문자를 다르게 하면 다른 변수다
let Banana; //대소문자를 다르게 하면 다른 변수다

//변수의 초기화 (변수의 값 넣기, initialize)
banana = "맛있는 바나나";

//변수를 초기화하지 않으면 undifined가 저장 됨.
console.log(Banana);