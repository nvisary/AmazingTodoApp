import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AuthNavBar } from './auth';
import { NonAuthNavBar } from './nonauth';

const NavBar = () => {
    const authUser = useSelector(store => store.sessionState.authUser);  
    return authUser ? <AuthNavBar /> : <NonAuthNavBar />
}

export default NavBar; 
