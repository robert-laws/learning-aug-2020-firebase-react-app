import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  SignInPage,
  CreateAccountPage,
  ProtectedRoute,
  useAuth,
} from '../auth';
import { EditProfilePage } from '../user';
import { ReservationsListPage } from '../reservations';

export function App() {
  const { isLoading, user } = useAuth();

  return (
    <Router>
      <Switch>
        <Route exact path='/sign-in'>
          <SignInPage />
        </Route>
        <Route path='/create-account'>
          <CreateAccountPage />
        </Route>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/' exact>
          <ReservationsListPage />
        </ProtectedRoute>
        <ProtectedRoute
          isAuthed={!!user}
          isLoading={isLoading}
          path='/edit-profile'
        >
          <EditProfilePage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
