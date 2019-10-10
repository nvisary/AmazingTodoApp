import React from 'react';

import '../styles/containers/App.css';

import { useWithAuthenticate } from './../components/UseWithAuthenticate';
import NavBar from './../components/NavBar';

export const App = () => {
    useWithAuthenticate();

    return (
        <>
            <NavBar />
            <div className='app-container'>

                Welcome to Amazing TODO app
            </div>
        </>
    );
};


