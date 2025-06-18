let randomNum = Math.floor(Math.random() * 100) + 1; // 1~100 사이의 난수 생성
const maxChance = 10; // 최대 기회 수
let chanceNum = maxChance; // 현재 남은 기회 수
let min = 1; // 현재 최소 범위
let max = 100; // 현재 최대 범위

// DOM 요소 선택
const $chancesLeft = document.getElementById('chances-left');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');
const $guessInput = document.getElementById('guess-input');
const $guessForm = document.getElementById('guess-form');
const $feedback = document.getElementById('feedback');
const $historyList = document.getElementById('history-list');
const $modal = document.getElementById('finish-modal');
const $modalTitle = document.getElementById('finish-title');
const $modalText = document.getElementById('finish-text');
const $restartBtn = document.getElementById('restart-button');

// 초기 화면 설정
$chancesLeft.textContent = `${chanceNum}`;
$begin.textContent = `${min}`;
$end.textContent = `${max}`;
$guessInput.min = `${min}`;
$guessInput.max = `${max}`;

console.log(randomNum); // 개발 중 정답 확인용 로그

// 모달 열기
function showModal(title, text) {
    $modalTitle.textContent = title;
    $modalText.textContent = text;
    $modal.classList.add('show');
}

// 게임 상태 및 UI 초기화
function restartGame() {
    chanceNum = maxChance;
    min = 1;
    max = 100;
    //$chancesLeft.textContent = `${chanceNum}`;
    $begin.textContent = `${min}`;
    $end.textContent = `${max}`;
    $guessInput.min = `${min}`;
    $guessInput.max = `${max}`;

    console.log(randomNum);

    $guessInput.disabled = false;
    $guessInput.value = '';
    $feedback.textContent = '추리를 시작하세요!';
    $feedback.classList.remove('up', 'down');
    $modalTitle.classList.remove('correct', 'over');
    $historyList.innerHTML = '';
    $modal.classList.remove('show');

    randomNum = Math.floor(Math.random() * 100) + 1; // 새로운 정답 생성
}

// 숫자 제출 이벤트
$guessForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    // 사용자가 입력한 값을 문자열 → 숫자로 변환
    const inputNum = Number($guessInput.value);

    // 입력값 유효성 검사
    if (isNaN(inputNum) || !Number.isInteger(inputNum) || inputNum < min || inputNum > max) {
        alert(`반드시 ${min}와 ${max} 사이의 정수를 입력하세요.`);
        $guessInput.value = '';
        $guessInput.focus();
        return;
    }

    // 기회 1회 차감 및 갱신
    chanceNum--;
    $chancesLeft.textContent = `${chanceNum}`;

    // 도전 기록을 표시할 <li> 요소 생성 및 클래스 부여
    const $li = document.createElement('li');
    $li.classList.add('history-item');

    // 클래스 제거 (상태 초기화)
    $feedback.classList.remove('up', 'down');
    $modalTitle.classList.remove('correct', 'over');

    // 정답일 경우
    if (inputNum === randomNum) {
        showModal('Congratulations!', `정답은 ${randomNum}이었습니다.`);
        $modalTitle.classList.add('correct');
        $guessInput.disabled = true;
        return;
    }

    // 오답일 경우
    if (inputNum < randomNum) {
        min = inputNum + 1;
        $feedback.textContent = 'UP!!';
        $feedback.classList.add('up');
        $li.classList.add('up');
        $li.textContent = `${inputNum} (UP)`;
    } else {
        max = inputNum - 1;
        $feedback.textContent = 'DOWN!!';
        $feedback.classList.add('down');
        $li.classList.add('down');
        $li.textContent = `${inputNum} (DOWN)`;
    }

    // 기록 추가 및 범위 업데이트
    $historyList.prepend($li);
    $begin.textContent = `${min}`;
    $end.textContent = `${max}`;

    // 자동 정답인 경우
    if (min === max && chanceNum > 1) {
        showModal('Congratulations!', `정답은 ${randomNum}이었습니다.`);
        $modalTitle.classList.add('correct');
        $guessInput.disabled = true;
        return;
    }

    // 기회 소진 시 게임 종료
    if (chanceNum === 0) {
        showModal('GAME OVER!', `정답은 ${randomNum}이었습니다.`);
        $modalTitle.classList.add('over');
        $guessInput.disabled = true;
    }

    $guessInput.value = '';
});

// 다시하기 버튼 클릭
$restartBtn.addEventListener('click', () => {
    $modal.classList.remove('show');
    restartGame();
});
