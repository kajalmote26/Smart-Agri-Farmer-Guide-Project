import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import AuthenticationService from '../../services/AuthenticationService';

export default function AuthenticatedRoute(props) {
  if (AuthenticationService.isUserLoggedIn()) {
    return <Route {...props} />;
  } else {
    return <Redirect to='/login' />;
  }
}
