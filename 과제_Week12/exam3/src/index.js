//CommonJS 모듈 예제
const { getCircleArea, getSquareArea } = require("./mathUtil.js");
const { logInput, logResult, logFigureError } = require("./log");

//Module Keyword-가져오기(ESM)
// import { getCircleArea } from "./mathUtil";
// import mathUtil from "./mathUtil";

// const result = mathUtil.getCircleArea(2);
// console.log(result);

//도형의 넓이 예제
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "넓이를 구하고자 하는 도형의 종류를 입력해주세요. (정사각형, 원) :",
  (figure) => {
    console.log(`선택된 도형: ${figure}`);

    switch (figure) {
      case "정사각형":
        rl.question("면의 길이를 입력해주세요 :", (input) => {
          console.log(logInput(input));
          console.log(logResult(figure, getSquareArea(input)));
          rl.close();
        });
        break;
      case "원":
        rl.question("반지름의 길이를 입력해주세요 :", (input) => {
          console.log(logInput(input));
          console.log(logResult(figure, getCircleArea(input)));
          rl.close();
        });
        break;
      default:
        console.log(logFigureError);
        rl.close();
    }
  }
);
