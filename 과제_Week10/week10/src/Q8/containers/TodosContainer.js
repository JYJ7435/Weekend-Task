// 1. redux store의 todos 상태를 구독(subscribe)한다.
// 2. mount 시 todos 불러오기 Action을 dispatch한다. (useEffect 사용)
// 2. onCreate 함수를 작성한다.
// 2.1. onCreate 함수는 문자열을 전달받아 todo 추가 Action을 dispatch한다.
// 3. Todos 컴포넌트에 todos.loading, todos.data, todos.error, onCreate을 props로 전달하여 렌더링한다.

// do something
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pendingTodos, pendingTodo } from "../modules/todos";
import Todos from "../components/Todos";

function TodosContainer() {
  const { data, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pendingTodos());
  }, [dispatch]);

  const onCreate = useCallback(
    (text) => dispatch(pendingTodo(text)),
    [dispatch]
  );

  return (
    <div>
      <Todos todos={data} loading={loading} onCreate={onCreate} error={error} />
    </div>
  );
}

export default TodosContainer;
