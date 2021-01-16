import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Login from "./Login";
import App from "../App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {localStorage.getItem("token") ? (
          <Route exact path="/dashboard" component={App} />
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
