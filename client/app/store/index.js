import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import rootReducer from './../redux/reducers';

const initialState = {}; 

const composeEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
    rootReducer,
    initialState, 
    composeEnhancers
); 