/*난수 : 랜덤값
0.0 이상 1.0 미만의 랜덤 숫자를 생성해줌*/
let randomNumber= Math.floor (Math.random() * 10) + 1;
console.log(`rn: ${randomNumber}`);

/*
// 랜덤 정수 만들기
Math.floor() 소수점 버림
Math.random() -> 0.0<= ~ < 1.0
Math.random() * 10 -> 0.0<= ~ < 10.0
Math.floor (Math.random() * 10)-> 0<= ~ < 10
Math.floor (Math.random() * 10) + 1-> 1<= ~ < 11

x ~ y 사이의 난수 공식 (이상 이하 개념)
Math.floor((Math.random() * (y - x + 1)) + x);*/

//1 ~ 46 사이 난수 생성
let lotto = Math.floor((Math.random() * (46 - 1 + 1)) + 1);
console.log(`lotto: ${lotto}`);
