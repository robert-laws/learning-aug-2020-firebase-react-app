import React from 'react';
// import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage, CreateAccountPage } from './auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <SignInPage />
        </Route>
        <Route path='/create-account'>
          <CreateAccountPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
