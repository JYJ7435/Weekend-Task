import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "STORE_USERINFO":
      return {
        users: state.users.concat(action),
      };

    case "DELETE_USERINFO":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}

export default reducer;
