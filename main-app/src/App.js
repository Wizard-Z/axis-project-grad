import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import routeConstants from "./route.js";
import Error from "./Components/Error";
import React from "react";
const {
  LANDING_PAGE,
  PARTNERS_AVAILABLE,
  DYNAMIC_FORMS,
  DYNAMIC_QUOTES,
  TESTING,
} = routeConstants;
function App() {
  return (
    <div className="app">
      <NavBarComponent />
      <Router>
        <Switch>
          <Route
            exact
            path={LANDING_PAGE.route}
            component={LANDING_PAGE.name}
          ></Route>
          <Route
            exact
            path={PARTNERS_AVAILABLE.route}
            component={PARTNERS_AVAILABLE.name}
          ></Route>
          <Route
            exact
            path={DYNAMIC_FORMS.route}
            component={DYNAMIC_FORMS.name}
          ></Route>
          <Route
            exact
            path={DYNAMIC_QUOTES.route}
            component={DYNAMIC_QUOTES.name}
          ></Route>
          <Route exact path={TESTING.route} component={TESTING.name}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
