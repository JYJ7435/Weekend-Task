import { getUserProfile, GitHubProfile } from "../../api/github";
import { getUserProfileAsync } from "./action";
import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosError } from "axios";
import { GET_USER_PROFILE } from ".";
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* getUserProfileSaga(
//   action: ReturnType<typeof getUserProfileAsync.request>
// ) {
//   try {
//     const userProfile: GitHubProfile = yield call(
//       getUserProfile,
//       action.payload
//     );
//     yield put(getUserProfileAsync.success(userProfile));
//   } catch (error) {
//     const e = error as AxiosError;
//     yield put(getUserProfileAsync.failure(e));
//   }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
