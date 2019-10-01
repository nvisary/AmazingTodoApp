import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../relay-env';
import { Link } from 'react-router-dom';

import '../styles/containers/App.css';

import useWithAuthenticate from './../components/UseWithAuthenticate'; 
import NavBar from './../components/NavBar'; 

export const App = () => {
    useWithAuthenticate(); 

    return (
        <>
        <NavBar/>
        <div className='app-container'>
            
            Welcome to Amazing TODO app
        </div>
        </>
    );
};


