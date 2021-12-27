// combineReducers를 사용하여 todos 리듀서를 rootReducer에 합쳐주세요.
// 그 후 rootReducer를 export 해주세요.
import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({ todos });

export default rootReducer;
