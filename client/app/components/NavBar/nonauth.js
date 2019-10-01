import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import './../../styles/components/navbar.css';

const NonAuthNavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left"><Link to={routes.HOME}>HOME</Link></div>
            <div className="navbar-right">
                <Link to={routes.SIGN_UP}>SIGN UP</Link>
                <Link to={routes.LOGIN}>LOGIN</Link>
            </div>
        </div>
    )
}

export default NonAuthNavBar;