import React from "react";
import Exam5Child from "./exam5Child";

// 부모로부터 받아오는 props 전달하기
function Exam5Parent({ testValue }) {
  return <Exam5Child testValue={testValue}></Exam5Child>;
}

export default Exam5Parent;
