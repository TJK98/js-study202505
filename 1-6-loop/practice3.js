let integer = +prompt(`양의 정수를 입력하세요.`);


// 사용자가 양의 정수를 입력하지 않을 가능성을 위해 조건을 따로 지정해줘야 한다.
if (isNaN(integer)) {
    alert(`숫자만 입력하세요.`);
} else if (integer <= 0) {
    alert(`1 이상의 양수만 입력하세요.`);
}
let resultText = ``;
for (let i = 2; i <= integer; i *= 2) {
    resultText += `${i} `;
}
alert(resultText);

/*
for (let result = 1; result <= integer; result*=2) {
    alert(`${result}`)
}*/
