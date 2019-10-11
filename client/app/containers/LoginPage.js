import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './../redux/actions/session';
import * as routes from './../constants/routes';
import NavBar from './../components/NavBar';

export const LoginPage = context => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');

    const dispatch = useDispatch();
    const error = useSelector(state => state.sessionState.loginError.message);
    const loading = useSelector(state => state.sessionState.isLoading);
    const authUser = useSelector(state => state.sessionState.authUser); 
    
    if (authUser) {
        context.history.push('/'); 
    }

    const handleChange = setter => e => {
        setter(e.target.value);
    }

    const submit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    }

    return (
        <>
            <NavBar />
            <div className='app-container'>
                <h1>Login</h1>
                <div className="auth-form">
                    <form onSubmit={submit}>
                        <input className="form-input" type="email" placeholder="Email" value={email} onChange={handleChange(setEmail)} />
                        <input className="form-input" type="password" placeholder="Password" onChange={handleChange(setPassword)} />

                        <div><span style={{ color: "red" }}>{error || ""}</span></div>

                        <input className="form-submit" type="submit" value={loading ? "Verifying..." : "Login"} />
                    </form>
                </div>
                {redirect ? <Redirect to={routes.HOME} /> : null}
            </div>

        </>
    );
}
