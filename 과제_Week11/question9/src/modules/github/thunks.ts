import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./action";

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (error) {
      const e = error as AxiosError;
      dispatch(failure(e));
    }
  };
}
