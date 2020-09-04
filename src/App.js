import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { Login } from './pages/login/Login';
import { SignUp } from './pages/signup/SignUp';
import { Todos } from './pages/todos/Todos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
