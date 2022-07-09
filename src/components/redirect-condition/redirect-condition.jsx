import React from 'react';
import { Redirect } from 'react-router-dom';

export function RedirectCondition(path, condition) {
  if (condition) {
    return <Redirect to={path} />;
  }

  return null;
}

export default RedirectCondition;
