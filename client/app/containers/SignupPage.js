import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook'
import { Redirect } from 'react-router-dom';
import * as actions from '../constants/action_types';
import * as routes from '../constants/routes';


const SignupPage = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    const handleChange = setter => e => {
        setter(e.target.value);
    }

    const submit = async (e) => {
        //e.preventDefault();
        setLoading(true);

        try {
            const requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {email: "${email}" password: "${password}" confirm: "${confirm}"})
                        {
                            _id
                            token
                            email
                        }
                    }
                `
            };

            const { data } = await axios.post('http://localhost:3000/graphql', requestBody);

            if (data.errors) {
                setError(data.errors[0].message);
                setLoading(false);
            } else {
                setError(null);
                setLoading(false);
                const { _id, token } = await data.data.createUser;
                dispatch({
                    type: actions.SET_AUTH_USER,
                    authUser: {
                        _id,
                        email
                    }
                });
                localStorage.setItem('token', token);
                setRedirect(true);
            }
        }
        catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    return (
        <div>
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
            {redirect ? <Redirect to={routes.HOME} /> : null}
        </div>
    );
}

export default SignupPage; 