export default function userReducer(state = {}, action = {}) {
  switch (action.type) {
    case "USER_LOGINED_IN":
      return action.user;
    default:
      return state;
  }
}
