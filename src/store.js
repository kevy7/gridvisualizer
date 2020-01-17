import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//import reducers here
import reducers from './reducers'; // <-- this will automatically pick our index.js file

const initialState = {};
const middleware = [thunk];

export const store = createStore(
    reducers,
    initialState,
    //applyMiddleware(...middleware)

    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
