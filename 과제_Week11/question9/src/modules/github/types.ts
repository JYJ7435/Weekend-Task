import { ActionType } from "typesafe-actions";
import { GitHubProfile } from "../../api/github";
import { AsyncState } from "../../lib/reducerUtils";
import * as actions from "./action";

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: AsyncState<GitHubProfile, Error>;
};
