
// 우리 집 강아지 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체 (설정 순서는 상관 없다)
let myDog1 = {
    name: `초코`,
    age: 3,
    tall: 30,
    weight: 10,
    injection:false,
    vegetarian: false,
    favorites:[`산책`, `간식`]
}
let myDog2 = {
    name: `해피`,
    age: 5,
    tall: 45,
    weight: 14,
    injection:true,
    vegetarian: false,
    favorites:[`꼬리 흔들기`, `멍멍`]
}

// 객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.name);
console.log(myDog2.age);
console.log(myDog1.aa);

console.log(typeof myDog1);
console.log(typeof myDog1.name);
console.log(typeof myDog1.injection);
console.log(typeof myDog1.favorites);
console.log(typeof myDog1.favorites[1]);

myDog1.age++;
myDog2.weight **= 2;
myDog2.favorites.push(`사랑`)

console.log(`=============================================`);

// 프로퍼티 참조법 2 []안에는 문자열만 가능하다.
console.log(myDog2[`name`]);
/*let name = `name`
console.log(myDog2[name]);*/ // 는 가능하다
// console.log(myDog2[age]);는 틀렸다.
// console.log(myDog2.`name`);도 틀렸다.

let height = `tall`;
console.log(myDog1[height]);

let myCat = {
    name: `나비`,
    age: 4,
    'hobby': `화내기` // 벡틱은 객체 이름에서는 사용 불가, 문자열에서만 사용 가능
};
console.log(myCat.hobby);
console.log(myCat['hobby']);