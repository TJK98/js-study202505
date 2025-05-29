
// 돈이 3000원 이상이면 김밥 3000원 미만 집밥
// 그런데 먹을 수 있는 음식 이름을 변수에 조건부로 저장

let money = 4000;

let foodName = (money >= 3000) ? `김밥` : `집밥`

/*let foodName;
if (money >= 4000) {
    foodName = `김밥`;
} else {
    foodName = `집밥`
}*/

console.log(`먹을 수 있는 음식: ${foodName}`);

console.log(`=============================================`);

let score = 70;

(score >= 70) ? console.log(`합격`) : console.log(`불합격`);

/*let foodName;
if (money >= 4000) {
    foodName = `김밥`;
} else {
    foodName = `집밥`
}*/

console.log(`=============================================`);



let age = 15;
let state;
if (age >= 20) {
    state= `성인`;
} else if (age >= 8) {
    state= `학생`;
} else  {
    state= `아동`;
}

console.log(`=============================================`);

let season = `여름`
let isHot = (season === `여름`) ? true : false;

console.log(`현재의 계절 ${season} 입니다.`);