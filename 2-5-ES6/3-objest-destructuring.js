const student = {
    stuName: `뽀로로`,
    age: 5,
    birthDay: `2020-01-01`
};

/*const name = student.stuName;
const age = student.age;
const birth = student.birthDay;*/

const stuName = `김철수`;

// 배열처럼 이름을 막 정하면 안 되고 키 이름을 써야 한다. 키 이름 뒤에 : 하고 다른 이름을 쓰면 키 이름이 바뀐다.
const {stuName: name, age, birthDay} = student;


//console.log(`학생을 이름은 ${student.stuName}이고, 나이는 ${student.age}살이고, 생일은 ${student.birthDay}입니다.`);
console.log(`학생을 이름은 ${stuName}이고, 나이는 ${age}살이고, 생일은 ${birthDay}입니다.`);
console.log(`학생을 이름은 ${name}이고, 나이는 ${age}살이고, 생일은 ${birthDay}입니다.`);

const divStyle = {
    'font-size': '16px',
    'border-radius': '50%'
};

const {'font-size': fontSize, 'border-radius': radius} = divStyle;
console.log(fontSize);
console.log(radius);

console.log('===================');

const myPetInfo = ({name, age}) => {

    // const { name, age } = myPet;

    console.log(`우리 애완동물의 이름은 ${name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${age}살입니다.`);
};

// 재활용 가능, 저장된 데이터
const cat = {
    name: '나비',
    age: 7,
    kind: '러시안블루',
    injection: true
};

myPetInfo({
    name: '초코',
    age: 3
});

const {kind, injection, ...basicInfo} = cat;

console.log(basicInfo);
