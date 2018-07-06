import api from "./api";
import setAuthorizationHeader from "../routers/setAuthorizationHeader";

export const userLoginedIn = user => ({
  type: "USER_LOGINED_IN",
  user
});

export const loginAction = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.dmzToken = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoginedIn(user));    
  });
