import { call, put } from "redux-saga/effects";
import { AsyncActionCreator, PayloadAction } from "typesafe-actions";

type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

function isPayloadAction(action: any): action is PayloadAction<string, any> {
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreator<[T1, P1], [T2, P2], [T3, P3]> | any,
  promiseCreator: PromiseCreatorFunction<P1, P2>
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result: P2 = isPayloadAction(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (e) {
      yield put(asyncActionCreator.failure(e));
    }
  };
}
