import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SingleAnime from "./pages/SingleAnime";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route exact path="/:id">
          <SingleAnime />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
