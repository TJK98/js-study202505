

// 이 파일은 브라우저에서 실행해주세요

while (true) {
    let n = prompt(`정수: `);
    if (n === `그만`) break;
    if (n === `ㅋ`) {
        alert(`뭘 웃어ㅋ`);
        continue;
    }
    alert(`당신이 입력한 숫자: ${n}`);
}
alert(`안녕히 계세요`)