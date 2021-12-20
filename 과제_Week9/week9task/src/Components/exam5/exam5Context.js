import React from "react";
import Exam5GrandParent from "./exam5grandP";

const testValue = "test value to pass";

// testValue의 값을 exam5grandC까지 전달하기
function Exam5Context() {
  return <Exam5GrandParent testValue={testValue}></Exam5GrandParent>;
}

export default Exam5Context;
