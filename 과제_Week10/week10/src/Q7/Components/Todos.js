// 1. todos, onCreate, onToggle을 props으로 전달받는다.
// 2. todos의 각 요소를 목록 형태로 렌더링한다.
// 3. "등록" 버튼 클릭 시 input 요소에 작성된 텍스트로 새로운 todo를 생성한다. (빈 문자열 혹은 공백만 있을 경우 생성 X)
// 3.1. "등록" 버튼 클릭 시 input 요소에 작성된 텍스트를 제거한다.
// 4. todo(할 일) 클릭 시 취소선을 추가/제거한다.

import React, { useState } from "react";

// do something
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todos({ todos, onToggle, onCreate }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default React.memo(Todos);
