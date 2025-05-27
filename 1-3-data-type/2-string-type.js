
// string : 문자열
// hello -> [h, e, l, l, o]로 저장

//숫자를 써도 "에 담아놨으니" 문자로 취급
let myName = "100";
myName = '박영희'
myName = `뽀로로` // ``백틱은 특수 문법이 포함됨
console.log(typeof myName);
console.log(myName)

let sentence = '나는 그 사람에게 "사랑한다"고 말했다.'; // ''든 ""든 차이가 없다.
console.log(sentence);

//let htmlTag = "<ul>\n\t<li>딸기</li>\n\t<li>바나나</li>\n</ul> "; // \n : enter \t : tap
// `` 백틱 안에 줄바꿈 아무렇게나 가능
let htmlTag = ` 
<ul>
    <li>딸기</li>
    <li>바나나</li>
</ul>`
console.log(htmlTag);

// x월 x일은 x입니다.
// `` 백틱으로 변수 지정 가능
let month =6;
let day = 6;
let anniversary = '현충일';

//console.log(month + '월' + day + '일은' + anniversary + '입니다.');
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);