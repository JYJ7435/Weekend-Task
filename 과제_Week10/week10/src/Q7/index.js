/**
 * Q7) redux 연결하기 (25pt)
 * 요구 사항:
 * 1. todos 모듈 작성 (./modules/todos.js에 작성)
 * 2. root 리듀서 작성 (./modules/index.js에 작성)
 * 3. Todos 컴포넌트 작성 (./components/Todos.js에 작성)
 * 4. TodosContainer 컴포넌트 작성 (./containers/TodosContainer.js에 작성)
 * 5. root 리듀서를 사용하여 store 생성 (현재 파일에 작성)
 * 6. Provider 설정 (현재 파일에 작성)
 * 7. TodosContainer 컴포넌트 렌더링 (현재 파일에 작성)
 *
 * 구현 결과: https://drive.google.com/file/d/1mzLMz0RS-Z8ANAqiAIlEj-8B9mbcJkRR/view?usp=sharing
 */
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodosContainer from "./containers/TodosContainer";
import rootReducer from "./modules";

const store = createStore(rootReducer);

function ReduxPractice() {
  // do something
  return (
    <div>
      <Provider store={store}>
        <TodosContainer></TodosContainer>
      </Provider>
    </div>
  );
}

export default ReduxPractice;
