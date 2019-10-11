import { 
    SET_AUTH_USER, 
    LOGOUT_USER, 
    VERIFY_TOKEN_ERROR, 
    VERIFY_TOKEN_SUCCESS, 
    LOGIN_USER, 
    LOGIN_USER_ERROR, 
    LOGIN_USER_SUCCESS, 
    SING_UP_USER, 
    SIGN_UP_USER_ERROR, 
    SIGN_UP_USER_SUCCESS 
} from './../actions/session';

const INITIAL_STATE = {
    authUser: null,
    isLoading: false,
    verifyError: '',
    loginError: '',
    signupError: ''
}

function sessionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_AUTH_USER: {
            return { authUser: action.authUser, isLoading: false }
        }
        case LOGOUT_USER: {
            return {...state, authUser: action.authUser}
        }
        case VERIFY_TOKEN_SUCCESS: {
            return {...state, authUser: action.authUser}
        }
        case VERIFY_TOKEN_ERROR: {
            return {...state, authUser: action.authUser, verifyError: action.verifyError, isLoading: action.isLoading}
        }
        case LOGIN_USER: {
            return {...state, authUser: action.authUser, isLoading: action.isLoading}
        }
        case LOGIN_USER_SUCCESS: {
            return {...state, authUser: action.authUser, isLoading: action.isLoading}
        }
        case LOGIN_USER_ERROR: {
            return {...state, authUser: action.authUser, loginError: action.loginError, isLoading: action.isLoading}
        }
        case SING_UP_USER: {
            return {...state, isLoading: action.isLoading}
        }
        case SIGN_UP_USER_SUCCESS: {
            return {...state, authUser: action.authUser}
        }
        case SIGN_UP_USER_ERROR: {
            return {...state, signupError: action.signupError}
        }
        default:
            return state;
    }
}

export default sessionReducer; 