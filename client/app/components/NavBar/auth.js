import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HOME } from './../../constants/routes';
import { logoutUser } from './../../redux/actions/session';

import './../../styles/components/navbar.css';

export const AuthNavBar = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    }

    return (
        <div className="navbar">
            <div className="navbar-left"><Link to={HOME} /></div>
            <div className="navbar-right" >
                <Link
                    to={HOME}
                    onClick={logout} >LOGOUT</Link>
            </div>
        </div>
    );
}
