function repeatString(string, repeat) {
    let stringRepeatResult = ``;
    if (repeat === 0) {
        console.log(`반복하지 않습니다.`);
    } else if (repeat < 0) {
        console.log(`0이상의 숫자를 입력하십시오.`);
    } else {
        for (let i = 0; i < repeat; i++) {
            stringRepeatResult += string;
        }
    }
    return stringRepeatResult;
}

// 문자열과 숫자를 전달받아, 해당 문자열을 숫자만큼 반복해서 반환하는 함수 repeatString을 만들어보세요.
// 함수 호출 코드
let result1 = repeatString("안녕", 3);
console.log(`result1: ${result1}`); // 예상 결과: "안녕안녕안녕"

let result2 = repeatString("짝", 5);
console.log(`result2: ${result2}`); // 예상 결과: "짝짝짝짝짝"

let myResult1 = repeatString("호", 0);
console.log(`myResult1: ${myResult1}`); // 예상 결과: `반복하지 않습니다.`

let myResult2 = repeatString("헤", -1);
console.log(`myResult2: ${myResult2}`); // 예상 결과: `0이상의 숫자를 입력하십시오.`

console.log(`=============================================`);

function calculateAverageScore(...scores) {
    if (scores.length <= 3) {
        return 0;
    }
    let minScore = scores[0];
    let maxScore = scores[0];
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
        } else if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
        sum += scores[i];
    }
    let average = (sum - minScore - maxScore) / (scores.length -2);
    return average;
}

// 여러 명의 심사위원 점수를 전달받아 (개수는 미정) 최고점과 최저점을 제외한 나머지 점수들의 평균을 계산하여 반환하는 함수 calculateAverageScore를 만들어보세요. 만약 유효한 점수(최고점, 최저점 제외 후)가 2개 미만이면 평균 계산이 의미 없으므로 0을 반환합니다. (소수점은 그대로 표현합니다.)
// 함수 호출 코드
let result3 = calculateAverageScore(10, 0, 20, 30, 40); // 0과 40 제외, (10+20+30)/3
console.log(`result3: ${result3}`); // 예상 결과: 20

let result4 = calculateAverageScore(90, 80, 85, 95, 70, 75); // 70과 95 제외, (90+80+85+75)/4
console.log(`result4: ${result4}`); // 예상 결과: 82.5

let result5 = calculateAverageScore(100, 90); // 최고, 최저 제외하면 점수 없음
console.log(`result5: ${result5}`); // 예상 결과: 0

let result5_1 = calculateAverageScore(10, 20, 30); // 10, 30 제외하면 20 하나 남음 (유효점수 1개)
console.log(`result5_1: ${result5_1}`); // 예상 결과: 0

console.log(`=============================================`);

function greet(name, greeting = `안녕하세요`) {
    return `${greeting}, ${name}님`;
}
// 이름과 선택적인 인사 메시지를 전달받아, 맞춤형 인사 문자열을 반환하는 함수 greet를 만들어보세요. 만약 인사 메시지가 전달되지 않으면 "안녕하세요"를 기본값으로 사용해야 합니다.
// 함수 호출 코드
let result6 = greet("철수");
console.log(`result6: ${result6}`); // 예상 결과: "안녕하세요, 철수님!"

let result7 = greet("영희", "반가워요");
console.log(`result7: ${result7}`); // 예상 결과: "반가워요, 영희님!"

let result8 = greet("미애", "오랜만입니다");
console.log(`result8: ${result8}`); // 예상 결과: "오랜만입니다, 미애님!"

console.log(`=============================================`);

function celsiusToFahrenheit(celsius) {
    //let fahrenheit = celsius * 9/5 +32
    return celsius * 9/5 +32
}

// 섭씨 온도를 전달받아 화씨 온도로 변환하여 반환하는 함수 celsiusToFahrenheit를 만들어보세요. (변환 공식: 화씨 = 섭씨 * 9/5 + 32)
// 함수 호출 코드
let result9 = celsiusToFahrenheit(0);
console.log(`result9: ${result9}°F`); // 예상 결과: 32°F

let result10 = celsiusToFahrenheit(25);
console.log(`result10: ${result10}°F`); // 예상 결과: 77°F

let result11 = celsiusToFahrenheit(-10);
console.log(`result11: ${result11}°F`); // 예상 결과: 14°F

console.log(`=============================================`);

function countChar(text, target) {
    let countChar = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === target) {
            countChar++;
        }
    }
    return countChar;
}

// 문자열과 특정 문자를 전달받아, 해당 문자열 안에 특정 문자가 몇 개 포함되어 있는지 개수를 세어 반환하는 함수 countChar를 만들어보세요. (대소문자는 구분합니다)
// 함수 호출 코드
let result12 = countChar("banana", "a");
console.log(`result12: ${result12}`); // 예상 결과: 3

let result13 = countChar("apple", "p");
console.log(`result13: ${result13}`); // 예상 결과: 2

let result14 = countChar("javascript is fun", "s");
console.log(`result14: ${result14}`); // 예상 결과: 2

let result15 = countChar("Hello World", "o");
console.log(`result15: ${result15}`); // 예상 결과: 2
