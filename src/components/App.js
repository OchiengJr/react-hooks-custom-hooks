import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";
import NotFoundPage from "./NotFoundPage"; // Import the NotFoundPage component

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/articles/:id">
          <ArticlePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage /> {/* Render NotFoundPage for all other routes */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
