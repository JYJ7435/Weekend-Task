import { ActionType } from "typesafe-actions";
import { GitHubProfile } from "../../api/github";
import * as actions from "./action";

export type GithubAction = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    data: GitHubProfile | null;
    error: Error | null;
  };
};
