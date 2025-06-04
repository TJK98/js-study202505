// return = 함수의 반환값 - 함수가 생성한 값을 함수 밖으로 가젼가는 것
function add(first, second) {
    // 함수 안에 있는 변수는 함수 실행이 끝난 뒤 메모리에서 사라짐
    let result = first + second;
    console.log(`${first} + ${second} = ${result}`);
    // 함수 안에 있는 변수를 밖으로 내보내고 싶으면 return을 활용하여 밖으로 내보냄
    return result;
}

// return이 없는 함수 : void 함수
function multiply(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
    //return n1 * n2
}

// 내보낸 변수를 다시 정의하여 저장
let hoho = add(10, 20); // 30이라는 출력을 확인 -> 30의 값을 갖고 후속 행동을 하고 싶음
let total = hoho * 2;
console.log(`${total}`);

console.log(`=============================================`);
//return이 없는 함수는 리턴값이 undefined로 처리 됨
//즉 변수에 담을 수 없고 담으면 안 된다.
let r = multiply(7, 2);
console.log(`${r}`);

console.log(`=============================================`);
//                           35
//       add (       10       ,        25         )
//          add (   4     , 6)      add (15 , 10)
let r1 = add(add(add(3, 1), 6), add(add(7, 8), 10));
console.log(`${r1}`);

//multiply(    6   ,      14)
multiply(add(2, 4), add(5, 9));

// add(multiply(2, 3), multiply(4, 4));
// 리턴이 없는 함수는 변수에 저장하지도 말고, 다른 함수의 매개값으로 쓰면 안 된다.
// 단독 호출해서 사용할 것

console.log(`=============================================`);

let arr = [1, 2, 3, 4];
let idx = arr.indexOf(1)
let deleteItem = arr.pop();
//let x = console.log();

// 배열의 indexOf를 어떻게 구현 했을까?
function myIdenxOf(array, searchElement) {
    //let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
          /*index = i;
          break;*/
          return i; // return이 break 보다 더 강하게 탈출 작용
      }
    }
    //return index;
    return -1;
}
function myIncludes(array, searchElement) {
    return myIdenxOf(array, searchElement) !== -1;

}

let foods = [`떡볶이`, `우동`, `레몬`, `달고나`];
let findIndex = myIdenxOf(foods, `레몬`);

console.log(`index: ${findIndex}`);
console.log(`flag: ${myIncludes(foods, '짬뽕')}`);
