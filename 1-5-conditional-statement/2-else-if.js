
let age = 13;

// else if : 아니면 만약 -> 또 조건문 걸 수 있다. 갯수 제한 없다. 위에서부터 순차적으로 진행하기 때문에 범위를 잘 짜야 한다.
if (age >= 20) {
    console.log(`성인입니다.`);
} else if (age >= 18) {
    console.log(`고등학생입니다.`);
}
// } else if (age >= 12)  {
//     console.log(`고등학생입니다.`);
// }
else if (age >= 14)  {
    console.log(`중학생입니다.`);
} else if (age >= 8)  {
    console.log(`초등학생입니다.`);
} else {
    console.log(`미취학 아동입니다.`);
}

console.log(`=============================================`);

// if 조건을 걸면 각각의 그룹이 생긴다 그래서 그룹 별로 따로 판단한다
if (age >= 20) {
    console.log(`성인입니다.`);
}
if (age >= 17)  {
    console.log(`고등학생입니다.`);
}
if (age >= 14)  {
    console.log(`중학생입니다.`);
}
if (age >= 8)  {
    console.log(`초등학생입니다.`);
}
else {
    console.log(`미취학 아동입니다.`);
}