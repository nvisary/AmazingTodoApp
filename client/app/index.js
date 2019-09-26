import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import { AppRouter } from './router';

ReactDOM.render((
    <BrowserRouter>
        <App />
        <AppRouter />
    </BrowserRouter>
), document.getElementById('root')); 