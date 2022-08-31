import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
import PageLoader from "components/PageLoader";

import { setAuthHeaders } from "./apis/axios";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
    // logger.info("Never use console.log");
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact component={Dashboard} path="/dashboard" />
      </Switch>
    </Router>
  );
};

export default App;
