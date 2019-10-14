import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { verifyToken } from './../redux/actions/session';

export const Auth = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(verifyToken()); 
    }, [dispatch]);
}