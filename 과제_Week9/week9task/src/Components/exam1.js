import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 20px;
`;

function Exam1() {
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    age: "",
  });

  const { name, nickname, age } = user;

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="container">
        <StyledInput
          onChange={onChange}
          className="nameInput"
          name="name"
          placeholder="input your name"
        />
        <StyledInput
          onChange={onChange}
          className="nickInput"
          name="nickname"
          placeholder="input your nickname"
        />
        <StyledInput
          onChange={onChange}
          className="ageInput"
          name="age"
          placeholder="input your age"
        />
      </div>
      <div className="results">
        I am {name}, also known as {nickname}, and {age} years old
      </div>
    </>
  );
}

export default Exam1;
