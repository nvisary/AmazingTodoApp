import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyToken } from './../redux/actions/session';
import NavBar from './../components/NavBar';

import '../styles/containers/App.css';

export const App = () => {
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch(verifyToken()); 
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <div className='app-container'>
                Welcome to Amazing TODO app
            </div>
        </>
    );
};


