
// truthy, falsy: js는 논리가 아닌 데이터를 논리로 표현할 수 있다
if (true) console.log(`안녕하세요`); // true가 들어가면 실행
if (false) console.log(`안녕하세요`); // false가 들어가면 실행 안 됨

// js는 0, ``, null, undefined, NaN 는 모두 falsty로 취급한다
// 나머지는 전부 true로 처리한다
if (false) console.log(`안녕하세요`);
if (0) console.log(`안녕하세요2`);
if (null) console.log(`안녕하세요3`);
if (undefined) console.log(`안녕하세요4`);
if (NaN) console.log(`안녕하세요5`);
if (``) console.log(`안녕하세요6`);

if (` `) console.log(`안녕하세요7`);
if (`hello`) console.log(`안녕하세요8`);
if (100) console.log(`안녕하세요9`);
if (-888.5757) console.log(`안녕하세요10`);
if ([1,2,3]) console.log(`안녕하세요11`);
if ([]) console.log(`안녕하세요12`);
if ({}) console.log(`안녕하세요13`);
if (function () {}) console.log(`안녕하세요14`);
if (() => {}) console.log(`안녕하세요15`);
