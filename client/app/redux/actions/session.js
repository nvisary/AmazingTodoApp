export const SET_AUTH_USER = 'SET_AUTH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SING_UP_USER = 'SING_UP_USER';
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS';
export const SIGN_UP_USER_ERROR = 'SIGN_UP_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_ERROR = 'VERIFY_TOKEN_ERROR';

export const logoutUser = () => {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER,
        authUser: null,
    }
};

export const verifyTokenSuccess = (user) => ({
    type: VERIFY_TOKEN_SUCCESS,
    authUser: {
        _id: user._id,
        email: user.email,
    }
});

export const verifyTokenError = (error) => {
    localStorage.removeItem('token');
    return {
        type: VERIFY_TOKEN_ERROR,
        authUser: null,
        verifyError: error
    }
};

export const verifyToken = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const requestBody = {
                query: `
                query {
                    verifyToken(token: "${token}") {
                        _id
                        email
                    }
                }
            `
            }

            fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            })
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(data => {
                    const user = data.data.verifyToken;
                    dispatch(verifyTokenSuccess(user));
                })
                .catch(err => dispatch(verifyTokenError(err)))
        }
    }
}

export const loginUserSuccess = (_id, token, email) => {
    localStorage.setItem('token', token);
    return {
        type: LOGIN_USER_SUCCESS,
        isLoading: false,
        authUser: {
            _id,
            email
        }
    };
}

export const loginUserError = (error) => {
    return {
        type: LOGIN_USER_ERROR,
        loginError: error,
        isLoading: false
    }
}

export const loginUserAction = () => {
    return {
        type: LOGIN_USER,
        isLoading: true,
        authUser: null
    }
}

export const loginUser = (email, password) => {
    return dispatch => {
        const requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}")
                    {
                        _id
                        token
                        email
                    }
                }
            
            `
        };
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    throw Error(data.errors[0].message);
                }
                dispatch(loginUserSuccess(data.data.login._id, data.data.login.token));
            })
            .catch(error => dispatch(loginUserError(error)));
    }
}

export const signupUserAction = () => {
    return {
        type: SING_UP_USER, 
        isLoading: true
    }
}

export const signupUserSuccess = (_id, token) => {
    return {
        type: SIGN_UP_USER_SUCCESS, 
        authUser: {
            _id, 
            token
        }
    }
}

export const signupUserError = (error) => {
    return {
        type: SIGN_UP_USER_ERROR, 
        signupError: error, 
        isLoading: false 
    }
}

export const signupUser = (email, password, confirm) => {
    return dispatch => {
        dispatch(signupUserAction()); 
        
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

        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    throw Error(data.errors[0].message);
                }
                const {_id, token } = data.data.createUser; 
                console.log(_id, " ",  token) 
                dispatch(signupUserSuccess(_id, token)); 
            })
            .catch(error => dispatch(signupUserError(error.message)));
    }
}