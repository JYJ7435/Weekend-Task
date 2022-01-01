/*
아래와 같이 인자로 source와 subString을 받는 함수 타입 인터페이스 SearchFunc를 작성해주세요.

구현조건
매개변수 source와 subString에 대한 타입 뿐만 아니라 함수 SearchFunc의 타입도 지정해주어야 한다.
*/

interface SearchFunc {
  // 코드 작성
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

console.log(mySearch("1", "2"));
