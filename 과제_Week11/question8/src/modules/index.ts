import { combineReducers } from "redux";
import todos from "./todos";

//루트 리듀서에 todos 등록
const rootReducer = combineReducers({ todos });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
