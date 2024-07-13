import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="*" component={() => <h2>404 Not Found</h2>} />
      </Switch>
    </Router>
  );
}

export default App;
