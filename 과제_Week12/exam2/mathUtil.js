//CommonJS 모듈 예제
const PI = 3.14;
const getCircleArea = (r) => r * r * PI; //원의 넓이
const getSquareArea = (d) => d * d; //정사각형의 넓이

module.exports = {
  PI,
  getCircleArea,
  getSquareArea,
};

// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

//Module Keyword-가져오기(ESM)
// export default { PI, getCircleArea };
