let day = `일요일`

switch (day) {
    case `일요일`:
    case `토요일`:
        console.log(`주말입니다.`);
        break;
    default:
        console.log(`평일입니다.`);
}

console.log(`=============================================`);

let weather = `눈`

switch (weather) {
    case `맑음`:
        console.log(`선글라스를 끼세요`);
        break;
    case `비`:
        console.log(`비가 옵니다.`);
        break;
    case `눈`:
            console.log(`따뜻하게 입으세요.`);
        break;
    default:
        console.log(`날씨 정보를 알 수 없습니다.`);
}

console.log(`=============================================`);

let food = `피자`

switch (food) {
    case `피자`:
        console.log(`이탈리아 요리입니다.`);
        break;
    case `타코`:
        console.log(`멕시코 요리입니다.`);
        break;
    case `스시`:
        console.log(`일본 요리입니다.`);
        break;
    case `바게트`:
        console.log(`프랑스 요리입니다.`);
        break;
    default:
        console.log(`모르겠습니다.`);
}