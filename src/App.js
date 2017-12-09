import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import LoginPage from "./login/LoginPage";
import HomePage from "./app/HomePage";
import IndexPage from "./app/IndexPage";
import ArticlesCOntainer from "./article/ArticlesContainer";
import ArticleDetail from "./article/ArticleDetail";
import ArticleEditPage from "./article/ArticleEditPage";

// class App extends Component {
//   render() {
//     return (
//       <MuiThemeProvider>
//         <LoginPage />
//       </MuiThemeProvider>
//     );
//   }
// }

const App = ({ location }) => (
  <div>
    <Switch>
      <Route location={location} exact path="/" component={IndexPage} />
      <Route location={location} exact path="/home" component={HomePage} />
      {/* <Redirect from="/home" to="/welcome" /> */}
      {/* ＜Redirect from="messages/:id" to="/messages/:id" /> */}
      {/* <Route
      location={location}
      exact
      path="/home/articles"
      component={ArticlesCOntainer}
    /> */}
      <Route location={location} exact path="/login" component={LoginPage} />
      <Route
        location={location}
        exact
        path="/article/edit"
        component={ArticleEditPage}
      />
      {/* <Route
      location={location}
      exact
      path="/article"
      component={ArticlesCOntainer}
    /> */}
      <Route
        location={location}
        exact
        path="/article/articleDetail/:id"
        component={ArticleDetail}
      />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
);
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
export default App;
