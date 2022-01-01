/*
아래와 같은 변수가 주어졌을 때
My cat name is simba.
He'll be 6 years old next month.
라는 문장을 리턴하는 변수 sentence를 타입스크립트로 만드세요.

구현 조건
1. 템플릿 문자열 사용할 것
2. catAge를 계산해서 값을 삽입할 것 (6으로 직접 삽입시 감점)
*/

const catName: string = "simba";
let catAge: number = 5;

// 코드 작성

const sentence = `My cat name is ${catName}.\nHe'll be ${
  catAge + 1
} years old next month.`;

console.log(sentence);
