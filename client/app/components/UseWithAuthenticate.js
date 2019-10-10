import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyToken } from './../redux/actions/session';

export const useWithAuthenticate = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(verifyToken()); 
    }, [dispatch]);
};