/*for (let num = 2; num <= 10; num += 2) {
    console.log(`${num}`);
}*/
let result = '';

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        result += i + ' ';
        //result += `${i} `
    }
}
// 배수 조건은 i % === 0
console.log(`=============================================`);
for (let six = 6; six <= 50; six += 6) {
    console.log(`${six}`);
}
console.log(`=============================================`);
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 14 !== 0) {
        console.log(i);
    }
}
/*for (let seven = 1; seven <= 14; seven += 2) {
    console.log(`${+seven * 7}`);
}*/
console.log(`=============================================`);
let count = 0;
for (let three = 1; three <= 7777; three++) {
    if (three % 3 === 0) {
        count++;
    }
}
console.log(`${count}`);

/*
for (let three = 1; three <=7777; three+=) {
    console.log(3의 배수의 총 개수:`${seven}`);
}*/
console.log(`=============================================`);

/*i = 1 i <= 5 i++ 보단
i = 0 i < 5 i++ 이렇게 쓰자*/
