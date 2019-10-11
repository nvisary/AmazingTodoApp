import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { store } from './store';
import {Provider} from 'react-redux'; 

import { AppRouter } from './router';
ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <AppRouter />
        </HashRouter>
    </Provider>
), document.getElementById('root')); 