// 1. redux store의 todos 상태를 구독(subscribe)한다.
// 2. onCreate 함수를 작성한다.
// 2.1. onCreate 함수는 문자열을 전달받아 todo 추가 Action을 dispatch한다.
// 3. onToggle 함수를 작성한다.
// 3.1. onToggle 함수는 todo의 id를 전달받아 해당 id의 todo 상태를 변경하는 Action을 dispatch한다.
// 4. Todos 컴포넌트에 todos, onCreate, onToggle을 props로 전달하여 렌더링한다.
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import todos, { addTodo, toggleTodo } from "../modules/todos";
import Todos from "../Components/Todos";
import { createStore } from "redux";
// do something
const store = createStore(todos);
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  return (
    <div>
      <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </div>
  );
}

export default TodosContainer;
