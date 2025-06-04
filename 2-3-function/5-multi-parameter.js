function add(n1, n2) {
    return n1 + n2;
}

let r1 = add(20, 30);
console.log(`r1: ${r1}`);

let r2 = add(20, 30, 30);
console.log(`r2: ${r2}`);

// n개의 parameter를 전달해야 되는 경우
function addAll(numbers = []) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

let sum = addAll([1, 2, 3, 4, 5, 6]);
console.log(`sum: ${sum}`);

// ES6 : 자바 스크립트 최신 문법
function addAllES6(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

let sum2 = addAllES6(10, 20, 30, 33, 44, 55);
console.log(`sum2: ${sum2}`);

function foo(arr1, arr2) {

}

foo([1, 2], [3, 4, 5]);