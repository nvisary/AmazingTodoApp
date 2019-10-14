import React from 'react';
import { NavBar } from './../components/NavBar';
import { Auth } from './../components/Auth';
import '../styles/containers/App.css';

export const App = () => {
    Auth(); 

    return (
        <>
            <NavBar />
            <div className='app-container'>
                Welcome to Amazing TODO app
            </div>
        </>
    );
};


