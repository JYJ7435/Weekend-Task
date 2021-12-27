/**
 * Q8) redux 연결하기 + redux middleware 사용하기 (40pt)
 * 요구 사항:
 * 1. todos 모듈 작성 (./modules/todos.js에 작성)
 * 2. root 리듀서 작성 (./modules/index.js에 작성)
 * 3. Todos 컴포넌트 작성 (./components/Todos.js에 작성)
 * 4. TodosContainer 컴포넌트 작성 (./containers/TodosContainer.js에 작성)
 * 5. root 리듀서를 사용하여 store 생성 (현재 파일에 작성) 및 middleware 설정
 * 6. Provider 설정 (현재 파일에 작성)
 * 7. TodosContainer 컴포넌트 렌더링 (현재 파일에 작성)
 *
 * 구현 결과: https://drive.google.com/file/d/1zmBd5I2q88QwpAtp7GCWiwGsGNj64CmB/view?usp=sharing
 */

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import TodosContainer from "./containers/TodosContainer";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

// do something
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

function ReduxMiddlewarePractice() {
  return (
    <div>
      <Provider store={store}>
        <TodosContainer></TodosContainer>
      </Provider>
    </div>
  );
}

export default ReduxMiddlewarePractice;
