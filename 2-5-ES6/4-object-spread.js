const person = {
    name: `홍길동`,
    age: 30
};

/*잘못된 복사
const copyPerson = person;*/

// 제대로 된 복사
const copyPerson = {...person}

person.age= 40;
person.occupation = `개발자`;

console.log(`person:`, person);
console.log(`copyPerson`, copyPerson);

console.log(`=============================================`);
const newPerson ={
    ...person,
    hobbies: [`산책`, `풋살`], // 데이터 추가
    age: 20 // 데이터 수정
}
console.log(newPerson);