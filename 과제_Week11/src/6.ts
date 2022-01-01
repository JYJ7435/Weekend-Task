/*
아래와 같은 코드에서 MyArray 뒤에 제네릭을 활용한 타입 별칭을 지정해주세요.
MyArray는 문자열로 된 T 타입의 배열입니다.
*/

type MyArray<T> = T[];
const drinks: MyArray = ["Coffee", "Milk", "Beer"];
