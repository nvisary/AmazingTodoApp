import React, { Component } from 'react';

import '../styles/App.css';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../relay-env';
import { Link } from 'react-router-dom';



export const App = () => {
    return (
        <div>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
        </div>

    );

}


