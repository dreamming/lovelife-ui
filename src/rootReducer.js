import { combineReducers } from "redux";
import user from "./login/LoginReducer";
import articles from "./article/ArticleReducer";

export default combineReducers({
  user,
  articles
});
