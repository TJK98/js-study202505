/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

let dongbangsinki = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    let deleteName = prompt(`
    현재 맴버: [${dongbangsinki}]
    수정할 이름을 입력하세요.
    `);

    if (dongbangsinki.includes(deleteName)) {
        dongbangsinki.splice(dongbangsinki.indexOf(deleteName), 1);
        alert(`삭제 완료
        남은 멤버: ${dongbangsinki}`);
    } else {
        alert(`${deleteName}은 잘못된 이름입니다.`);
        continue;
    }
    if (dongbangsinki.length === 0) {
        break;
    }
}
alert(`모든 멤버가 삭제 되었습니다.`)








/*
while (true) {
    let input = prompt(`
현재 맴버: [${dongbangsinki}]
수정할 이름을 입력하세요.
    `);
    let flag = dongbangsinki.indexOf(input);
    if (dongbangsinki.includes(input)) {
        dongbangsinki.splice(flag, 1);
        alert(`남은 맴버는: [${dongbangsinki}]입니다.`);
    }
    if (!dongbangsinki.includes(input)) {
        alert(`${input}은 잘못된 이름입니다.`);
        continue;
    }
    alert(`모든 맴버가 삭제되었습니다.`);
}
*/



/*
let tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (tvxq.length > 0) {
    let targetName = prompt(`현재 멤버: [${tvxq}]
삭제할 이름을 입력하세요.`);

// 입력한 값이 배열에 저장된 값이어야 삭제를 진행
    if (tvxq.includes(targetName)) {
        // 잘 입력한 경우 삭제 진행
        tvxq.splice(tvxq.indexOf(targetName), 1);
        alert(`삭제 완료!\n남은 멤버: [${tvxq}]`);
    } else {
        alert(`${targetName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }

    // 종료조건
    // if (tvxq.length === 0) break;

}*/
