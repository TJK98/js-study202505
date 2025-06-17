let randomNum = Math.floor(Math.random() * 100) + 1; // 난수 생성
const maxChance = 10; // 최대 기회 설정
let chanceNum = maxChance; // 남은 기회
let min = 1; // 최소 범위 설정
let max = 100; // 최대 범위 설정

// DOM 요소
const $chancesLeft = document.getElementById(`chances-left`);
const $begin = document.getElementById(`begin`);
const $end = document.getElementById(`end`);
const $guessInput = document.getElementById(`guess-input`);
const $guessForm = document.getElementById(`guess-form`);
const $feedback = document.getElementById(`feedback`);
const $historyList = document.getElementById(`history-list`);
const $modal = document.getElementById(`finish-modal`);
const $modalTitle = document.getElementById(`finish-title`);
const $modalText = document.getElementById(`finish-text`);
const $restartBtn = document.getElementById(`restart-button`);

// 초기 세팅
$chancesLeft.textContent = `${chanceNum}`;
$begin.textContent = `${min}`;
$end.textContent = `${max}`;
$guessInput.min = `${min}`;
$guessInput.max = `${max}`;

console.log(randomNum); // 난수 정답 출력 검사

// 모달 열기 함수
function showModal(title, text) {
    $modalTitle.textContent = title;
    $modalText.textContent = text;
    $modal.classList.add(`show`);
}

// 게임 다시하기 함수
function restartGame() {
    // 상태 초기화
    chanceNum = maxChance;
    min = 1;
    max = 100;

    // DOM 초기화
    $chancesLeft.textContent = `${chanceNum}`;
    $begin.textContent = `${min}`;
    $end.textContent = `${max}`;
    $guessInput.disabled = false;
    $guessInput.value = ``;
    $feedback.textContent = `추리를 시작하세요!`;
    $feedback.classList.remove(`feedback-text`, `up`, `down`);
    $historyList.innerHTML = ``;
    $modal.classList.remove("show");

    // 새로운 정답 생성
    randomNum = Math.floor(Math.random() * 100) + 1;
}

// 사용자 입력 이벤트
$guessForm.addEventListener(`submit`, function (e) {

    e.preventDefault(); // 폼 제출 페이지 새로고침 막기

    const inputNum = Number($guessInput.value); // 입력한 값을 숫자로 변환하여 저장

    // 입력 유효성 검사
    if (!Number.isInteger(inputNum) || inputNum < min || inputNum > max) {
        alert(`반드시 ${min}와 ${max} 사이의 정수 숫자를 입력하세요.`);
        return;
    }

    // 정답인 경우
    if (inputNum === randomNum) {
        showModal(`Congratulations!`, `정답은 ${randomNum}이었습니다.`);
        $modalTitle.classList.add(`correct`);
        $guessInput.disabled = true;
        return;
    }

    // 정답이 아닌 경우
    if (inputNum !== randomNum) {

        chanceNum--;
        $chancesLeft.textContent = `${chanceNum}`;

        const $li = document.createElement(`li`);
        $li.classList.add(`history-item`);

        if (inputNum < randomNum) {
            min = inputNum + 1;
            $feedback.textContent = `UP!!`;
            document.querySelector(`.feedback-text`).classList.add(`up`);
            $li.classList.add(`up`);
            $li.textContent = `${inputNum} (UP)`;
        } else {
            max = inputNum - 1;
            $feedback.textContent = `DOWN!!`;
            document.querySelector(`.feedback-text`).classList.add(`down`);
            $li.classList.add(`down`);
            $li.textContent = `${inputNum} (DOWN)`;
        }

        // 로그 내용 넣기
        $historyList.prepend($li);

        // 범위 업데이트
        $begin.textContent = `${min}`;
        $end.textContent = `${max}`;
    }

    // 기회 소진 시 게임 종료
    if (chanceNum === 0) {
        showModal(`GAME OVER!`, `정답은 ${randomNum}이었습니다.`);
        $modalTitle.classList.add(`over`);
        $guessInput.disabled = true;
    }

    // 입력창 초기화
    $guessInput.value = ``;
});

// 다시하기 클릭 이벤트
$restartBtn.addEventListener(`click`, () => {
    $modal.classList.remove(`show`);
    restartGame();
});