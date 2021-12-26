// Action type 작성
// 1. todo 추가 Action
// 2. todo 상태(완료/미완료) 변경 Action
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// Action 생성자 작성
// 1. todo 추가 Action 생성자
// 2. todo 상태(완료/미완료) 변경 Action 생성자
let nextId = 4;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// initial state
const initialState = [
  {
    id: 1,
    text: "todo 1",
    done: false,
  },
  {
    id: 2,
    text: "todo 2",
    done: false,
  },
  {
    id: 3,
    text: "todo 3",
    done: false,
  },
];

// todos 리듀서 작성
function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export default todos;
