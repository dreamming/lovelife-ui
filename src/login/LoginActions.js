import api from "./api";

export const userLoginedIn = user => ({
  type: "USER_LOGINED_IN",
  user
});

export const loginAction = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.dmzToken = user.token;
    dispatch(userLoginedIn(user));
  });
