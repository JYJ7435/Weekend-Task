/*
아래와 같이 선언된 코드를 enum을 활용해 수정해주세요.
기존에 작성된 코드는 주석처리하거나 삭제하시면 됩니다.

구현조건
console.log(code)의 실행결과를 콘솔에 찍을 것
*/

const korean = "ko";
const english = "en";
const japanese = "ja";
const chinese = "zh";
const spanish = "es";

type LanguageCode = "ko" | "en" | "ja" | "zh" | "es";

const code: LanguageCode = korean;

console.log(code); // 'ko'
