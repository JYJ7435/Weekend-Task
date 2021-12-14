/*
1. 수박수박수박수박수박수? (10점)
길이가 n이고, 수박수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하는 함수 waterMelon을 만들어주세요.

**출력예시**
* n이 3일 때 '수박수'
* n이 4일 때 '수박수박'
*/

function waterMelon(n) {
    let answer = "";
    for (let i = 0; i < n; i++) {
    answer += i % 2 ? "박" : "수";
    }
    return answer;
}

console.log(waterMelon(3)); // 수박수
console.log(waterMelon(4)); // 수박수박

console.log('-----------------------------------');
/*
2. 나이에 따라 문자 출력하기 (10점)
입력되는 파라미터 n이 나이라고 했을 때, 입력되는 n에 따라 해당하는 문자열을 리턴하는 함수, printAge를 만들어주세요.

**출력예시**
* n이 1살 이상이고 19살 이하이면 "미성년자",
* n이 20살 이상이고 64살 이하이면 "성인",
* n이 65살 이상이면 "노인",
* n이 1 이상 120 이하가 아닌 경우 "출력할 수 없습니다"라는 문자열을 출력합니다.
*/

function printAge(n) {
    let answer = "";
    if (n < 1 || n > 120) {
        answer = "출력할 수 없습니다";
    } else {
        answer = n <= 19 ? '미성년자' : n <= 64 ? '성인' : '노인';
    }
    return answer;
}

console.log(printAge(0)); // 출력할 수 없습니다
console.log(printAge(10)); // 미성년자
console.log(printAge(20)); // 성인
console.log(printAge(64)); // 성인
console.log(printAge(65)); // 노인
console.log(printAge(120)); // 노인
console.log(printAge(121)); // 출력할 수 없습니다

console.log('-----------------------------------');
/*
3. 중복 요소 제거하기 (10점)
입력된 배열의 요소 중에서 2개 이상 중복되는 숫자가 있을 경우 중복을 제거하고 유니크한 숫자만을 가진 배열을 리턴하는 함수를 만들어주세요.
변수 answer는 사용하지 않아도 됩니다. 다른 변수를 지정하셔도 되고 변수를 사용하지 않는 것도 괜찮습니다.

**구현조건**
* for문은 사용하지 않습니다.
*/

//new Set 사용
function uniqSet(array) {
    const newSet = Array.from(new Set(array));
    return newSet;
}

console.log(uniqSet([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

//filter, indexOf 사용
function uniqFilter(array) {
    return array.filter((ele, ind) => {
        return array.indexOf(ele) === ind
    });
}

console.log(uniqFilter([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

//forEach, includes 사용
function uniqArray(array) {
    let uniqArray1 = [];
    array.forEach((ele) => {
        if(!uniqArray1.includes(ele)) {
            uniqArray1.push(ele);
        }
    });
    return uniqArray1;
}

console.log(uniqArray([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

//reduce 사용
function uniqReduce(array) {
    return array.reduce((acc, curr, i, arr) => 
    {
        return arr.indexOf(curr) === i ? [...acc, curr] : acc
    },[]);
}


console.log(uniqReduce([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

console.log('-----------------------------------');
/*
4. 교집합과 합집합 구하기 (10점)
입력된 두 개의 배열의 교집합과 합집합을 리턴하는 함수를 만들어주세요.
변수 answer는 사용하지 않아도 됩니다. 다른 변수를 지정하셔도 되고 변수를 사용하지 않는 것도 괜찮습니다.

**구현조건**
* 교집합: 교집합이 없을 때는 빈 배열을 리턴합니다.
* 합집합: 리턴되는 배열을 오름차순으로 정렬합니다.
* for문은 사용하지 않습니다.
*/

// 교집합
function intersect(a, b) {
    let answer = [];
    answer = a.filter(num => b.includes(num));
    return answer;
}

console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersect([1, 4, 7], [2])); // []

// 합집합
function sum(a, b) {
    let answer = [];
    answer = [...new Set([...a, ...b])];
    return answer;
}

console.log(sum([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log(sum([1, 4, 7], [2])); // [1, 2, 4, 7]

console.log('-----------------------------------');
/*
5. promise를 async/await로 변경하기 (10점)

아래의 주석처리된 promise 예제의 동작을 그대로 구현하는 async/await 예제를 만들어주세요.
코드 작성이라는 주석이 적힌 부분에만 코드를 작성해주시면 됩니다.
*/

// promise
// function increaseAndPrint(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const value = n + 1;
//       if (value === 5) {
//         const error = new Error();
//         error.name = 'ValueIsFiveError';
//         reject(error);
//         return;
//       }
//       console.log(value);
//       resolve(value);
//     }, 1000);
//   });
// }

// increaseAndPrint(0)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .catch(e => {
//     console.error(e);
//   });

// async/await
function delay(n) {
    return new Promise((resolve) =>
        setTimeout(() => {
        resolve(n + 1);
        }, 1000)
    );
}

async function makeError() {
    const error = new Error();
    error.name = "ValueIsFiveError";
    throw error;
}

async function increaseAndPrint(n) {
    try {
        let value = await delay(n);
        console.log(value);
        value = await delay(value);
        console.log(value);
        value = await delay(value);
        console.log(value);
        value = await delay(value);
        console.log(value);
        value = await delay(value);
        if (value === 5) {
            await makeError();
        }
    } catch (e) {
        console.error(e);
    }
}

increaseAndPrint(0);
