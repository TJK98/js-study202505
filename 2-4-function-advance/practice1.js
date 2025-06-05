const users = [
    {
        id: 1,
        name: '김코딩',
        email: 'kim@dev.com',
        orders: [
            { id: 101, product: '노트북', price: 1200000 },
            { id: 102, product: '마우스', price: 25000 },
        ],
    },
    {
        id: 2,
        name: '이자바',
        email: 'lee@java.com',
        orders: [
            { id: 103, product: '키보드', price: 80000 },
        ],
    },
    {
        id: 3,
        name: '박파이썬',
        email: 'park@py.com',
        orders: [],
    },
];

/*🔧 요구 사항
mapUserData(users, callback) 함수를 직접 구현해서 사용하세요.

users.map(...) 또는 Array.prototype.map()을 직접 사용하지 마세요.

    for...of를 사용하세요.

    실무처럼 데이터 전처리하듯이 작성해보세요!*/


    /*
    문제 1. 이름만 추출하기
    mapUserData(users, callback)을 이용해서 이름만 담긴 배열을 리턴하세요.
        예시: ['김코딩', '이자바', '박파이썬']*/

function mapUserData(array, callback) {
    const userArray = [];
    for (const user of array) {
        const item = callback(user);
        userArray.push(item)
    }
    return userArray;
}

const result1 = mapUserData(users, function (user) {
    return user.name
})
console.log(result1);