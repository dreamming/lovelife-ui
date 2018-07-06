import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import 'antd/dist/antd.css';
import { userLoginedIn } from "./login/LoginActions";
import setAuthorizationHeader from "./routers/setAuthorizationHeader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import rootReducer from "./rootReducer";
import { showArticles } from "./app/MiddleAction";
import App from "./App";
import "./index.css";
import avatarImg from "./assets/avatarImg.png";
import backGroundImg from "./assets/Chrysanthemum.jpg";

import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.dmzToken) {
  const payload = decode(localStorage.dmzToken);
  const user = {
    token: localStorage.dmzToken,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.dmzToken);
  store.dispatch(userLoginedIn(user));
}

// store.dispatch(
//   showArticles([
//     {
//       id: "1",
//       photo: backGroundImg,
//       title: "Lovely",
//       subtitle: "Miss You",
//       author: "dmz",
//       authorDes: "girl",
//       avatar: avatarImg
//     },
//     {
//       id: "2",
//       photo: "",
//       author: "dmz",
//       authorDes: "girl",
//       avatar: avatarImg
//     },
//     {
//       id: "3",
//       photo: "",
//       author: "dmz",
//       authorDes: "girl",
//       avatar: avatarImg
//     },
//     {
//       id: "4",
//       photo: "",
//       author: "dmz",
//       authorDes: "girl",
//       avatar: avatarImg
//     },
//     {
//       id: "5",
//       photo: "",
//       author: "dmz",
//       authorDes: "girl",
//       avatar: avatarImg
//     }
//   ])
// );

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
