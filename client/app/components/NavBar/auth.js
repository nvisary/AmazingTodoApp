import React from 'react';
import { useDispatch } from 'redux-react-hook';
import { Link } from 'react-router-dom';
import * as routes from './../../constants/routes';
import * as actions from './../../constants/action_types';

import './../../styles/components/navbar.css'; 

const AuthNavBar = () => {
    const dispatch = useDispatch();

    function logout() {
        dispatch({ type: actions.SET_AUTH_USER, authUser: null });
        localStorage.removeItem('token');
    }

    return (
        <div className="navbar">
            <div className="navbar-left"><Link to={routes.HOME} /></div>
            <div className="navbar-right" >
                <Link
                    to={routes.HOME}
                    onClick={logout} >LOGOUT</Link>
            </div>
        </div>
    );
}

export default AuthNavBar;