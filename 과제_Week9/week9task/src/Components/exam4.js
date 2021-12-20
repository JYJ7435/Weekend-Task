import React, { useReducer, useRef } from "react";
import reducer from "../Reducers/reducer";

const initState = {
  users: [
    {
      id: 1,
      username: "tester1",
      email: "tester1@abc.com",
    },
    {
      id: 2,
      username: "tester2",
      email: "tester2@abc.com",
    },
    {
      id: 3,
      username: "tester3",
      email: "tester3@abc.com",
    },
  ],
};

function Exam4() {
  const [state, dispatch] = useReducer(reducer, initState);

  const nameInput = useRef();
  const emailInput = useRef();

  const onEnter = () => {
    const username = nameInput.current.value;
    const email = emailInput.current.value;

    dispatch({
      type: "STORE_USERINFO",
      id:
        state.users.length !== 0
          ? Math.max(...state.users.map((user) => user.id)) + 1
          : 1,
      username,
      email,
    });

    nameInput.current.value = "";
    emailInput.current.value = "";
    nameInput.current.focus();
  };

  const onDelete = (e) => {
    const id = +e.target.id;
    dispatch({
      type: "DELETE_USERINFO",
      id,
    });
  };

  return (
    <>
      <div className="container">
        <input ref={nameInput} />
        <input ref={emailInput} />
        <button onClick={onEnter}>등록</button>
      </div>
      {state.users.map((user) => (
        <div className="container" key={user.id}>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <button onClick={onDelete} id={user.id}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
}

export default Exam4;
