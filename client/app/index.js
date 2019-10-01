import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { StoreContext } from 'redux-react-hook';
import store from './store';

import { AppRouter } from './router';

ReactDOM.render((
    <StoreContext.Provider value={store}>
        <HashRouter>
            <AppRouter />
        </HashRouter>
    </StoreContext.Provider>
), document.getElementById('root')); 