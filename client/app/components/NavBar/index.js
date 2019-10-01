import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import AuthNavBar from './auth';
import NonAuthNavBar from './nonauth';

function NavBar() {
    const mapState = useCallback((state) => ({
        authUser: state.sessionState.authUser
    }), [])

    const { authUser } = useMappedState(mapState);

    return authUser ? <AuthNavBar /> : <NonAuthNavBar />
}

export default NavBar;