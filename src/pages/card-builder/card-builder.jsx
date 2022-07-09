import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { CardViewer } from './card-viewer';

export function CardBuilder() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/view`}>
        <CardViewer />
      </Route>
    </Switch>
  );
}

export default CardBuilder;
