import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

import { HOME, LOGIN, SIGN_UP, PROFILE } from './constants/routes';

import { App } from './containers/App';
import { LoginPage } from './containers/LoginPage';
import { SignupPage } from './containers/SignupPage';
import { ProfilePage } from './containers/ProfilePage';

import { Auth } from './components/Auth';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={HOME} component={App} />
            <Route exact path={LOGIN} component={LoginPage} />
            <Route exact path={SIGN_UP} component={SignupPage} />
            <PrivateRoute path={PROFILE} >
                <ProfilePage />
            </PrivateRoute>
        </Switch>
    );
}

export const PrivateRoute = ({ children, ...rest }) => {
    Auth();
    const auth = useSelector(state => state.sessionState.authUser);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return auth ? children : <Redirect to={{
                    pathname: LOGIN,
                    state: { from: location }
                }}
                />
            }}
        />
    );
} 