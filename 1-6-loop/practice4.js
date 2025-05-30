let targetNumber = +prompt(`양의 정수:`);
let resultText = ``;
let count = 0;
for (let i = 1; i <= targetNumber; i++) {
    if (targetNumber % i === 0) {
        resultText = `${i}\n`;
        count++;
    }
}
resultText += `\n약수의 총 개수:${count}`;
alert(resultText);