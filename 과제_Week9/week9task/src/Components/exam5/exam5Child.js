import React from "react";
import Exam5GrandChild from "./exam5grandC";

// 부모로부터 받아오는 props 전달하기
function Exam5Child({ testValue }) {
  return <Exam5GrandChild testValue={testValue}></Exam5GrandChild>;
}

export default Exam5Child;
