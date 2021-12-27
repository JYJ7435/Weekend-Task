// Action type 작성
// 1. todos 불러오기 Action (PENDING, SUCCESS, FAILURE 3개)
// 2. todo 추가 Action (PENDING, SUCCESS, FAILURE 3개)
import * as todosAPI from "../api/todos";
const PENDING_TODOS = "PENDING_TODOS";
const SUCCESS_TODOS = "SUCCESS_TODOS";
const FAILURE_TODOS = "FAILURE_TODOS";

const PENDING_TODO = "PENDING_TODO";
const SUCCESS_TODO = "SUCCESS_TODO";
const FAILURE_TODO = "FAILURE_TODO";

// Action 생성자 작성 (todos 관련 api는 Q8/api/todos.js를 참고해주세요.)
// 1. todos 불러오기 Action 생성자 (saga 사용 시 제너레이터 추가 작성)
// 2. todo 추가 Action 생성자 (saga 사용 시 제너레이터 추가 작성)
export const pendingTodos = () => async (dispatch) => {
  dispatch({ type: PENDING_TODOS });
  try {
    const todos = await todosAPI.fetchTodos();
    dispatch({ type: SUCCESS_TODOS, todos });
  } catch (e) {
    dispatch({ type: FAILURE_TODOS, error: e });
  }
};

export const pendingTodo = (text) => async (dispatch) => {
  dispatch({ type: PENDING_TODO });
  try {
    const todo = await todosAPI.postTodo(text);
    dispatch({ type: SUCCESS_TODO, todo });
  } catch (e) {
    dispatch({ type: FAILURE_TODO, error: e });
  }
};

// pending일 때 state는 { loading: true, data: null, error: null }
// success일 때 state는 { loading: false, data: api 응답 결과(배열), error: null }
// failure일 때 state는 { loading: false, data: null, error: api 응답 결과(객체) }

// initial state
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// todos 리듀서 작성
function todos(state = initialState, action) {
  switch (action.type) {
    case PENDING_TODOS:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS_TODOS:
      return {
        ...state,
        loading: false,
        data: action.todos,
        error: null,
      };
    case FAILURE_TODOS:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    case PENDING_TODO:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS_TODO:
      return {
        ...state,
        loading: false,
        data: action.todo,
        error: null,
      };
    case FAILURE_TODO:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export default todos;
