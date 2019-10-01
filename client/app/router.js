import { Switch, Route } from 'react-router-dom';
import React from 'react'

import * as routes from './constants/routes'; 

import { App } from './containers/App';
import { LoginPage } from './containers/LoginPage';
import SignupPage from './containers/SignupPage';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={routes.HOME} component={App} />
            <Route exact path={routes.LOGIN} component={LoginPage} />
            <Route exact path={routes.SIGN_UP} component={SignupPage} />
        </Switch>
    );
}