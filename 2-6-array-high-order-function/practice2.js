const traders = [
    {
        trader: {
            name: '김철수', // traders[0].trader.name
            city: '대전',
        },
        year: 2023, // traders[0].year
        value: 500000,
    },
    {
        trader: {
            name: '박영희',
            city: '서울',
        },
        year: 2022, // traders[1].year
        value: 600000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2022,
        value: 1200000,
    },
    {
        trader: {
            name: '박영희',
            city: '서울',
        },
        year: 2023,
        value: 650000,
    },
    {
        trader: {
            name: '뽀로로',
            city: '부산',
        },
        year: 2023,
        value: 800000,
    },
    {
        trader: {
            name: '루피',
            city: '대전',
        },
        year: 2022,
        value: 780000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2023,
        value: 1500000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2022,
        value: 2500000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2022,
        value: 500000,
    },
    {
        trader: {
            name: '루피',
            city: '대전',
        },
        year: 2023,
        value: 120000,
    },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
const daejeonTotal = traders
    .filter(user => user.year === 2023 && user.trader.city === `대전`)
    .reduce((acc, curr) => acc + curr.value, 0);
console.log(`총액 ${daejeonTotal}원`);

console.log(`=============================================`);

// 2. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
const mostValue = [...traders]
    .sort((a, b) => b.value - a.value);
const total = mostValue[0];
console.log(`가장 높은 거래액 정보 - 이름: ${total.trader.name}, 도시: ${total.trader.city}, 거래액: ${total.value}`);


const topTrade = traders.reduce((max, curr) => curr.value > max.value ? curr : max);
console.log(`가장 높은 거래액 정보 - 이름: ${topTrade.trader.name}, 도시: ${topTrade.trader.city}, 거래액: ${topTrade.value}`);

console.log(`=============================================`);

// 3. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
const totalValueByCity = traders.reduce((acc, current) => {
    // 거래 도시 추출
    const city = current.trader.city;

    // 거래 금액 추출
    const value = current.value;

    // 해당 도시가 이미 누적 객체(acc)에 있으면
    if (acc[city]) {
        acc[city] += value; // 거래 금액을 누적
    } else {
        acc[city] = value; // 처음 등장한 도시라면 거래 금액으로 초기화
    }

    // 누적 객체 반환
    return acc;
}, {}); // 초기 누적 객체는 빈 객체

console.log(totalValueByCity); // {도시: 총 거래액}

const totalByCity = traders.reduce((cityObj, trs) => {
    const city = trs.trader.city;
    cityObj[city] = (cityObj[city] || 0) + trs.value;
    return cityObj;
}, {});

console.log(totalByCity);


console.log(`=============================================`);

// 4. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
const cityNameValue = traders.reduce((cityName, cityValue) => {
    // 현재 순회 중인 거래 객체에서 도시 이름 추출
    const city = cityValue.trader.city;

    // 만약 누적 객체(cityName)에 해당 도시(city)가 이미 존재한다면
    if (city in cityName) {
        // 해당 도시의 거래 수를 1 증가시킴
        cityName[city]++;
    } else {
        // 해당 도시가 처음 등장한 경우 거래 수를 1로 설정
        cityName[city] = 1;
    }

    // 누적 객체(cityName)를 다음 순회로 반환
    return cityName;
}, {}); // 초기 누적 객체는 빈 객체 {}

console.log(cityNameValue); // 결과 출력: {도시이름: 거래 수}

const cityTradeCounts = traders.reduce((acc, current) => {
    // 현재 거래의 도시 이름을 추출
    const city = current.trader.city;

    // 누적 객체(acc)에 해당 도시(city)가 이미 있으면
    if (acc[city]) {
        // 거래 수를 1 증가시킴
        acc[city] += 1;
    } else {
        // 해당 도시가 처음 등장하면 거래 수를 1로 초기화
        acc[city] = 1;
    }

    // 누적 객체(acc)를 다음 순회로 반환
    return acc;
}, {}); // 초기 누적 객체는 빈 객체 {}

console.log(cityTradeCounts); // 결과 출력: {도시명: 거래 수}


// 5. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
const sorted = [...traders].sort((a, b) => a.value - b.value);
console.log(sorted);
