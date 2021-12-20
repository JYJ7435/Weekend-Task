import React from "react";
import Exam5Parent from "./exam5Parent";

// 부모로부터 받아오는 props 전달하기
function Exam5GrandParent({ testValue }) {
  return <Exam5Parent testValue={testValue}></Exam5Parent>;
}

export default Exam5GrandParent;
