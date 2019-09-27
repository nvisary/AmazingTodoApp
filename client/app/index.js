import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { AppRouter } from './router';

ReactDOM.render((
    <HashRouter>
        <AppRouter />
    </HashRouter>
), document.getElementById('root')); 