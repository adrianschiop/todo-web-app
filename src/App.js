import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import { Login } from './pages/login/Login';
import { SignUp } from './pages/signup/SignUp';
import { Todos } from './pages/todos/Todos';

function App() {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <BrowserRouter>
      {
        !isLogged ?
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/" />
          </Switch>
          :
          <Switch>
            <Route path="/todos" component={Todos} />
            <Redirect to="/todos" />
          </Switch>
      }
    </BrowserRouter>
  );
}

export default App;
