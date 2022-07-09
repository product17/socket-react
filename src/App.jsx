import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Home,
  Lobby,
  Auth,
  CardBuilder,
} from './pages';
import { init } from './sockets/connect.socket';

init();

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/card-builder'>
          <CardBuilder />
        </Route>
        <Route path='/lobby'>
          <Lobby />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
