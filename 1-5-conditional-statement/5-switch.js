
let weekDay = `화요일`

/*case의 특징은 코드가 흘러 내린다. break로 막아줘야 한다. break가 없어도 되는 경우가 있기 때문에 기본적으로 break가 걸리지 않는다.
case에는 변수를 쓰면 안 된다. 상수를 써야 한다.*/
switch (weekDay) {
/*    case "Monday":
        console.log(`새로운 한주가 시작 되었습니다.`);*/
    case "월요일": case `Monday`:
        console.log(`새로운 한주가 시작 되었습니다.`);
        break;
    case "화요일":
        console.log(`이제 하루 지났어요.`);
        break;
    case "수요일":
        console.log(`절반이 지나갔네요.`);
        break;
    case "목요일":
        console.log(`오늘만 지나면 하루 남았어요.`);
        break;
    case "금요일":
        console.log(`오늘 하루만 더 수고합시다.`);
        break;
    default:
        console.log(`수고하셨습니다. 주말입니다.`);
}
// default는 if의 else 같은 요소. 보통 default는 마지막에 쓰기 때문에 break를 안 넣어줘도 된다

/*
if (weekDay === `월요일`) {
    console.log(`새로운 한 주가 시작 되었습니다.`);
} else if (weekDay === `수요일`) {
    console.log(`주중의 절반을 넘었습니다.`);
} else if (weekDay === `금요일`) {
    console.log(`주말이 코 앞입니다.`);
}*/
