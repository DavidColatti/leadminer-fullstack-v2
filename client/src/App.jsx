import React, { useContext, useEffect, useState } from "react";
import { ModalRoute, ModalContainer } from "react-router-modal";
import { Switch, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER } from "./graphql/queries";
import { UserContext } from "./providers/UserProvider";

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import QuickPick from "./components/QuickPick";
import SearchTool from "./components/SearchTool";
import LandingPage from "./components/LandingPage";
import ModalContent from "./components/ModalContent";

const App = () => {
  const userAuthenticaton = useContext(UserContext);
  const [user, setUser] = useState(null);
  const { data } = useQuery(GET_USER, {
    variables: { data: userAuthenticaton },
  });

  useEffect(() => {
    setUser(data?.findUser);
  }, [data]);

  return (
    <div className="app">
      <ModalContainer />
      <NavBar user={user} />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" render={() => <Dashboard user={user} />} />
        <Route
          exact
          path="/quick-pick"
          render={() => <QuickPick user={user} />}
        />
        <Route
          exact
          path="/search-tool"
          render={() => <SearchTool user={user} />}
        />
      </Switch>

      <ModalRoute path="/dashboard/:id" parentPath="/dashboard">
        <ModalContent user={user} />
      </ModalRoute>
    </div>
  );
};

export default App;
