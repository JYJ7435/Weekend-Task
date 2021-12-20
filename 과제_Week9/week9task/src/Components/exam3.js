import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color || "black"};
  border-radius: ${(props) => props.radius}%;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color || "black"};
  border: ${(props) => props.border}px solid black;
`;

function Exam3() {
  return (
    <>
      <Circle color="pink" radius="50" />
      <Box color="green" border="2" />
    </>
  );
}

export default Exam3;
