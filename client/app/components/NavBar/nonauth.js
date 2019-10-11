import React from 'react';
import { Link } from 'react-router-dom';
import {SIGN_UP, LOGIN, HOME}  from '../../constants/routes';

import './../../styles/components/navbar.css';

export const NonAuthNavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left"><Link to={HOME}>HOME</Link></div>
            <div className="navbar-right">
                <Link to={SIGN_UP}>SIGN UP</Link>
                <Link to={LOGIN}>LOGIN</Link>
            </div>
        </div>
    )
}
