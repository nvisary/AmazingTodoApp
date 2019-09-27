import { Switch, Route } from 'react-router-dom';
import React from 'react'

import { App } from './containers/App';
import { LoginPage } from './containers/LoginPage';
import { RegistrationPage } from './containers/RegistrationPage';


export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/registration' component={RegistrationPage} />
        </Switch>
    );
}