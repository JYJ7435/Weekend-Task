// 1. todos, loading, error, onCreate을 props으로 전달받는다.
// 2. input 요소는 항상 상위에 유지한다.
// 2. loading 중 일때는 "로딩 중..." 텍스트를 화면에 출력한다.
// 3. error가 발생했다면 "에러 발생" 텍스트를 화면에 출력한다.
// 4. todos 데이터가 없다면 "할 일을 추가해주세요" 텍스트를 화면에 출력한다.
// 4. todos의 각 요소를 목록 형태로 렌더링한다.
// 5. "등록" 버튼 클릭 시 input 요소에 작성된 텍스트로 새로운 todo를 생성한다. (빈 문자열 혹은 공백만 있을 경우 생성 X)
// 5.1. "등록" 버튼 클릭 시 input 요소에 작성된 텍스트를 제거한다.

import React, { useState } from "react";
import { useSelector } from "react-redux";

const TodoItem = React.memo(function TodoItem({ todo }) {
  return <li>{todo.text}</li>;
});

const TodoList = React.memo(function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});
// do something

function Todos({ todos, onCreate }) {
  const { data, loading, error } = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return <div>할 일을 추가해주세요</div>;
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
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;
