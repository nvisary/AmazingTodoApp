import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signupUser } from './../redux/actions/session';
import { HOME } from '../constants/routes';

import NavBar from './../components/NavBar';

export const SignupPage = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const dispatch = useDispatch();

    const error = useSelector(state => state.sessionState.signupError);
    const loading = useSelector(state => state.sessionState.isLoading);
    const redirect = false;

    const handleChange = setter => e => {
        setter(e.target.value);
    }

    const submit = e => {
        dispatch(signupUser(email, password, confirm));
    }

    return (
        <>
            <NavBar />
            <div className='app-container'>
                <h1>Sign up</h1>
                <div className="auth-form">
                    <form onSubmit={submit}>
                        <input className="form-input" type="email" placeholder="Email" value={email} onChange={handleChange(setEmail)} />
                        <input className="form-input" type="password" placeholder="Password" value={password} onChange={handleChange(setPassword)} />
                        <input className="form-input" type="password" placeholder="Confirm password" value={confirm} onChange={handleChange(setConfirm)} />

                        <div><span style={{ color: "red" }}>{error || ""}</span></div>

                        <input className="form-submit" type="submit" value={loading ? "Verifying..." : "Register"} />
                    </form>
                </div>
                {redirect ? <Redirect to={HOME} /> : null}
            </div>
        </>
    );
}
