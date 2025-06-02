let foods = [`짜장면`, `피자`, `햄버거`, `차돌짬뽕`];

// indexOf() : 배열의 특정 요소가 몇 번 인텍스에 있는지 알려줌.
let idx = foods.indexOf(`햄버거`);
console.log(`idx: ${idx}`);

// 음식 목록에서 피자를 찾아서 치킨으로 바꿔주세요
foods[foods.indexOf(`피자`)] = `치킨`;
console.log(foods);

// includes(): 배열에 특정 요소가 있는지의 유무를 확인
let flag = foods.includes(`짜장면`);
console.log(`flag: ${flag}`);

// 음식 목록에 햄버거가 있다면
if (foods.includes(`햄버거`)) {
}

// 음식 목록에 햄버거가 없다면
if (!foods.includes(`햄버거`)) {
}

console.log(`=============================================`);

// slice(): 배열을 원하는 만큼 분할해서 복사 배열로 반환, 원본은 유지가 된다.
let numbers = [10, 20, 30, 40, 50, 60];
let sliceNumbers = numbers.slice(1, 3);
console.log(`slice:`, sliceNumbers);
console.log(`origin:`, numbers);

console.log(numbers.slice(3)); // 3번부터 끝까지
console.log(numbers.slice()); // 비워져 있으면 전체 복사

console.log(`=============================================`);

// splice(): 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능), 배열의 원본을 건드림
console.log(foods);
foods.splice(2, 1);
console.log(foods);

foods.splice(0, 1, `마라탕`); //0번 위치부터 1개를 지우고 그 위치에 마라탕 추가
console.log(foods);

foods.splice(2, 0, `타코`); // 2번 위치에 데이터를 지우지 않고 그 자리에 타코 추가
console.log(foods);

foods.splice(3, 0, `족발`, `보쌈`); //3번 위치에 데이터를 지우지 않고 그 자리에 족발, 보쌈을 추가
console.log(foods);