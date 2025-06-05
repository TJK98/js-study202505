const x = 10;
//x = 100; // const는 상수이기 때문에 재할당 불가
console.log(`x: ${x}`);

let numbers = [10, 20, 30, 40];
// let copyNumbers =number.slice();
let copyNumbers=[...numbers]

/*for (const n of numbers) {
    copyNumbers.push(n);
}*/

numbers[1] = 50;
copyNumbers[2] = 60;

console.log(`numbers:`, numbers);
console.log(`copyNumbers:`, copyNumbers);

