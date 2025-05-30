/*console.log(`=======================1======================`);

let number = +prompt(`숫자를 입력하시오. [ 1 ~ 100 ]`);
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
while (true) {
    if (number === randomNumber) break;
    else if (number !== randomNumber) {
        if (number < randomNumber) {
            alert(`Up`);
            number = +prompt(`새로운 숫자를 입력하세요.`);
        } else if (number > randomNumber) {
            alert(`Down`);
            number = +prompt(`새로운 숫자를 입력하세요.`);
        }
    }
}
alert(`정답 입니다.`);*/

/*
console.log(`=======================3======================`);

let number = +prompt(`숫자를 입력하시오. [ 1 ~ 100 ]`);
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let count = 1;
while (true) {
    if (count < 5) {
        if (number === randomNumber) {
            alert(`정답 입니다.`);
            break;
        } else if (number !== randomNumber) {
            if (number < randomNumber) {
                alert(`UP!`);
                number = +prompt(`${number}보다 큰 숫자를 입력하세요.`);
                count++;
            } else if (number > randomNumber) {
                alert(`DOWN!`);
                number = +prompt(`${number}보다 작은 새로운 숫자를 입력하세요.`);
                count++;
            }
        }
    } else {
        alert(`기회를 다 쓰셨습니다.`);
        break;
    }
}*/

console.log(`=======================3======================`);

let level = prompt(`[ 1. 상 (3번의 기회) | 2. 중 (6번의 기회) | 3. 하 (10번의 기회) ]`);
let number = +prompt(`숫자를 입력하시오. [ 1 ~ 100 ]`);
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let count = 1;

while (true) {
    if (level === `상`) {
        if (count < 3) {
            if (number === randomNumber) {
                alert(`정답 입니다.`);
                break;
            } else if (number !== randomNumber) {
                if (number < randomNumber) {
                    alert(`UP!`);
                    number = +prompt(`${number}보다 큰 숫자를 입력하세요.`);
                    count++;
                } else if (number > randomNumber) {
                    alert(`DOWN!`);
                    number = +prompt(`${number}보다 작은 새로운 숫자를 입력하세요.`);
                    count++;
                }
            }
        }
    } else if (level === `중`) {
        if (count < 6) {
            if (number === randomNumber) {
                alert(`정답 입니다.`);
                break;
            } else if (number !== randomNumber) {
                if (number < randomNumber) {
                    alert(`UP!`);
                    number = +prompt(`${number}보다 큰 숫자를 입력하세요.`);
                    count++;
                } else if (number > randomNumber) {
                    alert(`DOWN!`);
                    number = +prompt(`${number}보다 작은 새로운 숫자를 입력하세요.`);
                    count++;
                }
            }
        }
    }
}
/*
while (true) {
    if (count < 5) {
        if (number === randomNumber) {
            alert(`정답 입니다.`);
            break;
        } else if (number !== randomNumber) {
            if (number < randomNumber) {
                alert(`UP!`);
                number = +prompt(`${number}보다 큰 숫자를 입력하세요.`);
                count++;
            } else if (number > randomNumber) {
                alert(`DOWN!`);
                number = +prompt(`${number}보다 작은 새로운 숫자를 입력하세요.`);
                count++;
            }
        }
    } else {
        alert(`기회를 다 쓰셨습니다.`);
        break;
    }
}*/
