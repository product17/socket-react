import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import {
  Create,
  Join,
  Room,
} from './pages';

export function Lobby() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/create`}>
        <Create />
      </Route>
      <Route path={`${path}/join`}>
        <Join />
      </Route>
      <Route path={`${path}`}>
        <Room />
      </Route>
    </Switch>
  );
}

export default Lobby;
